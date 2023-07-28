import {jsonProperty, Serializable} from 'ts-serializable';
import "reflect-metadata";
import {Error} from './Error';
import {FieldValue} from "N/record";


type OperationType = `Create` | `Delete` | `Change Value` | `Empty` | `Error`
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
    valueToSet?: FieldValue

    @jsonProperty(Date, Number, String, Boolean, null, [String], [Number])
    previousValue?: FieldValue

    @jsonProperty(String)
    field?: string

    @jsonProperty(String)
    recordType?: string

    @jsonProperty(String, null)
    recordId?: string | null // null is for new records, that are not submitted yet

    @jsonProperty(String)
    subType?: string // For line updates

    @jsonProperty(String)
    lineUniqueKey?: string // More reliable than line number. uniquekey in SQL, lineuniquekey in getSublistValue

    @jsonProperty(Object)
    parameters?: {[key: string]: string}

    @jsonProperty(String)
    operationType: OperationType

    constructor(args: OperationInterface) {
        super();
        this.details = args.details;
        this.execute = args.execute;
        this.fallback = args.fallback;
        this.valueToSet = args.valueToSet
        this.previousValue = args.previousValue
        this.recordType = args.recordType
        this.recordId = args.recordId
        this.subType = args.subType
        this.field = args.field
        this.lineUniqueKey = args.lineUniqueKey
        this.parameters = args.parameters
        this.operationType = args.operationType
    }

    static EmptyOperation(details: string): Operation {
        const operation = new Operation({details: details, execute: () => [], fallback: () => [], operationType: `Empty`});
        operation.isEmpty = true;
        return operation;
    }

    static OperationRaiseErrorWithoutException(details: string): Operation {
        return new Operation({details: details, operationType: `Error`, execute: () => [{details: details, stop: true, notify: true}]});
    }

    static OperationRaiseException(details: string): Operation {
        return new Operation({details: details, operationType: `Error`, execute: () => [{details: details, stop: true, notify: true, throwException: true}]});
    }

    static example(): Operation {
        return new Operation({
            details: `Example Operation`,
            operationType: "Empty",
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
        })
    }

    static fromStr(s: string): Operation {
        return Operation.example().fromJSON(JSON.parse(s) as Record<string, string>)
    }

}