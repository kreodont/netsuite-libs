import {jsonProperty, Serializable} from 'ts-serializable';
import "reflect-metadata";
import {Error} from './Error';

interface OperationInterface {
    details: string
    execute: () => Error[]
    fallback?: () => Error[]
}
export class Operation extends Serializable implements OperationInterface{
    @jsonProperty(String)
    details: string

    execute: () => Error[]

    fallback?: () => Error[]
    constructor(args: OperationInterface) {
        super();
        this.details = args.details
        this.execute = args.execute
        this.fallback = args.fallback
    }
}