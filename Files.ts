import file from 'N/file';
import {record, runtime} from "N";
import {debug} from "N/log";
import { fetchOneValue } from './Helpers';


export function writeFile(
    desiredOutputFileName: string,
    fileContent: string,
    directoryName?: string, // If not specified, current script directory is used
    logs?: string[]
): number[] {
    function stringChunks(initialString: string): string[] {
        const strings = initialString.split('\n');
        const outputStrings: string[] = [];
        let i: number;
        let j: number;
        const chunkSize = 100000;
        for (i = 0, j = strings.length; i < j; i += chunkSize) {
            outputStrings.push(strings.slice(i, i + chunkSize).join('\n'));
        }
        return outputStrings;
    }
    const createdFilesIds: number[] = [];
    let folderId: string | null
    if (!directoryName) {
        const sql = `select folder from file where name = '${runtime.getCurrentScript().id.replace('customscript_', '')}.js'`;
        logs?.push(sql);
        folderId = fetchOneValue(sql);
    }
    else {
        const sql = `SELECT id FROM mediaitemfolder WHERE appfolder = '${directoryName}'`;
        logs?.push(sql);
        folderId = fetchOneValue(sql);
    }
    if (!folderId) {
        logs?.push(`Folder not found`)
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
        let outputFileName =
            chunkNumber < 1
                ? `${desiredOutputFileName.replace('.txt', '')}.txt`
                : `${desiredOutputFileName.replace('.txt', '')}_${chunkNumber}.txt`;
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

export function getFolderId(params: {folderName: string, parentFolderId: number}): number | null {
    const sql = `SELECT MediaItemFolder.id FROM  MediaItemFolder WHERE ( MediaItemFolder.Parent = ${params.parentFolderId} AND MediaItemFolder.Name = '${params.folderName}')`
    const result = fetchOneValue(sql)
    return result ? Number(result) : null
}

export function getFileId(params: {fileName: string, parentFolderId: number}): number | null {
    const sql = `SELECT File.id FROM  File WHERE ( File.Folder = ${params.parentFolderId} AND File.Name = '${params.fileName}' )`
    const result = fetchOneValue(sql)
    return result ? Number(result) : null
}

export function createFolder(params: {folderName: string, parentFolderId: number}): number | null {
    try {
        const newFolder = record.create({
            type: record.Type.FOLDER
        });
        newFolder.setValue({fieldId: 'name', value: params.folderName})
        newFolder.setValue({fieldId: 'parent', value: params.parentFolderId})

        return newFolder.save();
    } catch (e) {
        return null
    }
}

export function writeStringsToFile(fileObj: file.File, lines: string[]): boolean {
    try {
        for (const line of lines) {
            fileObj.appendLine({value: line})
        }
        fileObj.save();
        return true;
    }
    catch (e) {
        debug({ title: `File-Exception`, details: `The following error occurred: ${e}` });
        return false;
    }
}

export function getFile(fileName: string, folderId: number): file.File | null {
    // Creates file with name fileName under folder folderId if it doesn't exist
    // file.File object loaded and returned then
    try {
        if (!getFileId({fileName: fileName, parentFolderId: folderId})) {
            const fileObj = file.create({
                name: fileName,
                fileType: file.Type.PLAINTEXT,
                folder: folderId
            });
            fileObj.save()
        }
    }
    catch (e) {
        const error = JSON.stringify(e)
        if (!error.includes(`DUP_RCRD`)) {
            throw e;
        }
        debug({ title: `File-Exception`, details: `File: ${fileName} | FolderId: ${folderId}. Encountered 'DUP_RCRD' error: ${e}` });
        debug({ title: `File-Exception`, details: `Skipping file creation, will try to get FileId` });
    }
    const fileId = getFileId({fileName: fileName, parentFolderId: folderId})
    if (!fileId) {
        return null
    }
    return file.load({id: fileId})
}

export function saveFileToFileCabinet(fileName: string, folderId: number, fileType: file.Type, fileContent: string): number | null {
    // Creates file with name fileName under folder folderId if it doesn't exist
    // returns fileId
    try {
        const fileObj = file.create({
            name: fileName,
            fileType: fileType,
            contents: fileContent,
            folder: folderId
        });
        return fileObj.save()

    }
    catch (e) {
        const error = JSON.stringify(e)
        if (error.includes(`DUP_RCRD`)) {
            debug({ title: `File-Exception`, details: `File: ${fileName} | FolderId: ${folderId}. Encountered 'DUP_RCRD' error: ${e}` });
            debug({ title: `File-Exception`, details: `Skipping file creation` });
            return null;
        }
        debug({ title: `File-Exception`, details: `File: ${fileName} | FolderId: ${folderId}. The following exception occurred during file creation: ${error}` });
        return null;
    }
}
