import { debug } from 'N/log';
import {chunks} from './Helpers';

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
        f({ title: title, details: dashes + chunk });
    }
}
