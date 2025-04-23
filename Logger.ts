import { debug } from 'N/log';
import { runtime } from 'N';
import file from "N/file";
import { chunks, getBaseURL } from './Helpers';
import { getFolderId, createFolder, getFile, writeStringsToFile } from "./Files"

const messages: string[] = []
let logFile: file.File | null = null

interface DebugLogger {
    header: string,
    runBy?: string,
    executionContext?: string,
    scriptContext?: 'create' | 'delete' | 'edit',
    recordType?: string,
    recordId?: string,
    writeToFile?: boolean

}

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
        Array(dashesLength).join(`-`) +
        inputString +
        Array(dashesLength).join(`-`)
    );
}

function getHash(inputString: string) {
    let hash = 0;
    for (let i = 0; i < inputString.length; i++) {
        const char = inputString.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash |= 0; // Convert to a 32-bit integer
    }
    return hash.toString();
}

function repeatString(str: string, N: number) {
    let repeatedString = ``;
    for (let i = 0; i < N; i++) {
        repeatedString += str;
    }
    return repeatedString;
}

export class LogArray extends Array<string> {
    push(...items: string[]): number {
        const itemsWithDate = items.map(item => `${new Date().toISOString()} - ${item}`);
        return super.push(...itemsWithDate);
    }
}

export function log(
    details: string,
    title?: string,
    dashesQuantity = 0,
    f: CallableFunction = debug,
): void {
    if (!title) { // If title is empty, just use the hash from the current date
        title = getHash(new Date().toString());
    }
    const dashes = repeatString(`_`, dashesQuantity);
    for (const chunk of chunks(details.split(''), 3950)) {
        f({ title: title, details: dashes + chunk.join('') });
    }
}

function addCurrentDateToString(initialString: string): string {
    return `${new Date().toISOString()} - ${initialString}`;
}

function writeLogMessageToNS(message: string, header: string): void {
    for (const chunk of chunks(message.split(''), 3950)) { // to make sure that the message is not too long
        debug({ title: header, details: chunk.join('') });
    }
}

function pushMessagesToNS(header: string): void {
    for (const message of messages) {
        writeLogMessageToNS(message, header)
    }
}

export function createDebugLogger(args: DebugLogger): (message: string) => void {
    let scriptLogFolderId = null
    let scriptLogFile = null
    const startTimestamp = getLoggerStartTimestamp()
    const logFileName = `${startTimestamp}_${runtime.getCurrentUser().name}.txt`

    if (args.runBy) {
        debug({ title: args.header, details: `Script run by: ${args.runBy}` });
    }
    if (args.executionContext) {
        debug({ title: args.header, details: `Execution context: ${args.executionContext}` });
    }
    if (args.scriptContext) {
        debug({ title: args.header, details: `Script context: ${args.scriptContext}` });
    }
    if (args.recordType) {
        debug({ title: args.header, details: `Record type: ${args.recordType}` });
    }
    if (args.recordId) {
        debug({ title: args.header, details: `Record id: ${args.recordId}` });
    }
    if (args.writeToFile) {
        // check/create folders required for writing the log files
        scriptLogFolderId = checkLogsFolders(args.header)
        if (scriptLogFolderId) {
            scriptLogFile = getFile(logFileName, scriptLogFolderId)
            if (scriptLogFile) {
                logFile = scriptLogFile;
                debug({ title: args.header, details: `${getBaseURL()}${scriptLogFile.url}`});
            }

        }
    }
    return (message: string) => {
        if (args.writeToFile) {
            messages.push(`${getMessageTimestamp()}  ${message}`);
        }
        else {
            messages.push(addCurrentDateToString(message));
        }

        if (!args.writeToFile) {
            writeLogMessageToNS(message, args.header)
        }
    };
}

export function flushLogs(): void {
    if (!logFile) {
        pushMessagesToNS(``)
        messages.length = 0;
        return;
    }

    const messagesSaved = writeStringsToFile(logFile, messages)
    if (messagesSaved) {
        messages.length = 0;
    }
}

export function checkLogsFolders(title: string): number | null {
    const datetime = new Date();
    const dateStr = datetime.toISOString().split('T')[0]
    const scriptName = runtime.getCurrentScript().id.replace('customscript_', '')
    let path = `FileCabinet/SuiteScripts`
    let parentFolderId = -15
    const foldersToCheck = [`Logs`, dateStr, scriptName]

    for (const folder of foldersToCheck) {
        if (!getFolderId({folderName: folder, parentFolderId: parentFolderId})) {
            createFolder({folderName: folder, parentFolderId: parentFolderId})
        }
        const folderId = getFolderId({folderName: folder, parentFolderId: parentFolderId})
        path += `/${folder}`
        if (!folderId) {
            debug({ title: title, details: `Unable to find "${path}" folder` });
            return null;
        }
        parentFolderId = folderId

    }

    return parentFolderId

}

function getLoggerStartTimestamp(): string {
    const datetime = new Date();
    const tokens = datetime.toISOString().split(`T`)
    const date = tokens[0].replace(/-/g, ``)
    const time = tokens[1].replace(/:/g, ``).replace(`.`, `_`).replace(`Z`, ``)
    // yyyymmdd_hhmmss_zzz
    return `${date}_${time}`

}

function getMessageTimestamp(): string {
    const datetime = new Date();
    const tokens = datetime.toISOString().split(`T`)
    const timeTokens = tokens[1].split(`.`)
    // yyyy-mm-dd hh:mm:ss
    return `${tokens[0]} ${timeTokens[0]}`
}
