import {jsonProperty, Serializable} from 'ts-serializable';
import "reflect-metadata";
import {Operation} from './Operation';
import {log, LogArray} from './Logger';
import {writeFile} from './Files';
import {error} from 'N/log';
import {File} from 'N/file';
import file from 'N/file';
import {getCurrentScript} from 'N/runtime';
import {generateRandomString, getBaseURL, getSqlResultAsMap} from './Helpers';
import {EntryPoints} from "N/types";
import {email, record, runtime} from 'N';
import { error as ns_error } from 'N';



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
    logicFunction: (impactedRecords: {[key: string]: ImpactedRecord}, logs: string[]) => Operation[]
    loadRecordsFunction: (context: ScriptContext, logs: string[]) => {[key: string]: ImpactedRecord}
    checksBeforeRunFunction: (context: ScriptContext, logs: string[]) => string
    context: ScriptContext
}

function formatDateWithoutSeparator(date: Date) {
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, `0`);
    const day = String(date.getDate()).padStart(2, `0`);
    const hours = String(date.getHours()).padStart(2, `0`);
    const minutes = String(date.getMinutes()).padStart(2, `0`);
    const seconds = String(date.getSeconds()).padStart(2, `0`);
    const milliseconds = String(date.getMilliseconds()).padStart(3, `0`);

    return year + month + day + `_` + hours + minutes + seconds + milliseconds;
}

function getTriggerName(): string {

    const tempError = ns_error.create({
        notifyOff: true,
        name: `Temp Error`,
        message: `Temp Error`,
    });

    const regex = /at Object\.(\w+)/g;
    const match = regex.exec(JSON.stringify(tempError));
    if (!match) {
        return `noTriggerName`;
    }
    if (match[1] === `createError`) { // client script
        return `client`;
    }
    return match[1];
}

interface RunInterface {
    context: ScriptContext
    timeOfRunning?: Date
}


export type ImpactedRecord = Serializable | Serializable[] | null | string| record.Record | record.ClientCurrentRecord | ScriptContext

function checksBeforeRunWrapper(logs: string[], context: ScriptContext, initialFunction: (context: ScriptContext, logs: string[]) => string) {
    logs.push(`Script run by: ${runtime.getCurrentUser().email} (role: ${runtime.getCurrentUser().role})`);
    logs.push(`Execution context: ${runtime.executionContext}`);
    logs.push(`Script context: ${context ? (context as EntryPoints.UserEvent.beforeSubmitContext).type : `null`}`);
    let recordId = `null`;
    if (context) {
        const userEventContext = context as EntryPoints.UserEvent.beforeSubmitContext;
        if (userEventContext.newRecord) {
            recordId = String(userEventContext.newRecord.id);
        }
        const clientScriptContext = context as EntryPoints.Client.pageInitContext;
        if (clientScriptContext.currentRecord) {
            recordId = String(clientScriptContext.currentRecord.id);
        }
    }
    logs.push(`Record ID: ${recordId}`);
    logs.push(`\n`);
    return initialFunction;

}

export class Script extends Serializable implements ScriptInterface{
    context: ScriptContext;
    @jsonProperty(String)
    id: string;

    @jsonProperty(Object)
    impactedRecords: {[key: string]: ImpactedRecord};

    @jsonProperty([String])
    logs: LogArray;

    @jsonProperty([Object])
    operations: Operation[];

    logicFunction: (impactedRecords: {[key: string]: ImpactedRecord}, logs: string[]) => Operation[];

    loadRecordsFunction: (context: ScriptContext, logs: string[]) => {[key: string]: ImpactedRecord};

    checksBeforeRunFunction: (context: ScriptContext, logs: string[]) => string;

    triggerName: string;
    notifyOwner = false;

