import {jsonProperty, Serializable} from 'ts-serializable';
import "reflect-metadata";
import {Operation} from './Operation';
import {log} from './Logger'
import {writeFile} from './Files';

interface ScriptInterface {

    name: string
    id: number
    logicFunction: (impactedRecords: {[key: string]: Serializable}, logs: string[]) => Operation[]
    loadRecordsFunction: (logs: string[]) => {[key: string]: Serializable}

}
function formatDateWithoutSeparator(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

    return year + month + day + hours + minutes + seconds + milliseconds;
}

export class Script extends Serializable implements ScriptInterface{
    @jsonProperty(Number)
    id: number
    @jsonProperty(String)
    name: string

    @jsonProperty([Serializable])
    impactedRecords?: {[key: string]: Serializable}

    @jsonProperty([String])
    logs: string[]

    @jsonProperty([Serializable])
    operations: Operation[]

    logicFunction: (impactedRecords: {[key: string]: Serializable}, logs: string[]) => Operation[]

    loadRecordsFunction: (logs: string[]) => {[key: string]: Serializable}

    constructor(args: ScriptInterface) {
        super();
        this.id = args.id
        this.name = args.name
        this.logs = []
        this.operations = []
        this.impactedRecords = undefined
        this.logicFunction = args.logicFunction
        this.loadRecordsFunction = args.loadRecordsFunction
    }

    applyOperations(): number {
        if (this.operations.length === 0) {
            this.logs.push(`0 operations, nothing to do`)
            return 0
        }
        let operationsApplied = 0
        for (const op of this.operations) {
            this.logs.push(JSON.stringify(op))
            const errors = op.execute()
            if (errors.length > 0) {
                let needExit = false;
                let needException = false;
                let exceptionText = ``
                for (const e of errors) {
                    this.logs.push(JSON.stringify(e))
                    if (e.stop) {
                        needExit = true
                    }
                    if (e.throwException) {
                        needException = true
                        exceptionText += `\n${e.text}`
                    }
                }

                if (op.fallback) {op.fallback()}

                if (needExit) {
                    return operationsApplied;
                }

                if (needException) {
                    throw exceptionText
                }
            }
        }
        return operationsApplied
    }

    run(date: Date): void {
        const fileName = `${formatDateWithoutSeparator(date)}_${this.id}.txt`
        try {
            log(`Starting script ${this.name}. Full logs in SuiteScripts/Logs/${fileName}`);
            this.logs.push(`Loading impacted records`)
            this.impactedRecords = this.loadRecordsFunction(this.logs)
            for (const recName in this.impactedRecords) {
                this.logs.push(`${recName}: ${JSON.stringify(this.impactedRecords[recName])}`)
            }
            this.logs.push(`Impacted records loaded`)
            this.logs.push(`Calculating operations`)
            this.operations = this.logicFunction(this.impactedRecords, this.logs)
            this.logs.push(`${this.operations.length} operations calculated`)
            this.logs.push(`Applying operations`)
            const operationsApplied = this.applyOperations()
            writeFile(fileName, this.logs.join('\n'), 'Logs', this.logs)
            log(`Completed. ${operationsApplied} operations applied`)
        }
        catch (e) {
            this.logs.push(JSON.stringify(e))
            writeFile(fileName, this.logs.join('\n'), 'Logs', this.logs)
            throw e
        }
    }
}