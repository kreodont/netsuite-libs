import {jsonProperty, Serializable} from 'ts-serializable';
import "reflect-metadata";
import {Operation} from './Operation';
import {log, LogArray} from './Logger';
import {writeFile} from './Files';
import {error} from 'N/log';
import {File} from 'N/file';
import file from 'N/file'
import {getCurrentScript} from 'N/runtime';
import {getBaseURL, getSqlResultAsMap} from './Helpers';
import {EntryPoints} from "N/types";
import {email} from 'N';

export type ScriptContext =
    | EntryPoints.Scheduled.executeContext
    | EntryPoints.WorkflowAction.onActionContext
    | EntryPoints.RESTlet.get
    | EntryPoints.RESTlet.post
    | EntryPoints.RESTlet.put
    | EntryPoints.RESTlet.delete_
    | EntryPoints.MassUpdate.eachContext
    | EntryPoints.MapReduce.mapContext
    | EntryPoints.MapReduce.reduceContext
    | EntryPoints.MapReduce.summarizeContext
    | EntryPoints.MapReduce.getInputDataContext
    | EntryPoints.Suitelet.onRequestContext
    | EntryPoints.UserEvent.beforeLoadContext
    | EntryPoints.UserEvent.beforeSubmitContext
    | EntryPoints.UserEvent.afterSubmitContext
    | EntryPoints.Client.pageInitContext
    | EntryPoints.Client.sublistChangedContext
    | EntryPoints.Client.fieldChangedContext
    | EntryPoints.Client.saveRecordContext
    | null;

interface ScriptInterface {
    logicFunction: (impactedRecords: {[key: string]: Serializable | null | string}, logs?: string[]) => Operation[]
    loadRecordsFunction: (context: ScriptContext, logs?: string[]) => {[key: string]: Serializable | null | string}
    triggerName?: string
}
function formatDateWithoutSeparator(date: Date) {
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, `0`);
    const day = String(date.getDate()).padStart(2, `0`);
    const hours = String(date.getHours()).padStart(2, `0`);
    const minutes = String(date.getMinutes()).padStart(2, `0`);
    const seconds = String(date.getSeconds()).padStart(2, `0`);
    const milliseconds = String(date.getMilliseconds()).padStart(3, `0`);

    return year + month + day + '_' + hours + minutes + seconds + milliseconds;
}

export class Script extends Serializable implements ScriptInterface{
    @jsonProperty(String)
    id: string;

    @jsonProperty([Serializable])
    impactedRecords?: {[key: string]: Serializable | null | string};

    @jsonProperty([String])
    logs: LogArray;

    @jsonProperty([Serializable])
    operations: Operation[];

    logicFunction: (impactedRecords: {[key: string]: Serializable | null | string}, logs?: string[]) => Operation[];

    loadRecordsFunction: (context: ScriptContext, logs?: string[]) => {[key: string]: Serializable | null | string};

    triggerName: string;
    notifyOwner: boolean = false

    constructor(args: ScriptInterface) {
        super();
        this.id = getCurrentScript().id;
        this.logs = new LogArray();
        this.operations = [];
        this.impactedRecords = undefined;
        this.logicFunction = args.logicFunction;
        this.loadRecordsFunction = args.loadRecordsFunction;
        this.triggerName = args.triggerName ? args.triggerName : ``;
    }

    applyOperations(): number {
        if (this.operations.length === 0) {
            this.logs.push(`0 operations, nothing to do. Please consider taking at least 1 empty operation 
            to make sure the script is working properly`);
            return 0;
        }
        const operationsApplied = 0;
        for (const op of this.operations) {
            this.logs.push(JSON.stringify(op));
            const errors = op.execute(this.logs);
            if (errors.length > 0) {
                let needExit = false;
                let needException = false;
                let exceptionText = ``;
                for (const e of errors) {
                    log(e.details, `ERROR`, 0, error);
                    this.logs.push(JSON.stringify(e));
                    if (e.stop) {
                        needExit = true;
                    }
                    if (e.throwException) {
                        needException = true;
                        exceptionText += `\n${e.details}`;
                    }
                    if (e.notify) {
                        this.notifyOwner = true
                    }
                }

                if (op.fallback) {op.fallback(this.logs);}

                if (needExit) {
                    return operationsApplied;
                }

                if (needException) {
                    throw exceptionText;
                }
            }
        }
        return operationsApplied;
    }

    run(context: ScriptContext, date: Date): void {
        const fileName = `${formatDateWithoutSeparator(date)}_${this.id}_${this.triggerName}`;
        try {
            log(`Starting "${this.id}" full logs in SuiteScripts/Logs/${fileName}.txt`, fileName);
            this.logs.push(`Loading impacted records`);
            this.impactedRecords = this.loadRecordsFunction(context, this.logs);
            for (const recName in this.impactedRecords) {
                let record = this.impactedRecords[recName];
                if (typeof record !== `string`) {
                    record = JSON.stringify(record);
                }
                this.logs.push(`${recName}:\n${record}`);
            }
            this.logs.push(`Impacted records loaded`);
            this.logs.push(`Calculating operations`);
            this.operations = this.logicFunction(this.impactedRecords, this.logs);
            this.logs.push(`${this.operations.length} operations calculated`);
            this.logs.push(`Applying operations`);
            const operationsApplied = this.applyOperations();
            const fileIds = writeFile(fileName, this.logs.join(`\n`), `SuiteScripts : Logs`, this.logs);
            if (fileIds.length === 0) {
                log(`Failed to save the log file: ${fileName}`, fileName, 0, error);
            }
            log(`Completed. ${operationsApplied} operations applied. Logs: ${getBaseURL()}${file.load({id: fileIds[0]}).url}`, fileName);
            if (this.notifyOwner) {
                notifyOwner('', this.id, file.load({id: fileIds[0]}), this.logs)
            }
        }
        catch (e) {
            log(JSON.stringify(e));
            this.logs.push(JSON.stringify(e));
            writeFile(fileName, this.logs.join(`\n`), `Logs`, this.logs);
            throw e;
        }
    }
}

export function notifyOwner(errorText: string, scriptId: string, attachment: File, logs?: string[]): void {
    const sql = `select employee.id as owner_id, employee.email as owner_email, script.name as script_name from script join employee on script.owner = employee.id join file on file.id = script.scriptfile where script.scriptid = '${scriptId}'`;
    const results = getSqlResultAsMap(sql, logs);
    if (results === undefined) {
        logs?.push(`Failed to run sql: ${sql}, results: ${JSON.stringify(results)}`);
        return;
    }
    if (results.length < 1) {
        logs?.push(`Failed to run sql: ${sql}, results: ${JSON.stringify(results)}`);
        return;
    }

    const ownerId = Number(results[0][`owner_id`]);
    const ownerEmail = String(results[0][`owner_email`]);
    if (!ownerId || ownerEmail.length === 0) {
        logs?.push(`Could not find ownerId or ownerEmail in ${JSON.stringify(results[0])}`);
        return;
    }
    try {
        email.send({
            author: ownerId,
            recipients: [`${ownerEmail}`],
            subject: `Script "${results[0][`script_name`]}" failed`,
            body: errorText,
            attachments: [attachment],
        });
        logs?.push(`Email to ${ownerEmail} sent`);
    } catch (e) {
        logs?.push(`Could not send a mail: ${e}`);
        return;
    }
}