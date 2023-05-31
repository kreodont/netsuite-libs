import {jsonProperty, Serializable} from 'ts-serializable';
import "reflect-metadata";
import {Error} from './Error';

interface OperationInterface {
    details: string
    execute: (logs: string[]) => Error[]
    fallback?: (logs: string[]) => Error[]
    isEmpty?: boolean
}
export class Operation extends Serializable implements OperationInterface{
    @jsonProperty(String)
    details: string;

    execute: (logs: string[]) => Error[];

    fallback?: (logs: string[]) => Error[];
    isEmpty = false;
    constructor(args: OperationInterface) {
        super();
        this.details = args.details;
        this.execute = args.execute;
        this.fallback = args.fallback;
        this.isEmpty = args.isEmpty ? args.isEmpty : false;
    }

    static EmptyOperation(details: string): Operation {
        const operation = new Operation({details: details, execute: () => [], fallback: () => []});
        operation.isEmpty = true;
        return operation;
    }
}