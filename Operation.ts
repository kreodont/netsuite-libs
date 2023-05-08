import {jsonProperty, Serializable} from 'ts-serializable';
import "reflect-metadata";
import {Error} from './Error';

interface OperationInterface {
    details: string
    execute: (logs: string[]) => Error[]
    fallback?: (logs: string[]) => Error[]
}
export class Operation extends Serializable implements OperationInterface{
    @jsonProperty(String)
    details: string

    execute: (logs: string[]) => Error[]

    fallback?: (logs: string[]) => Error[]
    constructor(args: OperationInterface) {
        super();
        this.details = args.details
        this.execute = args.execute
        this.fallback = args.fallback
    }

    static EmptyOperation(details: string): Operation {
        return new Operation({details: details, execute: () => [], fallback: () => []})
    }
}