    constructor(args: ScriptInterface) {
        super();
        this.id = getCurrentScript().id;
        this.logs = new LogArray();
        this.operations = [];
        this.impactedRecords = {};
        this.logicFunction = args.logicFunction;
        this.loadRecordsFunction = args.loadRecordsFunction;
        this.context = args.context;
        this.checksBeforeRunFunction = checksBeforeRunWrapper(this.logs, args.context, args.checksBeforeRunFunction);
        this.triggerName = getTriggerName();
    }

    applyOperations(): Operation[] {
        const operationsApplied: Operation[] = [];
        if (this.operations.length === 0) {
            this.logs.push(`0 operations, nothing to do. Please consider adding at least 1 empty operation to make sure the script is working properly`);
            return operationsApplied;
        }
        for (const op of this.operations) {
            this.logs.push(`Operation #${this.operations.indexOf(op) + 1}`);
            this.logs.push(JSON.stringify(op, null, 4));
            const errors = op.execute(this.logs);
            if (errors.length > 0) {
                let needExit = false;
                let needException = false;
                let exceptionText = ``;
                this.logs.push(`____There are ${errors.length} errors occurred:`);
                for (const e of errors) {
                    if (e.severity === `DEBUG`) {
                        this.logs.push(`____` + e.details);
                    }
                    else {
                        log(e.details, `ERROR`, 0, error);
                        this.logs.push(`____ERROR: ` + JSON.stringify(e));
                    }
                    if (e.stop) {
                        needExit = true;
                    }
                    if (e.throwException) {
                        needException = true;
                        exceptionText += `\n${e.details}`;
                    }
                    if (e.notify) {
                        this.notifyOwner = true;
                    }
                }

                if (op.fallback) {
                    this.logs.push(`Calling a fallback operation`);
                    op.fallback(this.logs);
                    this.logs.push(`Fallback completed`);
                }

                if (needException) {
                    this.logs.push(`Operation causes the built-in exception`);
                    throw exceptionText;
                }

                if (needExit) {
                    this.logs.push(`Operation causes the script stop`);
                    return operationsApplied;
                }
            }
            else {
                operationsApplied.push(op);
                this.logs.push(`____No errors`);
            }
            this.logs.push(`Operation #${this.operations.indexOf(op) + 1} done\n`);
        }
        return operationsApplied;
    }

