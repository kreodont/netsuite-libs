import {jsonProperty, Serializable} from 'ts-serializable';
import "reflect-metadata";
import {Operation} from './Operation';
import {log, LogArray} from './Logger';
import {writeFile} from './Files';
import {error} from 'N/log';
import file from 'N/file';
import {runtime} from 'N';
import {getBaseURL} from './Helpers';
import {EntryPoints} from "N/types";

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

    return year + month + day + hours + minutes + seconds + milliseconds;
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

    constructor(args: ScriptInterface) {
        super();
        this.id = runtime.getCurrentScript().id;
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
                    log(e.text, `ERROR`, 0, error);
                    this.logs.push(JSON.stringify(e));
                    if (e.stop) {
                        needExit = true;
                    }
                    if (e.throwException) {
                        needException = true;
                        exceptionText += `\n${e.text}`;
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
                this.logs.push(`${recName}: ${record}`);
            }
            this.logs.push(`Impacted records loaded`);
            this.logs.push(`Calculating operations`);
            this.operations = this.logicFunction(this.impactedRecords, this.logs);
            this.logs.push(`${this.operations.length} operations calculated`);
            this.logs.push(`Applying operations`);
            const operationsApplied = this.applyOperations();
            const fileIds = writeFile(fileName, this.logs.join(`\n`), `Logs`, this.logs);
            if (fileIds.length === 0) {
                log(`Failed to save the log file: ${fileName}`, fileName, 0, error);
            }
            log(`Completed. ${operationsApplied} operations applied. Logs: ${getBaseURL()}${file.load({id: fileIds[0]}).url}`, fileName);
        }
        catch (e) {
            log(JSON.stringify(e));
            this.logs.push(JSON.stringify(e));
            writeFile(fileName, this.logs.join(`\n`), `Logs`, this.logs);
            throw e;
        }
    }
}