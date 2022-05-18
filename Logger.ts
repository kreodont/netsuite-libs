import { ScriptContext } from './Types';
import { EntryPoints } from 'N/types';
import { error as ns_error } from 'N';
import { debug } from 'N/log';

type Severity = 'DEBUG' | 'AUDIT' | 'ERROR' | 'EMERGENCY';

export function surroundTextWithDashes(
    /**
     * Makes ----text---- from text
     * Default length is 160 symbols to fit Netsuite DETAILS field
     */
    inputString: string,
    desiredLength = 160,
): string {
    if (inputString.length >= desiredLength) {
        return inputString;
    }
    const dashesLength = Math.floor((desiredLength - inputString.length) / 2);
    return (
        Array(dashesLength).join('-') +
        inputString +
        Array(dashesLength).join('-')
    );
}

interface ILogger {
    context: ScriptContext;
    header: string;
    showRecordId: boolean;
    triggerType: string;
    showTriggerType: boolean;
    showRecordType: boolean;
    showContextType: boolean;
    showLineNumber: boolean;
    severity: Severity;
    scriptName: string;
}

export function log(
    details: string,
    title?: string,
    omitDashes = false,
    f: CallableFunction = debug,
): void {
    if (!title) {
        const stack = getStack();
        title = `${stack.functionName} at line ${stack.lineNum}`;
    }
    const dashes = omitDashes ? '' : '________';
    f({ title: title, details: dashes + details });
}