    run(args: RunInterface, testMode = false): Operation[] {
        let operationsApplied: Operation[] = [];
        const date = args.timeOfRunning ? args.timeOfRunning : new Date();
        const fileName = `${formatDateWithoutSeparator(date)}_${this.id}_${this.triggerName}_${generateRandomString(4)}`;
        try {
            if (this.triggerName !== `client`) {
                log(`Starting "${this.id}" full logs in SuiteScripts/Logs/${fileName}.txt`, fileName);
            }

            if (this.checksBeforeRunFunction) {
                this.logs.push(`Running checks before main logic`);
                const checkError = this.checksBeforeRunFunction(args.context, this.logs);
                if (checkError.length > 0) {
                    this.logs.push(`____` + checkError);
                    this.operations = [
                        new Operation({
                            details: `Stopping script due to checks before run`,
                            execute: () => [{details: checkError, severity: `DEBUG`}],
                            operationType: `Empty`
                        })
                    ];
                }
                this.logs.push(`Running checks before main logic done\n\n`);
            }
            if (this.operations.length === 0) { // nothing was added during checksBeforeRunFunction run
                this.logs.push(`Loading impacted records`);
                this.impactedRecords = this.loadRecordsFunction(args.context, this.logs);

                for (const recName in this.impactedRecords) {
                    if (recName === `error`) {
                        if (!this.impactedRecords[`error`]) {
                            continue;
                        }
                        else {
                            this.operations.push(
                                new Operation({
                                    details: `Stopping script due to checks before run`,
                                    execute: () => [{details: String(this.impactedRecords[`error`]), severity: `ERROR`, notify: true}],
                                    operationType: `Empty`
                                })
                            );
                        }
                    }
                    let record = this.impactedRecords[recName];
                    if (typeof record !== `string`) {
                        record = JSON.stringify(record, null, 4);
                    }
                    this.logs.push(`${recName}:\n${record}`);
                }
                this.logs.push(`All impacted records are loaded\n\n`);

                if (this.operations.length === 0) {
                    this.logs.push(`Applying business logic function`);
                    this.operations = this.logicFunction(this.impactedRecords, this.logs);
                    this.logs.push(`Logic applied. Need to perform ${this.operations.length} operations\n\n`);
                }
            }

            if (!testMode) {
                operationsApplied = this.applyOperations();
            }
            else {
                operationsApplied = this.operations;
            }
            if (this.triggerName !== `client`) { // Writing files is not allowed for client scripts
                this.logs.push(`Writing log file`);
                const fileIds = writeFile(fileName, this.logs.join(`\n`), `SuiteScripts : Logs`, this.logs);
                if (fileIds.length === 0) {
                    log(`Failed to save the log file: ${fileName}`, fileName, 0, error);
                }
                if (this.notifyOwner && !testMode) {
                    log(`Notifying script owner by e-mail`);
                    const notificationLogs: string[] = [];
                    notifyOwner(`Script ${this.id} logs`, this.id, file.load({id: fileIds[0]}), notificationLogs);
                    for (const nlg of notificationLogs) {
                        log(nlg);
                    }
                }
                log(`Completed. ${operationsApplied.length} operations applied. Logs: ${getBaseURL()}${file.load({id: fileIds[0]}).url}`, fileName);
            }
            else {
                for (const logLine of this.logs) {
                    log(logLine);
                }
            }

        }
        catch (e) {
            log(JSON.stringify(e));
            this.logs.push(JSON.stringify(e));
            if (this.triggerName !== `client`) {
                log(`Saving log file`);
                const savingFileLogs: string[] = [];
                const fileIds = writeFile(fileName, this.logs.join(`\n`), `SuiteScripts : Logs`, savingFileLogs);
                for (const fileLog of savingFileLogs) {
                    log(fileLog);
                }

                log(`Notifying script owner by e-mail`);
                const notificationLogs: string[] = [];
                notifyOwner(`Script ${this.id} logs`, this.id, file.load({id: fileIds[0]}), notificationLogs);
                for (const nlg of notificationLogs) {
                    log(nlg);
                }
            }
            else {
                for (const logLine of this.logs) {
                    log(logLine);
                }
            }
            log(`Throwing original exception`);
            throw e;
        }
        return operationsApplied;
    }
}

export function notifyOwner(errorText: string, scriptId: string, attachment: File, logs?: string[]): void {
    const sql = `select employee.id as owner_id, employee.email as owner_email, script.name as script_name from script join employee on script.owner = employee.id join file on file.id = script.scriptfile where script.scriptid = '${scriptId}'`;
    logs?.push(sql);
    const results = getSqlResultAsMap(sql);
    if (results.length < 1) {
        logs?.push(`Failed to run sql: ${sql}, results: ${JSON.stringify(results, null, 4)}`);
        return;
    }

    const ownerId = Number(results[0][`owner_id`]);
    const ownerEmail = String(results[0][`owner_email`]);
    if (!ownerId || ownerEmail.length === 0) {
        logs?.push(`Could not find ownerId or ownerEmail in ${JSON.stringify(results[0], null, 4)}`);
        return;
    }
    try {
        logs?.push(`Sending email to ${ownerEmail}`);
        email.send({
            author: ownerId,
            recipients: [`${ownerEmail}`],
            subject: `Script "${results[0][`script_name`]}" owner notification`,
            body: errorText,
            attachments: [attachment],
        });
        logs?.push(`Email to ${ownerEmail} sent`);
    } catch (e) {
        logs?.push(`Could not send a mail: ${e}`);
        return;
    }
}