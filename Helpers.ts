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
import dayjs from 'dayjs';
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

export function chunks<T>(inputArray: Array<T>, chunkSize: number): Array<T>[] {
    /*
    Splits an array to chunks of fixed length
     */
    if (chunkSize === 0) {
        return [];
    }
    const outputArray: Array<T>[] = [];
    for (let i = 0; i < inputArray.length; i += chunkSize) {
        outputArray.push(inputArray.slice(i, i + chunkSize));
    }
    return outputArray;
}

export function notifyOwner(errorText: string, logsToInclude: string[], logs?: string[]): void {
    const scriptId = runtime.getCurrentScript().id
    logs?.push(`Script id: "${scriptId}"`)
    logs?.push(`Logs to include: ${logsToInclude}`)
    const sql = `select employee.id as owner_id, employee.email as owner_email, script.name as script_name from script join employee on script.owner = employee.id join file on file.id = script.scriptfile where script.scriptid = '${scriptId}'`;
    const results = getSqlResultAsMap(sql, []);
    if (results === undefined) {
        logs?.push(`Failed to run sql: ${sql}, results: ${JSON.stringify(results)}`)
        return;
    }
    if (results.length < 1) {
        logs?.push(`Failed to run sql: ${sql}, results: ${JSON.stringify(results)}`)
        return;
    }

    const ownerId = Number(results[0]['owner_id']);
    const ownerEmail = String(results[0]['owner_email']);
    if (!ownerId || ownerEmail.length === 0) {
        logs?.push(`Could not find ownerId or ownerEmail in ${JSON.stringify(results[0])}`)
        return;
    }
    try {
        email.send({
            author: ownerId,
            recipients: [`${ownerEmail}`],
            subject: `Script "${results[0]['script_name']}" failed`,
            body: errorText,
            attachments: [],
        });
        logs?.push(`Email to ${ownerEmail} sent`)
    } catch (e) {
        logs?.push(`Could not send a mail: ${e}`)
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
    logs: string[],
): TypeForAsMap | undefined {
    try {
        const sqlResults: query.Result[] = getSqlResults(sqlString).results;
        if (sqlResults) {
            return getValues(sqlResults);
        }
    } catch (e) {
        logs.push(e as string);
        return undefined;
    }
    return [];
}
export function parseDate(dateString: string, format: string): Date | null {
    /**
     * Format example: DD/MM/YYYY
     */
    const momentDate: dayjs.Dayjs = dayjs(dateString, format).add(8 , 'hours'); // to make sure its in NS timezone
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

export function loadTransactionLineGroup(
    transactionsIds: number[],
    logs?: string[],
): {
    [lineUniqueId: number]: {
        groupId: number | null;
        groupName: string;
        groupUniqueKey: number | null;
        itemId: number;
        itemName: string;
    };
} {
    /*
    For transactions list specified, loads all items with Groups information (groupId and name if line belongs to a group
     */
    const outputDict: {
        [lineUniqueId: number]: {
            groupId: number | null;
            groupName: string;
            groupUniqueKey: number | null;
            itemId: number;
            itemName: string;
        };
    } = {};
    for (const chunk of chunks(transactionsIds, 1000)) {
        const sql = `WITH Framed AS ( SELECT uniquekey, item, BUILTIN.DF(item) as item_name, itemtype, BUILTIN.DF(transaction) as tr_name, linesequencenumber, SUM(CASE WHEN itemtype IN ('Group', 'EndGroup') THEN 1 ELSE 0 END) OVER (ORDER BY BUILTIN.DF(transaction), linesequencenumber) AS frame_id FROM transactionline where transaction in (${chunk.join(
                ',',
        )}) and mainline = 'F' and taxline = 'F' ) SELECT linesequencenumber, uniquekey, item, item_name, tr_name, MAX(CASE WHEN itemtype = 'Group' THEN uniquekey END) OVER (PARTITION BY frame_id) as group_unique_key, MAX(CASE WHEN itemtype = 'Group' THEN item_name END) OVER (PARTITION BY frame_id) as group_name, MAX(CASE WHEN itemtype = 'Group' THEN item END) OVER (PARTITION BY frame_id) as group_id FROM Framed ORDER BY tr_name, linesequencenumber`;
        logs?.push(sql);
        const results = getSqlResultAsMap(sql, logs ? logs : []) as {
            linesequencenumber: string;
            uniquekey: string;
            item: number;
            item_name: string;
            tr_name: string;
            group_unique_key: string;
            group_name: string;
            group_id: string;
        }[];
        for (const r of results) {
            outputDict[Number(r.uniquekey)] = {
                groupId: r.group_id === 'null' ? null : Number(r.group_id),
                groupName: r.group_name === 'null' ? '' : r.group_name,
                itemId: Number(r.item),
                groupUniqueKey:
                    r.group_unique_key === 'null'
                        ? null
                        : Number(r.group_unique_key),
                itemName: r.item_name,
            };
        }
    }
    return outputDict;
}