function stackParseClient(stack: string[]): SimpleStack {
    const stackToReturn = new SimpleStack('?', 0, '?', false);
    if (stack.length < 6) {
        return stackToReturn;
    }

    let found = false;
    for (const str of stack) {
        if (
            (str.indexOf('log(') >= 0 && str.indexOf('Logger.js:') >= 0) ||
            str.indexOf('StepsRunner') >= 0
        ) {
            found = true;
            continue;
        }
        if (found) {
            const words = /at (.+) \(.+%2F(.+?)&/g.exec(str);
            if (!words || words.length < 3) {
                return stackToReturn;
            }

            stackToReturn.functionName = words[1];
            stackToReturn.scriptName = words[2];
            stackToReturn.found = true;
            return stackToReturn;
        }
    }
    return stackToReturn;
}

function stackParseUserEvent(stack: string[]): SimpleStack {
    const stackToReturn = new SimpleStack('?', 0, '?', false);
    if (stack.length < 2) {
        return stackToReturn;
    }
    const words = /[^/]*$/.exec(stack[stack.length - 2]);
    // finding script name
    if (!words || words.length < 1) {
        stackToReturn.scriptName = '?';
    } else {
        stackToReturn.scriptName = words[0].split(':')[0];
    }

    let found = false;
    for (const str of stack) {
        if (
            (str.indexOf('log(') >= 0 && str.indexOf('Logger.js:') >= 0) ||
            str.indexOf('StepsRunner') >= 0
        ) {
            found = true;
            continue;
        }
        if (found) {
            const words = /(.+)\(\/.+\/(.+).js:(.+)\)/.exec(str);
            if (!words || words.length < 4) {
                return stackToReturn;
            }
            stackToReturn.functionName = words[1].replace(/at Object./, '');
            stackToReturn.lineNum = Number(words[3].split(':')[0]);
            stackToReturn.found = true;
            return stackToReturn;
        }
    }
    return stackToReturn;
}

class SimpleStack {
    functionName: string;
    lineNum: number;
    scriptName: string;
    found: boolean;
    constructor(
        functionName: string,
        lineNum: number,
        scriptName: string,
        found: boolean,
    ) {
        this.functionName = functionName;
        this.lineNum = lineNum;
        this.scriptName = scriptName;
        this.found = found;
    }
}

function getStack(): SimpleStack {
    const temp_error = ns_error.create({
        notifyOff: true,
        name: 'Temp Error',
        message: 'Temp Error',
    });
    let stackToReturn = new SimpleStack('?', 0, '?', false);
    const stack = temp_error['stack'];
    for (const func of [stackParseUserEvent, stackParseClient]) {
        stackToReturn = func(stack);
        if (stackToReturn.found) {
            return stackToReturn;
        }
    }
    return stackToReturn;
}

export class Logger implements ILogger {
    context: ScriptContext;
    header: string;
    showRecordId = true;
    showTriggerType = false;
    showRecordType = false;
    triggerType = '';
    showContextType = false;
    showLineNumber = false;
    severity: Severity = 'DEBUG';
    scriptName: string;

    constructor({
        header,
        showRecordId,
        severity,
        showRecordType,
        showTriggerType,
        triggerType,
        context,
        showContextType,
        showLineNumber,
        scriptName,
    }: ILogger) {
        this.context = context;
        this.header = header;
        this.showRecordId = showRecordId;
        this.severity = severity;
        this.showRecordType = showRecordType;
        this.showTriggerType = showTriggerType;
        this.triggerType = triggerType;
        this.showContextType = showContextType;
        this.showLineNumber = showLineNumber;
        this.scriptName = scriptName;
    }

    describe(): string {
        return `Header: "${this.header}", Script name: "${
            this.scriptName
        }", Show record id? ${String(
            this.showRecordId,
        )}, Show record type? ${String(this.showRecordType)}, Trigger type: "${
            this.triggerType
        }", Show trigger type? ${String(
            this.showTriggerType,
        )}, Show context type? ${String(
            this.showContextType,
        )}, Show line number? ${String(this.showLineNumber)}`;
    }

    printUserWarnings(_: string[]): void {
        if (_) {
            return;
        }
    }

    printUserErrors(_: string[]): void {
        if (_) {
            return;
        }
    }

    static getLogger(
        context: ScriptContext,
        args: {
            severity?: Severity;
            showRecordId?: boolean;
            header?: string;
            showTriggerType?: boolean;
            showRecordType?: boolean;
            showLineNumber?: boolean;
            showContextType?: boolean;
        } = {},
    ): Logger {
        const stack = getStack();
        if (
            ['beforeLoad', 'beforeSubmit', 'afterSubmit'].indexOf(
                stack.functionName,
            ) >= 0
        ) {
            return new UserEventLogger({
                context: context,
                severity: args.severity || 'DEBUG',
                showRecordId: args.showRecordId || true,
                header: args.header || '',
                showTriggerType: args.showTriggerType || false,
                showRecordType: args.showRecordType || false,
                triggerType: stack.functionName,
                showLineNumber: args.showLineNumber || false,
                showContextType: args.showContextType || false,
                scriptName: stack.scriptName,
            });
        } else if (['onRequest'].indexOf(stack.functionName) >= 0) {
            return new SuiteletLogger({
                context: context,
                severity: args.severity || 'DEBUG',
                showRecordId: args.showRecordId || false,
                header: args.header || '',
                showTriggerType: args.showTriggerType || false,
                showRecordType: args.showRecordType || false,
                triggerType: stack.functionName,
                showLineNumber: args.showLineNumber || false,
                showContextType: args.showContextType || false,
                scriptName: stack.scriptName,
            });
        } else if (
            ['pageInit', 'fieldChanged'].indexOf(stack.functionName) >= 0
        ) {
            return new ClientLogger({
                context: context,
                severity: args.severity || 'DEBUG',
                showRecordId: args.showRecordId || false,
                header: args.header || '',
                showTriggerType: args.showTriggerType || false,
                showRecordType: args.showRecordType || false,
                triggerType: stack.functionName,
                showLineNumber: args.showLineNumber || false,
                showContextType: args.showContextType || false,
                scriptName: stack.scriptName,
            });
        } else if (context === null) {
            return new ButtonHandlerLogger({
                context: context,
                severity: args.severity || 'DEBUG',
                showRecordId: args.showRecordId || false,
                header: args.header || '',
                showTriggerType: args.showTriggerType || false,
                showRecordType: args.showRecordType || false,
                triggerType: stack.functionName,
                showLineNumber: args.showLineNumber || false,
                showContextType: args.showContextType || false,
                scriptName: stack.scriptName,
            });
        } else {
            return new DefaultLogger({
                context: context,
                severity: args.severity || 'DEBUG',
                showRecordId: args.showRecordId || false,
                header: args.header || '',
                showTriggerType: args.showTriggerType || false,
                showRecordType: args.showRecordType || false,
                triggerType: stack.functionName,
                showLineNumber: args.showLineNumber || false,
                showContextType: args.showContextType || false,
                scriptName: stack.scriptName,
            });
        }
    }
}

class SuiteletLogger extends Logger {
    constructor({
        header,
        showRecordId,
        severity,
        showRecordType,
        showTriggerType,
        context,
        triggerType,
        showContextType,
        showLineNumber,
        scriptName,
    }: ILogger) {
        super({
            header: header,
            showRecordId: showRecordId,
            severity: severity,
            showRecordType: showRecordType,
            showTriggerType: showTriggerType,
            context: context,
            triggerType: triggerType,
            showContextType: showContextType,
            showLineNumber: showLineNumber,
            scriptName: scriptName,
        });
        if (this.header.length === 0) {
            this.header = (
                this.context as EntryPoints.Suitelet.onRequestContext
            ).request.method;
        }
    }
}

class UserEventLogger extends Logger {
    userEventContext:
        | EntryPoints.UserEvent.beforeLoadContext
        | EntryPoints.UserEvent.beforeSubmitContext
        | EntryPoints.UserEvent.afterSubmitContext;
    constructor({
        header,
        showRecordId,
        severity,
        showRecordType,
        showTriggerType,
        context,
        triggerType,
        showLineNumber,
        showContextType,
        scriptName,
    }: ILogger) {
        super({
            header: header,
            showRecordId: showRecordId,
            severity: severity,
            showRecordType: showRecordType,
            showTriggerType: showTriggerType,
            context: context,
            triggerType: triggerType,
            showContextType: showContextType,
            showLineNumber: showLineNumber,
            scriptName: scriptName,
        });
        this.userEventContext = this
            .context as EntryPoints.UserEvent.beforeLoadContext;
        if (this.showRecordType) {
            this.header += `${this.userEventContext.newRecord.type}`;
        }
        if (this.showTriggerType) {
            this.header += ` ${this.triggerType}`;
        }
        if (this.showContextType) {
            this.header += ` ${this.userEventContext.type}`;
        }
        if (this.showRecordId) {
            if (
                this.userEventContext.type ===
                this.userEventContext.UserEventType.CREATE
            ) {
                if (
                    ['beforeSubmit', 'beforeLoad'].indexOf(this.triggerType) >=
                    0
                ) {
                    this.header += ' ToBeCr';
                } else {
                    this.header += ` ${this.userEventContext.newRecord.id}`;
                }
            } else {
                this.header += ` ${this.userEventContext.newRecord.id}`;
            }
        }
    }

    printUserErrors(errors: string[]) {
        super.printUserErrors(errors);
        throw errors.join(', ');
    }

    printUserWarnings(warnings: string[]) {
        super.printUserWarnings(warnings);
    }
}

class ButtonHandlerLogger extends Logger {
    constructor({
        header,
        showRecordId,
        severity,
        showRecordType,
        showTriggerType,
        context,
        triggerType,
        showLineNumber,
        showContextType,
        scriptName,
    }: ILogger) {
        super({
            header: header,
            showRecordId: showRecordId,
            severity: severity,
            showRecordType: showRecordType,
            showTriggerType: showTriggerType,
            context: context,
            triggerType: triggerType,
            showLineNumber: showLineNumber,
            showContextType: showContextType,
            scriptName: scriptName,
        });
    }
    printUserErrors(errors: string[]) {
        super.printUserErrors(errors);
        alert(errors.join(', '));
    }

    printUserWarnings(warnings: string[]) {
        super.printUserWarnings(warnings);
        alert(warnings.join(', '));
    }
}

class ClientLogger extends Logger {
    clientContext:
        | EntryPoints.Client.pageInitContext
        | EntryPoints.Client.fieldChangedContext
        | EntryPoints.Client.postSourcingContext;
    constructor({
        header,
        showRecordId,
        severity,
        showRecordType,
        showTriggerType,
        context,
        triggerType,
        showLineNumber,
        showContextType,
        scriptName,
    }: ILogger) {
        super({
            header: header,
            showRecordId: showRecordId || true,
            severity: severity,
            showRecordType: showRecordType || false,
            showTriggerType: showTriggerType || true,
            context: context,
            triggerType: triggerType,
            showLineNumber: showLineNumber,
            showContextType: showContextType || false,
            scriptName: scriptName,
        });
        this.clientContext = this.context as EntryPoints.Client.pageInitContext;
        if (this.showRecordType) {
            this.header += `${this.clientContext.currentRecord.type}`;
        }
        if (this.showTriggerType) {
            this.header += ` ${this.triggerType}`;
        }
        if (this.showContextType) {
            this.header += ` ${this.clientContext.mode}`;
        }
        if (this.showRecordId) {
            if (this.clientContext.mode === 'create') {
                this.header += ' ToBeCr';
            } else {
                this.header += ` ${String(
                    this.clientContext.currentRecord.id,
                )}`;
            }
        }
    }
    printUserErrors(errors: string[]) {
        super.printUserErrors(errors);
        alert(errors.join(', '));
    }

    printUserWarnings(warnings: string[]) {
        super.printUserWarnings(warnings);
        alert(warnings.join(', '));
    }
}

class DefaultLogger extends Logger {
    constructor({
        header,
        showRecordId,
        severity,
        showRecordType,
        showTriggerType,
        context,
        triggerType,
        showLineNumber,
        showContextType,
        scriptName,
    }: ILogger) {
        super({
            header: header,
            showRecordId: showRecordId,
            severity: severity,
            showRecordType: showRecordType,
            showTriggerType: showTriggerType,
            context: context,
            triggerType: triggerType,
            showLineNumber: showLineNumber,
            showContextType: showContextType,
            scriptName: scriptName,
        });
    }
    printUserErrors(errors: string[]) {
        super.printUserErrors(errors);
    }

    printUserWarnings(warnings: string[]) {
        super.printUserWarnings(warnings);
    }
}
