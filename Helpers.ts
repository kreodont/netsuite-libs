/**
 * Module Description
 * Several handy functions to use in other modules
 *
 * Version      Date            Author            Comments
 *  1.0      29th March 2021   Dmitry Masanov     Script Created
 *
 */

import log from 'N/log';
import query from 'N/query';
import url from 'N/url';
import moment from './moment';
import email from 'N/email';
import { TypeForAsMap } from './Types';
import { runtime } from 'N';

export function printLogPartial(
    /**
     * Usage: printLogPartial('Header') will return a new function
     */
    title = 'LOG',
    log_function: CallableFunction = log.audit,
): (message: string) => void {
    return (message: string): void => {
        log_function({ title: title, details: message });
    };
}

export function notifyOwner(scriptName: string, errorText: string): void {
    const sql = `select employee.id as owner_id, email as owner_email from script join employee on script.owner = employee.id join File on script.scriptfile = File.id where File.name = '${scriptName}'`;
    const results = getSqlResultAsMap(sql, []);
    if (results.length < 1) {
        return;
    }

    const ownerId = results[0]['owner_id'] as number;
    const ownerEmail = results[0]['owner_email'] as string;
    if (!ownerId || ownerEmail.length === 0) {
        return;
    }
    try {
        email.send({
            author: ownerId,
            recipients: [`${ownerEmail}`],
            subject: `Script "${scriptName}" failed`,
            body: errorText,
            attachments: [],
        });
    } catch (e) {
        return;
    }
}

export function fetchOneValue(sqlString: string): string | null {
    /**
     * When it is known that the result will be a single value. The value is returned as a string
     */
    let results: query.Result[];
    try {
        results = query.runSuiteQL({ query: sqlString }).results;
    } catch (e) {
        return null;
    }

    if (results.length === 0) {
        return null;
    }
    if (!results[0].values || results[0].values.length < 0) {
        return null;
    }

    return String(results[0].values[0]);
}

export function getBaseURL(): string {
    const companyId = runtime.accountId.toLowerCase().replace(/_/g, '-');
    return `https://${companyId}.app.netsuite.com`;
}

function getSqlResults(sqlString: string): query.ResultSet {
    return query.runSuiteQL({
        query: sqlString,
    });
}

function getValues(searchResult: query.Result[]): TypeForAsMap {
    return searchResult.map((result) => {
        return result.asMap();
    });
}

export function adjustQuantity(
    lines: {
        lineNumber: number;
        rate: number;
        quantity: number;
        amount: number;
    }[],
    targetAmount: number,
): { lineNumber: number; quantity: number; rate: number }[] {
    /*
    Due to Netsuite limitations, quantity precision is limited to 5 digits after comma, and currency to 2, sometimes we
    must adjust quantity a bit to have exact amount
     */
    if (targetAmount === 0) {
        return lines.map((element) => {
            return {
                lineNumber: element.lineNumber,
                quantity: 0,
                rate: element.rate,
            };
        });
    }
    const initialAmount =
        Math.round(
            lines.reduce(function (a, b) {
                return a + b.amount;
            }, 0) * 100,
        ) / 100;

    const roundedTargetAmount = Math.round(targetAmount * 1000) / 1000; // Amount is a currency

    const coefficient = roundedTargetAmount / initialAmount;
    let calculatedAmount = 0;
    for (const line of lines) {
        line.quantity *= coefficient;
        line.quantity = Math.round(line.quantity * 100000) / 100000;
        calculatedAmount += line.rate * line.quantity;
    }

    calculatedAmount = Math.round(calculatedAmount * 1000) / 1000;

    if (roundedTargetAmount === calculatedAmount) {
        return lines.map((element) => {
            return {
                lineNumber: element.lineNumber,
                quantity: element.quantity,
                rate: element.rate,
            };
        });
    }

    const difference = calculatedAmount - roundedTargetAmount;
    calculatedAmount = 0;
    const lineNumberWithMinimumRate = lines.reduce(function (prev, curr) {
        return prev.rate < curr.rate ? prev : curr;
    });
    for (let i = 0; i < 1000000; i++) {
        if (difference < 0) {
            lines[lineNumberWithMinimumRate.lineNumber].quantity += 0.00001; // adjusting the first line. Target is greater, so adding a bit
        } else {
            lines[lineNumberWithMinimumRate.lineNumber].quantity -= 0.00001; // adjusting the first line. Target is less, so subtracting a bit
        }
        // lines[lineNumberWithMinimumRate.lineNumber].quantity = Math.round(lines[0].quantity * 100000) / 100000;
        calculatedAmount = 0;
        for (const line of lines) {
            calculatedAmount += line.rate * line.quantity;
        }
        const roundedCalculatedAmount =
            Math.round(calculatedAmount * 1000) / 1000;
        if (
            (difference < 0 &&
                roundedTargetAmount >= roundedCalculatedAmount) ||
            (difference > 0 &&
                roundedCalculatedAmount <= roundedCalculatedAmount)
        ) {
            return lines.map((element) => {
                return {
                    lineNumber: element.lineNumber,
                    quantity: element.quantity,
                    rate: element.rate,
                };
            });
        }
    }
    return [];
}
export function getSqlResultAsMap(
    sqlString: string,
    logs?: string[],
): TypeForAsMap {
    try {
        const sqlResults: query.Result[] = getSqlResults(sqlString).results;
        if (sqlResults) {
            return getValues(sqlResults);
        }
    } catch (e) {
        logs?.push(e);
    }
    return [];
}

export function parseDate(dateString: string, format: string): Date | null {
    /**
     * Format example: DD/MM/YYYY
     */
    const momentDate: moment.Moment = moment.utc(dateString, format);
    const newDate: Date = momentDate.toDate();
    if (newDate.toDateString().toLowerCase().indexOf('invalid') >= 0) {
        return null;
    }
    return newDate;
}

export function getScriptURL(scriptId: string, deploymentId = '1'): string {
    return url.resolveScript({
        scriptId: scriptId,
        returnExternalUrl: false,
        deploymentId: deploymentId,
    });
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
        Array(dashesLength).join('-') +
        inputString +
        Array(dashesLength).join('-')
    );
}

export function roundNumber(n: number, digitsAfterComma: number): number {
    return (
        Math.round(n * Math.pow(10, digitsAfterComma)) /
        Math.pow(10, digitsAfterComma)
    );
}
