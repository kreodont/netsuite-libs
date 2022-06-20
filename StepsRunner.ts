import { Logger, log, surroundTextWithDashes } from './Logger';
import { ScriptContext } from './Types';
import { error } from 'N/log';
import { notifyOwner } from './Helpers';

export type ScriptFunction = {
    function: (kit: IKit) => IKit;
    description?: string;
    logEntry: string;
};

export class KitTemplate implements IKit {
    _logs: string[] = [];
    userWarnings: string[] = [];
    userErrors: string[] = [];
    scriptErrors: string[] = [];
    throwException = '';
    exitImmediately = false;
    log(text: string): void {
        this._logs.push(text);
    }
}

interface IKit {
    _logs: string[];
    userErrors: string[];
    scriptErrors: string[];
    userWarnings: string[];
    throwException: string;
    exitImmediately: boolean;
    log(arg0: string): void;
}

export class StepsRunner {
    logger: Logger;
    stepFunctions: Array<ScriptFunction> = [];
    customHeader: string | null = null;
    constructor(
        context: ScriptContext,
        stepFunctions: Array<ScriptFunction>,
        header?: string,
    ) {
        this.logger = Logger.getLogger(context);
        this.stepFunctions = stepFunctions;
        this.customHeader = header ? header : null;
    }

    run(initialKit: IKit): IKit {
        const header = this.customHeader
            ? this.customHeader
            : this.logger.header;
        log(
            surroundTextWithDashes(
                `Starting script "${this.logger.scriptName}"`,
            ),
            header,
            true,
        );

        let stepNumber = 1;
        let kit = initialKit;
        for (const step of this.stepFunctions) {
            log(
                `Step ${stepNumber} of ${this.stepFunctions.length}: "${step.logEntry}"`,
                header,
                true,
            );
            try {
                kit = step.function(kit);
            } catch (e) {
                for (const logStr of kit._logs) {
                    log(logStr, this.logger.header);
                }
                log(e as string, this.logger.header, false, error);
                log(
                    surroundTextWithDashes(
                        `Script "${this.logger.scriptName}" stopped due to errors`,
                    ),
                    this.logger.header,
                    true,
                    error,
                );
                notifyOwner(String(e), kit._logs);
                return kit;
            }

            // Printing logs
            for (const logStr of kit._logs) {
                log(logStr, this.logger.header);
            }

            // Printing script Errors
            if (kit.scriptErrors.length > 0) {
                for (const errorStr of kit.scriptErrors) {
                    log(errorStr, this.logger.header, false, error);
                }
                log(
                    surroundTextWithDashes(
                        `Script "${this.logger.scriptName}" STOPPED due to errors`,
                    ),
                    this.logger.header,
                    true,
                    error,
                );
                notifyOwner(
                    kit.scriptErrors.join(', '),
                    kit._logs
                );
                return kit;
            }

            if (kit.userErrors.length > 0) {
                for (const userError of kit.userErrors) {
                    log(
                        userError,
                        'ERROR: ' + this.logger.header,
                        false,
                        error,
                    );
                }
                this.logger.printUserErrors(kit.userErrors);
            }

            if (kit.userWarnings.length > 0) {
                for (const userWarning of kit.userWarnings) {
                    log(userWarning, 'WARNING: ' + this.logger.header);
                }
                this.logger.printUserWarnings(kit.userWarnings);
            }

            log(
                `Step ${stepNumber} of ${this.stepFunctions.length} done`,
                header,
                true,
            );
            kit._logs = [];
            kit.userErrors = [];
            kit.scriptErrors = [];
            kit.userWarnings = [];
            if (kit.exitImmediately) {
                log(
                    surroundTextWithDashes(
                        'Exiting due to exitImmediately set to true',
                    ),
                    this.logger.header,
                    true,
                );
                return kit;
            }
            if (kit.throwException.length > 0) {
                throw kit.throwException;
            }
            stepNumber++;
        }

        log(
            surroundTextWithDashes(
                `Running script "${this.logger.scriptName}" completed`,
            ),
            header,
            true,
        );
        return initialKit;
    }
}
