/**
 * Module Description
 * Several handy functions to use in other modules
 *
 * Version      Date            Author            Comments
 *  1.0      29th March 2021   Dmitry Masanov     Script Created
 *
 */
import {query, runtime} from 'N';

export function chunks<T>(inputArray: Array<T>, chunkSize: number): Array<T>[] {
    /*
    Splits an array to chunks of fixed length. For a string split, use string.split('')
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

export function roundNumber(n: number, digitsAfterComma: number): number {
    return (
        Math.round(n * Math.pow(10, digitsAfterComma)) /
        Math.pow(10, digitsAfterComma)
    );
}

export function getBaseURL(): string {
    const companyId = runtime.accountId.toLowerCase().replace(/_/g, `-`);
    return `https://${companyId}.app.netsuite.com`;
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

export function getSqlResultAsMap(
    sqlString: string,
): { [p: string]: string | boolean | number | null }[] {
    const sqlResults: query.Result[] = query.runSuiteQL({
        query: sqlString,
    }).results;
    if (sqlResults) {
        return sqlResults.map((result) => {
            return result.asMap();
        });
    }
    return [];
}

export function uniqueArray<T>(inputArray: Array<T>): Array<T> {
    return inputArray.filter((element, position) => inputArray.indexOf(element) === position)
}
export function getNamesByIDs(ids: number[], databaseTable: string): {[id: number]: string} {
    const output:{[id: number]: string} = {}
    const uniqueIds = uniqueArray(ids)
    const sql = `SELECT id, BUITIN.DF(id) as name from ${databaseTable} where id in (${uniqueIds})`
    const results = getSqlResultAsMap(sql)
    for (const r of results) {
        output[Number(r['ids'])] = String(r['name'])
    }
    return output
}

// export function loadTransactionLineGroup(
//     transactionsIds: number[],
//     logs?: string[],
// ): {
//     [lineUniqueId: number]: {
//         groupId: number | null;
//         groupName: string;
//         groupUniqueKey: number | null;
//         itemId: number;
//         itemName: string;
//     };
// } {
//     /*
//     For transactions list specified, loads all items with Groups information (groupId and name if line belongs to a group)
//      */
//     const outputDict: {
//         [lineUniqueId: number]: {
//             groupId: number | null;
//             groupName: string;
//             groupUniqueKey: number | null;
//             itemId: number;
//             itemName: string;
//         };
//     } = {};
//     for (const chunk of chunks(transactionsIds, 1000)) {
//         const sql = `WITH Framed AS ( SELECT uniquekey, item, BUILTIN.DF(item) as item_name, itemtype, BUILTIN.DF(transaction) as tr_name, linesequencenumber, SUM(CASE WHEN itemtype IN ('Group', 'EndGroup') THEN 1 ELSE 0 END) OVER (ORDER BY BUILTIN.DF(transaction), linesequencenumber) AS frame_id FROM transactionline where transaction in (${chunk.join(
//                 ',',
//         )}) and mainline = 'F' and taxline = 'F' ) SELECT linesequencenumber, uniquekey, item, item_name, tr_name, MAX(CASE WHEN itemtype = 'Group' THEN uniquekey END) OVER (PARTITION BY frame_id) as group_unique_key, MAX(CASE WHEN itemtype = 'Group' THEN item_name END) OVER (PARTITION BY frame_id) as group_name, MAX(CASE WHEN itemtype = 'Group' THEN item END) OVER (PARTITION BY frame_id) as group_id FROM Framed ORDER BY tr_name, linesequencenumber`;
//         logs?.push(sql);
//         const results = getSqlResultAsMap(sql, logs ? logs : []) as {
//             linesequencenumber: string;
//             uniquekey: string;
//             item: number;
//             item_name: string;
//             tr_name: string;
//             group_unique_key: string;
//             group_name: string;
//             group_id: string;
//         }[];
//         for (const r of results) {
//             outputDict[Number(r.uniquekey)] = {
//                 groupId: r.group_id === 'null' ? null : Number(r.group_id),
//                 groupName: r.group_name === 'null' ? '' : r.group_name,
//                 itemId: Number(r.item),
//                 groupUniqueKey:
//                     r.group_unique_key === 'null'
//                         ? null
//                         : Number(r.group_unique_key),
//                 itemName: r.item_name,
//             };
//         }
//     }
//     return outputDict;
// }
