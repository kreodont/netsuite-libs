import file from 'N/file';
import runtime = require('N/runtime')
import { fetchOneValue } from './Helpers';

export function writeFileInCurrentDirectory(
    /*
    * Writes file in the directory where the current script js file resides. Can be used for large amount of logs storing
    * */
    // scriptFileName: string,
    desiredOutputFileName: string,
    fileContent: string,
    logs?: string[]
): number[] {
    function stringChunks(initialString: string): string[] {
        const strings = initialString.split('\n');
        const outputStrings: string[] = [];
        let i: number;
        let j: number;
        const chunk = 100000;
        for (i = 0, j = strings.length; i < j; i += chunk) {
            outputStrings.push(strings.slice(i, i + chunk).join('\n'));
        }
        return outputStrings;
    }
    const createdFilesIds: number[] = [];
    // if (scriptFileName.indexOf('.js') < 0) {
    //     scriptFileName += '.js';
    // }
    const sql = `select folder from file where name = '${runtime.getCurrentScript().id}'`;
    logs?.push(sql);
    const folderId = fetchOneValue(sql);
    if (!folderId) {
        return createdFilesIds;
    }
    logs?.push(`Folder id is ${folderId}`);
    const dataChunks = stringChunks(fileContent);
    logs?.push(
        `There are ${dataChunks.length} chunks`,
    );
    if (dataChunks.length < 1) {
        return createdFilesIds;
    }
    for (let chunkNumber = 0; chunkNumber < dataChunks.length; chunkNumber++) {
        const outputFileName =
            chunkNumber < 1
                ? `${desiredOutputFileName}.txt`
                : `${desiredOutputFileName}_${chunkNumber}.txt`;
        const fileObj = file.create({
            name: outputFileName,
            fileType: file.Type.CSV,
            contents: dataChunks[chunkNumber],
        });
        logs?.push(
            `Saving file ${outputFileName}`,
        );
        fileObj.folder = Number(folderId);
        createdFilesIds.push(fileObj.save());
        logs?.push('File saved');
    }
    logs?.push(
        `Files created: ${JSON.stringify(createdFilesIds)}`,
    );
    return createdFilesIds;
}
