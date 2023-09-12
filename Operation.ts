import {jsonProperty, Serializable} from 'ts-serializable';
import "reflect-metadata";
import {Error, errorWithException, errorWithoutExceptionButWithScriptOwnerNotification} from './Error';
import {FieldValue} from "N/record";
import {record} from "N";


type OperationType = `Create` | `Delete` | `Save` | `Change Value` | `Empty` | `Error`
interface OperationInterface {
    details: string
    execute: (logs: string[]) => Error[] // function called to perform the operation
    fallback?: (logs: string[]) => Error[] // function called if execute fails (saying, need to delete half created record)
    operationType: OperationType

    valueToSet?: FieldValue
    previousValue?: FieldValue
    field?: string
    recordType?: string
    recordId?: string | null // null is for new records, that are not submitted yet
    subType?: string // For line updates
    lineUniqueKey?: string // More reliable than line number. uniquekey in SQL, lineuniquekey in getSublistValue
    parameters?: {[key: string]: string}

}
export class Operation extends Serializable implements OperationInterface{
    @jsonProperty(String)
    details: string;

    execute: (logs: string[]) => Error[];

    fallback?: (logs: string[]) => Error[];
    isEmpty = false;

    @jsonProperty(Date, Number, String, Boolean, null, [String], [Number])
    valueToSet?: FieldValue;

    @jsonProperty(Date, Number, String, Boolean, null, [String], [Number])
    previousValue?: FieldValue;

    @jsonProperty(String)
    field?: string;

    @jsonProperty(String)
    recordType?: string;

    @jsonProperty(String, null)
    recordId?: string | null; // null is for new records, that are not submitted yet

    @jsonProperty(String)
    subType?: string; // For line updates

    @jsonProperty(String)
    lineUniqueKey?: string; // More reliable than line number. uniquekey in SQL, lineuniquekey in getSublistValue

    @jsonProperty(Object)
    parameters?: {[key: string]: string};

    @jsonProperty(String)
    operationType: OperationType;

    constructor(args: OperationInterface) {
        super();
        this.details = args.details;
        this.execute = args.execute;
        this.fallback = args.fallback;
        this.valueToSet = args.valueToSet;
        this.previousValue = args.previousValue;
        this.recordType = args.recordType;
        this.recordId = args.recordId;
        this.subType = args.subType;
        this.field = args.field;
        this.lineUniqueKey = args.lineUniqueKey;
        this.parameters = args.parameters;
        this.operationType = args.operationType;
    }

    static EmptyOperation(details: string): Operation {
        const operation = new Operation({details: details, execute: () => [], fallback: () => [], operationType: `Empty`});
        operation.isEmpty = true;
        return operation;
    }

    static OperationRaiseErrorWithoutExceptionButWithScriptOwnerNotification(details: string): Operation {
        return new Operation({details: details, operationType: `Error`, execute: () => [errorWithoutExceptionButWithScriptOwnerNotification(details)]});
    }

    static OperationRaiseException(details: string): Operation {
        return new Operation({details: details, operationType: `Error`, execute: () => [errorWithException(details)]});
    }

    static OperationUpdateLine(
        details: string,
        loadedRecord: record.Record | null,
        recordType: string,
        recordId: string,
        sublistName: string,
        uniqueLineId: string,
        field: string,
        value: FieldValue,
        logs: string[],
    ): Operation {

        function execute(): Error[] {
            logs.push(`Updating record "${recordType}" with id "${recordId}" sublist "${sublistName}" line with lineuniquekey "${uniqueLineId}". Setting value "${value}"`);
            try {
                const r = loadedRecord ? loadedRecord : record.load({type: recordType, id: recordId});
                let lineFound = false;
                for (let i = 0; i < r.getLineCount({sublistId: sublistName}); i ++) {
                    const lineId = String(r.getSublistValue({sublistId: sublistName, line: i, fieldId: `lineuniquekey`}));
                    logs.push(`Line ${i} unique id is: ${lineId}`);
                    if (lineId === uniqueLineId) {
                        lineFound = true;
                        logs.push(`Line found at position ${i + 1} (starting from 1). Setting the value`);
                        r.setSublistValue({sublistId: sublistName, line: i, fieldId: field, value: value});
                        logs.push(`Value "${value}" set`);
                    }
                }
                if (!lineFound) {
                    return [errorWithoutExceptionButWithScriptOwnerNotification(`Could not find line with lineuniquekey "${uniqueLineId}" in record "${recordType}" with id "${recordId}" sublist "${sublistName}". Most probably, it was already deleted by someone else`)];
                }
                return [];
            }
            catch (e) {
                return [errorWithException(`Error during line update: ${e}`)];
            }
        }

        return new Operation({
            execute: execute,
            operationType: `Change Value`,
            recordType: recordType,
            recordId: recordId,
            subType: sublistName,
            valueToSet: value,
            details: details,
            field: field,
            lineUniqueKey: uniqueLineId,
        });
    }

    static OperationSaveRecord(
        details: string,
        loadedRecord: record.Record,
        logs: string[]
    ): Operation {
        function execute(): Error[] {
            logs.push(`Saving record "${loadedRecord.type}" with id "${loadedRecord.id}"`);
            try {
                loadedRecord.save();
                return [];
            }
            catch (e) {
                return [errorWithException(`Error during record save: ${e}`)];
            }
        }
        return new Operation({
            execute: execute,
            operationType: `Save`,
            recordType: String(loadedRecord.type),
            recordId: String(loadedRecord.id),
            valueToSet: ``,
            details: details,
            field: ``,
        });
    }
    static OperationUpdateBody(
        details: string,
        loadedRecord: record.Record | null,
        recordType: string,
        recordId: string,
        field: string,
        value: FieldValue,
        logs: string[],
    ): Operation {
        function execute(): Error[] {
            logs.push(`Updating record "${recordType}" with id "${recordId}" field "${field}". Setting value "${value}"`);
            try {
                const r = loadedRecord ? loadedRecord : record.load({type: recordType, id: recordId});
                r.setValue({fieldId: field, value: value});
                return [];
            }
            catch (e) {
                return [errorWithException(`Error during body update: ${e}`)];
            }
        }

        return new Operation({
            execute: execute,
            operationType: `Change Value`,
            recordType: recordType,
            recordId: recordId,
            valueToSet: value,
            details: details,
            field: field,
        });
    }
    static example(): Operation {
        return new Operation({
            details: `Example Operation`,
            operationType: `Empty`,
            recordType: undefined,
            recordId: undefined,
            subType: undefined,
            field: undefined,
            parameters: {},
            execute: () => [],
            fallback: () => [],
            lineUniqueKey: undefined,
            previousValue: undefined,
            valueToSet: undefined
        });
    }

    static fromStr(s: string): Operation {
        return Operation.example().fromJSON(JSON.parse(s) as Record<string, string>);
    }

}