import {execSync} from 'child_process';
import {ensureDirSync, readdirSync, readFileSync, removeSync, writeFileSync} from 'fs-extra';
import path = require('path');

class ScriptObject {
    scriptid = ``;
    name = ``;
    description = ``;
    type: ScriptType = ScriptType.None;
    deployments: ScriptDeployment[] = [];
    mapReduceVariables: string[] = [];
    suiteScriptVersion = `2.0`;
    scriptfile = ``;
    portlettype: `FORM` | `HTML` | `LINKS` | `LIST` | null = null;
    isinactive: `T` | `F` = `F`;
    notifyowner: `T` | `F` = `T`;
    fileName: string;
    projectFolder: string;
    // get correct(): boolean {return this.errors.length === 0;}
    errors: string[];

    constructor(fileText: string, fileName: string, projectFolder: string) {
        this.fileName = fileName;
        this.projectFolder = projectFolder;
        if (!this.projectFolder.startsWith(`/`)) {
            this.projectFolder = `/` + this.projectFolder;
        }
        this.errors = [];
        if (fileName.length === 0) {
            this.errors.push(`fileName must not be empty`);
        }
        const scriptVersion = /@NApiVersion (.+)/.exec(fileText);
        if (!scriptVersion) {
            this.errors.push(`Missing tag @NApiVersion`);
        }
        this.suiteScriptVersion = scriptVersion && scriptVersion.length > 1 ? scriptVersion[1].trim() : ``;

        const scriptName = /@NName (.+)/.exec(fileText);
        this.name = scriptName && scriptName.length > 1 ? scriptName[1] : ``;
        if (this.name.length === 0) {
            this.name = fileName.replace(`.js`, ``);
            this.errors.push(`@NName tag must be specified`);
        }

        const scriptDescription = /@NDescription (.+)/.exec(fileText);
        this.description = scriptDescription && scriptDescription.length > 1 ? scriptDescription[1] : ``;
        if (this.description.length === 0) {
            this.errors.push(`@NDescription tag must be specified`);
        }

        this.scriptid = `customscript_` + fileName
            .replace(`customscript_`, ``) // in case there is already customscript_ in file name
            .replace(`.js`, ``)
            .slice(0, 27)
            .replace(/_+$/, ``);

        const scriptType = /@NScriptType (.+)/.exec(fileText);
        this.type = scriptType && scriptType.length > 1 ? scriptType[1] as unknown as ScriptType : ScriptType.None;
        if (this.type === ScriptType.None) {
            this.errors.push(`@NScriptType tag must be specified`);
        }
        if (Object.values(ScriptType).indexOf(this.type) < 0) {
            this.errors.push(`@NScriptType tag must be one of the following: ${Object.values(ScriptType).filter(e => !Number.isSafeInteger(e))}. Provided: ${this.type}`);
        }

        if (!projectFolder.startsWith(`SuiteScripts/`)) {
            this.errors.push(`projectFolder must always start with SuiteScripts/`);
        }

        const deploymentsSearchResult =  /@NDeploy(.*)/.exec(fileText);
        let executionContext = `USERINTERFACE`;
        if (this.type === ScriptType.UserEventScript) {
            executionContext = `ACTION|ADVANCEDREVREC|BANKCONNECTIVITY|BANKSTATEMENTPARSER|BUNDLEINSTALLATION|CLIENT|CONSOLRATEADJUSTOR|CSVIMPORT|CUSTOMGLLINES|CUSTOMMASSUPDATE|DATASETBUILDER|DEBUGGER|EMAILCAPTURE|FICONNECTIVITY|FIPARSER|MAPREDUCE|OCRPLUGIN|OTHER|PAYMENTGATEWAY|PAYMENTPOSTBACK|PLATFORMEXTENSION|PORTLET|PROMOTIONS|RECORDACTION|RESTLET|RESTWEBSERVICES|SCHEDULED|SDFINSTALLATION|SHIPPINGPARTNERS|SUITELET|TAXCALCULATION|USEREVENT|USERINTERFACE|WEBAPPLICATION|WEBSERVICES|WEBSTORE|WORKBOOKBUILDER|WORKFLOW`;
        }
        if (deploymentsSearchResult && deploymentsSearchResult.length > 1) {
            this.deployments = deploymentsSearchResult[1]
                .split(`,`)
                .map(e => new ScriptDeployment(
                    this.scriptid.replace(`customscript`, `customdeploy`),
                    `RELEASED`,
                    `Script Deployment Title`,
                    `T`,
                    e.trim().replace(/ /g, ``),
                    `DEBUG`,
                    executionContext));
        }

        if (this.type === ScriptType.UserEventScript) {
            const nonEmptyDeployments = this.deployments.filter(e => e.recordtype);
            if (nonEmptyDeployments.length === 0) {
                this.errors.push(`UserEvent script must have at least one deployment to a record`);
            }
        }

        if (this.type === ScriptType.MapReduceScript) {
            const variables = /@NVariables(.*)/.exec(fileText);
            if (variables) {
                this.mapReduceVariables = variables[1].split(`,`).map(variable => variable.trim());
                this.mapReduceVariables.filter(v => v.length > 30).map(v => this.errors.push(`Map Reduce variable "${v}" name is too long. Should not be longer than 30 symbols (currently ${v.length})`));
            }

            if (this.deployments.length !== 1) {
                this.errors.push(`MapReduce script must have one empty @NDeploy tag`);
            }
            else if (this.deployments[0].recordtype) {
                this.errors.push(`MapReduce @NDeploy tag must be empty`);
            }
            else {
                const initialDeployment = this.deployments[0];
                initialDeployment.status = `TESTING`;
                for (let _ = 0; _ < 9; _++) {
                    this.deployments.push(ScriptDeployment.copy(initialDeployment));
                }
            }

        }
        if (this.type === ScriptType.ScheduledScript) {
            if (this.deployments.length !== 1) {
                this.errors.push(`ScheduledScript script must have one empty @NDeploy tag`);
            }
            else if (this.deployments[0].recordtype) {
                this.errors.push(`ScheduledScript @NDeploy tag must be empty`);
            }
            else {
                const initialDeployment = this.deployments[0];
                initialDeployment.status = `TESTING`;
            }
        }

        /*
        Numbering deployments
         */
        let deploymentNumber = 1;
        for (const d of this.deployments) {
            if (d.scriptid.length > 37) {
                d.scriptid = d.scriptid.slice(0, d.scriptid.length - 2);
            }
            d.scriptid +=`${deploymentNumber++}`;
        }
    }

    xml(): string {
        let outputText = `<${this.type.toLowerCase()} scriptid="${this.scriptid}">
    <name>${this.name}</name>
    <notifyowner>${this.notifyowner}</notifyowner>
    <description>${this.description}</description>
    <scriptfile>[${this.projectFolder}/${this.fileName}]</scriptfile>`;
        if (this.mapReduceVariables.length > 0) {
            outputText += `<scriptcustomfields>`;
            for (const variable of this.mapReduceVariables) {
                outputText += `
                <scriptcustomfield scriptid="custscript_${variable.toLowerCase().replace(/ /g, `_`)}">
      <accesslevel>2</accesslevel>
      <applyformatting>F</applyformatting>
      <checkspelling>F</checkspelling>
      <defaultchecked>F</defaultchecked>
      <defaultselection></defaultselection>
      <defaultvalue></defaultvalue>
      <description></description>
      <displayheight></displayheight>
      <displaytype>NORMAL</displaytype>
      <displaywidth></displaywidth>
      <dynamicdefault></dynamicdefault>
      <fieldtype>CLOBTEXT</fieldtype>
      <help></help>
      <isformula>F</isformula>
      <ismandatory>F</ismandatory>
      <label>${variable}</label>
      <linktext></linktext>
      <maxlength></maxlength>
      <maxvalue></maxvalue>
      <minvalue></minvalue>
      <onparentdelete></onparentdelete>
      <searchlevel>2</searchlevel>
      <selectrecordtype></selectrecordtype>
      <setting></setting>
      <storevalue>T</storevalue>
    </scriptcustomfield>
                `;
            }
            outputText +=  `</scriptcustomfields>`;
        }
        if (this.deployments.length > 0) {
            outputText += `\n\t<scriptdeployments>`;
            for (const d of this.deployments) {
                for (const string of d.xml().split(`\n`)) {
                    outputText += `\n\t\t${string}`;
                }
            }
            outputText += `\n\t</scriptdeployments>`;
        }
        outputText += `\n</${this.type.toLowerCase()}>`;
        return outputText;
    }
}

enum ScriptType {
    None = `None`,
    Client = `ClientScript`,
    UserEventScript = `UserEventScript`,
    Suitelet =`Suitelet`,
    Restlet = `Restlet`,
    MapReduceScript =`MapReduceScript`,
    Portlet = `Portlet`,
    MassUpdateScript = `MassUpdateScript`,
    WorkflowActionScript = `WorkflowActionScript` ,
    ScheduledScript = `ScheduledScript`}

type LogLevel = `DEBUG` | `AUDIT` | `INTERNAL` | `ERROR` | `SYSTEM` | `EMERGENCY`

class ScriptDeployment {
    scriptid: string;
    status: `TESTING` | `RELEASED`;
    title: string;
    isdeployed: `T` | `F`;
    recordtype: string | null;
    loglevel: LogLevel;
    allroles: `T` | `F`;
    executioncontext: string | null;
    runasrole: string;
    constructor(
        scriptId: string,
        status: `TESTING` | `RELEASED`,
        title: string,
        isDeployed: `T` | `F`,
        recordType: string | null,
        logLevel: LogLevel = `DEBUG`,
        executionContext: string | null,
        runAsRole = `Administrator`,
        allRoles: `T` | `F` = `T`
    ) {
        this.scriptid = scriptId;
        this.status = status;
        this.title = title;
        this.isdeployed = isDeployed;
        this.recordtype = recordType && recordType.length > 0 ? recordType : null;
        this.loglevel = logLevel;
        this.executioncontext = executionContext;
        this.runasrole = runAsRole;
        this.allroles = allRoles;
    }
    static copy(i: ScriptDeployment): ScriptDeployment {
        return new ScriptDeployment(i.scriptid, i.status, i.title, i.isdeployed, i.recordtype, i.loglevel, i.executioncontext, i.runasrole, i.allroles);
    }
    xml(): string {
        let outputString = `<scriptdeployment scriptid="${this.scriptid}">
    <status>${this.status}</status>
    <title>${this.scriptid}</title>
    <isdeployed>${this.isdeployed}</isdeployed>
    <loglevel>${this.loglevel}</loglevel>
    <allroles>${this.allroles}</allroles>
    <runasrole>${this.runasrole.toUpperCase()}</runasrole>
`;
        if (this.executioncontext) {
            outputString += `    <executioncontext>${this.executioncontext}</executioncontext>\n`;
        }
        if (this.recordtype) {
            if (this.recordtype.startsWith(`customrecord`)) {
                outputString += `    <recordtype>[scriptid=${this.recordtype}]</recordtype>\n`;
            }
            else {
                outputString += `    <recordtype>${this.recordtype.toUpperCase()}</recordtype>\n`;
            }
        }
        outputString += `</scriptdeployment>`;
        return outputString;
    }
}

function removeFolderSync(folderPath: string): boolean {
    try {
        removeSync(folderPath);
        console.log(`Folder ${folderPath} removed successfully.`);
        return true;
    } catch (error) {
        console.error(`An error occurred while removing the folder: ${error}`);
        return false;
    }
}

function makeConfigurationFiles(): string[] {
    const packageJson = require("./package.json");
    const outputDirectory = packageJson.file_cabinet_path || `./src/FileCabinet/SuiteScripts`;
    const shortOutputDirectory = outputDirectory.replace(`./src/FileCabinet/`, ``);
    const scriptObjects = [];

    if (!removeFolderSync(outputDirectory)) {
        return [`Failed to remove folder ${outputDirectory}`];
    }
    ensureDirSync(`./src/Objects/`);
    ensureDirSync(outputDirectory);
    const files = readdirSync(`./`);
    const tsFiles = files
        .filter(file => path.extname(file) === `.ts`)
        .filter(file => [`delivery_functions.ts`, `Gulpfile.ts`].indexOf(file) < 0);
    for (const f of tsFiles) {
        const fileContents = readFileSync(f, `utf8`);
        if (fileContents.indexOf(`@NScriptType`) < 0) {
            continue;
        }
        const script = new ScriptObject(
            fileContents,
            path.basename(f).replace(/ts$/, `js`),
            `${shortOutputDirectory}/${path.basename(__dirname)}`,
        );
        if (script.errors.length > 0) {
            for (const e of script.errors) {
                console.log(`${f}: ${e}`);
            }
            return script.errors;
        }
        scriptObjects.push(script);
        writeFileSync(`./src/Objects/${script.scriptid}.xml`, script.xml());
    }

    return [];
}

function getModuleImports(fileText: string, scriptName: string): {moduleName: string, scriptName: string}[] {
    // Parses file text and returns a list of
    // imported modules
    const result: {moduleName: string, scriptName: string}[] = [];
    let tokens: string[] = [];
    const lines = fileText.split(`\n`);

    for (const line of lines) {
        if (!line.includes(`import`)) {
            continue;
        }
        const dryLine = line.replace(/ /g, ``)
        if (dryLine.includes(`*@N`)) {
            // Skipping description tags
            continue;
        }
        if (line.includes(`from`)) {
            // for lines like: import { CommandHandler } from "./CommandHandler";
            tokens = line.split(`from `);
        }
        if (line.includes(`require(`)) {
            // for lines like: import runtime = require("N/runtime");
            tokens = line.split(`require(`);
        }
        if (tokens.length === 0) {
            continue;
        }
        let moduleName = tokens[1].replace(`;`, ``).replace(/\)/g, ``).replace(/"/g, ``).replace(/'/g, ``);
        result.push({moduleName: moduleName, scriptName: scriptName});
    }
    return result;
}

function getTextFunctions(fileText: string): {func: string, line: number} | null {
    // Parses file text to check if Record.Text functions are used
    const textFunctions = [`getText`, `setText`, `getSublistText`, `setSublistText`]
    const lines = fileText.split(`\n`);

    for (const line of lines) {
        if (!line.includes(`Text`)) {
            continue;
        }
        for (const txtFunc of textFunctions)  {
            if (line.includes(txtFunc)) {
                return {func: `Record.${txtFunc}`, line: lines.indexOf(line)};
            }
        }

    }
    return null;
}

function scriptContainsCodeText(fileText: string, codeText: string): boolean  {
    // Checks if codeText is in fileText
    const lines = fileText.replace(/ /g, ``)
    const text = codeText.replace(/ /g, ``)
    return lines.includes(text);
}

function fileIsRootScript(fileContent: string): boolean {
    return fileContent.indexOf(`@NScriptType`) >= 0;
}

function getScriptType(fileContent: string): string {
    const scriptType = /@NScriptType (.+)/.exec(fileContent);
    return scriptType && scriptType.length > 1 ? scriptType[1] as unknown as ScriptType : ScriptType.None;
}

function checkUEScriptUsesTextFunctions(fileName: string, fileContent: string): string[] {
    // Check if UE script uses Record.getText (etc.) functions
    // in context.UserEventType.CREATE mode
    if (!fileIsRootScript(fileContent)) {
        return [];
    }
    if (getScriptType(fileContent) !== ScriptType.UserEventScript) {
        return [];
    }
    const UEScriptExitsInCreateMode = scriptContainsCodeText(fileContent, `if(context.type===context.UserEventType.CREATE){\nreturn`)
    const textFunctionsUsed = getTextFunctions(fileContent)
    if (textFunctionsUsed && !UEScriptExitsInCreateMode) {
        return[`UserEvent script "${fileName}". Line ${textFunctionsUsed.line}. ${textFunctionsUsed.func} function used in "CREATE" mode.\nHow to fix:\nAdd "if (context.type === context.UserEventType.CREATE) {return;}" code to the beginning of the script.\n`];
    }
    return [];
}

function checkForEmptyLineAfterHeader(fileName: string, fileContent: string): string[] {
    if (!fileIsRootScript(fileContent)) {
        return [];
    }
    const headerEndPattern = /\*\/\s*$/;
    const lines = fileContent.split('\n');
    let headerEndIndex = -1;

    // Find the end of the header
    for (let i = 0; i < lines.length; i++) {
        if (headerEndPattern.test(lines[i])) {
            headerEndIndex = i;
            break;
        }
    }

    // Check if there is at least one empty line after the header
    if (headerEndIndex !== -1 && (headerEndIndex + 1 >= lines.length || lines[headerEndIndex + 1].trim() !== '')) {
        return [`There must be at least 1 empty line after the header in file "${fileName}"`];
    }
    return [];

}

function checkServerScriptsManifest(fileName: string, fileContent: string, manifestContent: string): string[] {
    if (!fileIsRootScript(fileContent)) {
        return [];
    }
    const scriptTypes = [
        String(ScriptType.UserEventScript),
        String(ScriptType.Suitelet),
        String(ScriptType.ScheduledScript),
        String(ScriptType.MapReduceScript)
    ]
    const scriptType = getScriptType(fileContent)
    const manifestIncludesServersidescripting = scriptContainsCodeText(manifestContent, `<feature required="true">SERVERSIDESCRIPTING</feature>`)

    if (scriptTypes.includes(scriptType) && !manifestIncludesServersidescripting) {
        return [`For script "${fileName}" ./src/manifest.xml should contain "SERVERSIDESCRIPTING"`];
    }

    return []

}

function checkScriptName(fileName: string, fileText: string): string[] {
    // Checks NS script's name length  - @NName
    const scriptName = /@NName (.+)/.exec(fileText);

    if (!scriptName) {
        return []
    }
    const name = scriptName[1]
    if (name.length >= 40) {
        return [`File "${fileName}". Script's name @NName "${name}" is longer than 40 symbols`]
    }

    return []
}

function countInclusions(text: string, substring: string): number {
    let count: number = 0;
    let position: number = text.indexOf(substring);

    while (position !== -1) {
        count++;
        position = text.indexOf(substring, position + 1);
    }

    return count;
}

function checkFlushLogs(fileName: string, fileText: string): string[] {
    if (!fileText.includes(`createDebugLogger(`) && !fileText.includes(`writeToFile: true`)) {
        return [];
    }

    const flushFunctions = countInclusions(fileText, `flushLogs()`)
    let debugLoggers = countInclusions(fileText, `createDebugLogger(`)
    let code = fileText
    let writeFlags: number = 0

    while (debugLoggers > 0) {
        const start: number = code.indexOf(`createDebugLogger(`)
        const sliced = code.slice(start)
        const end: number = start + sliced.indexOf(`)`) + 1
        const debugLoggerCode = code.slice(start, end);

        if (debugLoggerCode.includes(`writeToFile: true`)) {
            writeFlags++;
        }
        code = code.replace(debugLoggerCode, ``);
        debugLoggers--;
    }

    if (flushFunctions < writeFlags) {
        return [`File "${fileName}". Amount of 'createDebugLogger()' with 'writeToFile' option - (${writeFlags}) is greater than 'flushLogs()' - (${flushFunctions}) in the code`];
    }

    return [];
}

function checkClientScriptImports (fileName: string, fileContent: string, allScripts: {[name: string]: string}): string[] {
    // Checks if a client script contains improper imports
    if (!fileIsRootScript(fileContent)) {
        return [];
    }
    if (getScriptType(fileContent) !== ScriptType.Client) {
        return [];
    }

    const fileImports = getModuleImports(fileContent, fileName);
    if (fileImports.length === 0) {
        return [];
    }

    const result: string[] = [];
    const prohibitedImports = [`N/ui/serverWidget`];
    let modulesToCheck: {moduleName: string, scriptName: string}[] = [];


    // add client script imports to the list
    modulesToCheck.push(...fileImports);

    while (modulesToCheck.length > 0) {
        // get the first module name from the list
        let module = modulesToCheck.shift();
        if (!module) {
            continue;
        }
        let moduleName = module.moduleName;
        let scriptName = module.scriptName;
        if (prohibitedImports.includes(moduleName)) {
            let error = `Script "${fileName}" uses prohibited module: "${moduleName}". Related script file: ${scriptName}`;
            result.push(error);
        }
        if (moduleName.includes(`N/`) || moduleName === `N` || moduleName.includes(`../`)) {
            // Skipping NS modules and external imports
            continue;
        }
        // adding imports of the module to the list
        const name = moduleName.split(`/`).pop() + `.ts`
        const moduleText = allScripts[name];
        const fileImports = getModuleImports(moduleText, name);
        modulesToCheck.push(...fileImports);
    }

    return result;
}

function checkManifestDependencies(fileName: string, fileText: string, manifestFileText: string): string[] {
    const customFields: string[] = [];
    const regex = /<object>(.*?)<\/object>/g;
    let match;
    customFields.push(...getCustomObjectNames(fileText));

    while ((match = regex.exec(manifestFileText)) !== null) {
        customFields.push(match[1]);
    }

    const resultObjects = Array.from(new Set(customFields));
    if (resultObjects.length > 0 && !manifestFileText.includes(`<objects>`)) {
        manifestFileText = manifestFileText.replace(`</dependencies>`, `<objects></objects>\n</dependencies>`);
    }
    const objectsString = resultObjects.map(result => `<object>${result}</object>`).join(`\n`);

    // Replace the content between <objects> and </objects> with the objectsString
    const updatedXmlData = manifestFileText.replace(/(<objects>)[\s\S]*?(<\/objects>)/, `$1\n${objectsString}\n$2`);
    if (updatedXmlData !== manifestFileText) {
        return [`File "${fileName}". Custom objects were used (${resultObjects}) in the code but not included in manifest.xml.\nCorrect manifest.xml should look the following way:\n${updatedXmlData}`];
    }

    return [];
}

export function sanityChecks(files: {[name: string]: string}, manifestContent: string): string[] {
    /*
    Perform sanity checks before deployment
    Returns a list of errors
     */
    const errors: string[] = [];
    for (const [fileName, fileText] of Object.entries(files)) {
        errors.push(...checkScriptName(fileName, fileText));
        errors.push(...checkForEmptyLineAfterHeader(fileName, fileText));
        errors.push(...checkUEScriptUsesTextFunctions(fileName, fileText));
        errors.push(...checkServerScriptsManifest(fileName, fileText, manifestContent))
        errors.push(...checkClientScriptImports(fileName, fileText, files))
        errors.push(...checkFlushLogs(fileName, fileText))
        errors.push(...checkManifestDependencies(fileName, fileText, manifestContent))
    }
    return errors;
}

function getCustomObjectNames(text: string): string[] {
    const prefixes = [`custbody`, `custentity`, `custitem`, `custcol`, `custitemnumber`, `custrecord`];
    const regex = new RegExp(`\\b(${prefixes.join(`|`)})\\w*\\b`, `g`);
    const matches = text.match(regex) || [];
    return Array.from(new Set(matches));
}

export function addDependenciesToManifest(): boolean {
    const tsFiles = readdirSync(`./`)
        .filter(file => path.extname(file) === `.ts`)
        .filter(file => [`delivery_functions.ts`].indexOf(file) < 0);
    const customFields: string[] = [];
    for (const f of tsFiles) {
        const fileContents = readFileSync(f, `utf8`);
        customFields.push(...getCustomObjectNames(fileContents));
    }
    // const allCustomFields = Array.from(new Set(customFields))

    const manifestFileContent = readFileSync(`./src/manifest.xml`, `utf8`);
    const regex = /<object>(.*?)<\/object>/g;
    let match;
    while ((match = regex.exec(manifestFileContent)) !== null) {
        customFields.push(match[1]);
    }

    const resultObjects = Array.from(new Set(customFields));
    const objectsString = resultObjects.map(result => `\t\t<object>${result}</object>`).join(`\n`);

    // Replace the content between <objects> and </objects> with the objectsString
    const updatedXmlData = manifestFileContent.replace(/(<objects>)[\s\S]*?(<\/objects>)/, `$1\n${objectsString}\n$2`);
    console.log(updatedXmlData);
    writeFileSync(`./src/manifest.xml`, updatedXmlData);
    return true;
}

export function import_custom_objects() {
    try {
        console.log(`Checking files`, `\n`);
        const tsFiles = readdirSync(`./`)
            .filter(file => path.extname(file) === `.ts`)
            .filter(file => [`delivery_functions.ts`].indexOf(file) < 0);
        const customFields: string[] = [];
        for (const f of tsFiles) {
            const fileContents = readFileSync(f, `utf8`);
            customFields.push(...getCustomObjectNames(fileContents));
        }
        console.log(`Found custom objects. Trying to download`, `\n`)
        console.log(`suitecloud object:import --type ALL --destinationfolder "/Objects" --scriptid ${customFields.join(` `)}`);
        execSync(`suitecloud object:import --type ALL --destinationfolder "/Objects" --scriptid ${customFields.join(` `)}`, { stdio: `inherit` });

        return true;

    } catch (error) {
        console.error(`An error occurred: ${error}`);
        return false;
    }
}

export function build(): boolean {
    try {
        console.log(`Running linter`);
        execSync(`eslint . --fix`, { stdio: `inherit` });
        console.log(`Linter completed\n`);

        console.log(`Running tests`);
        execSync(`jest`, { stdio: `inherit` });
        console.log(`Tests completed\n`);

        console.log(`Running tsc...`);
        execSync(`tsc`, { stdio: `inherit` });
        console.log(`tsc completed\n`);

        const packageJson = require(`./package.json`);
        const fileCabinetPath = packageJson.file_cabinet_path || `./src/FileCabinet/SuiteScripts`;

        console.log(`Removing ${fileCabinetPath}/netsuite-libs...`);
        removeFolderSync(`${fileCabinetPath}/netsuite-libs`); // to make sure netsuite-libs not deployed in NS. This is important not to re-write days.js for example
        console.log(`Removing ${fileCabinetPath}/netsuite-libs completed\n`);
        return true;

    } catch (error) {
        console.error(`An error occurred: ${error}`);
        return false;
    }
}

export function deploy() {
    console.log(`Making deployment files`);
    const errors = makeConfigurationFiles();
    if (errors.length > 0) {
        console.error(`Deployment aborted. Please check errors log.`)
        return;
    }
    console.log(`Deployment files created\n`);


    if (!build()) {
        return;
    }

    console.log(`Choosing account to deploy...`);
    execSync(`suitecloud account:setup`, { stdio: `inherit` });

    console.log(`Uploading files`); // we need this because in case of a new script, the JS file is already added to the manifest, but it's not yet in NS File Cabinet
    if (!uploadJSFiles()) {
        console.log(`Failed to upload files`)
        return;
    }
    console.log(`Uploading files completed\n`);

    console.log(`Running suitecloud project:deploy...`);
    execSync(`suitecloud project:deploy`, { stdio: `inherit` });
    console.log(`Suitecloud project:deploy completed\n`);
}

function uploadJSFiles(): boolean {
    const projectName = path.basename(__dirname);
    const packageJson = require(`./package.json`);
    const fileCabinetPath = packageJson.file_cabinet_path || `./src/FileCabinet/SuiteScripts`;
    const shortCabinetPath = fileCabinetPath.replace(`./src/FileCabinet/`, ``);

    const files = readdirSync(`${fileCabinetPath}/${projectName}/`).filter(f=>f.endsWith(`.js`));
    if (files.length === 0) {
        console.log(`No files to upload`);
        return false;
    }
    const uploadString = files.map(file => `"/${shortCabinetPath}/${path.basename(__dirname)}/${file}"`).join(` `);
    console.log(uploadString);
    execSync(`suitecloud file:upload --paths ${uploadString}`, { stdio: `inherit` });
    return true;
}

export function quickUploadToTheSameAccount(): void {
    console.log(`Running tsc...`);
    execSync(`tsc`, { stdio: `inherit` });
    console.log(`tsc completed\n`);

    const packageJson = require(`./package.json`);
    const fileCabinetPath = packageJson.file_cabinet_path || `./src/FileCabinet/SuiteScripts`;

    console.log(`Removing ${fileCabinetPath}/netsuite-libs...`);
    removeFolderSync(`${fileCabinetPath}/netsuite-libs`); // to make sure netsuite-libs not deployed in NS. This is important not to re-write days.js for example
    console.log(`Removing ${fileCabinetPath}/netsuite-libs completed\n`);

    console.log(`Uploading files`);
    if (!uploadJSFiles()) {
        console.log(`Failed to upload files`);
        return;
    }
    console.log(`Uploading files completed\n`);
}

export function generate_tsconfig() {
    const packageJson = require(`./package.json`);
    const fileCabinetPath = packageJson.file_cabinet_path || `./src/FileCabinet/SuiteScripts`;
    const tsconfigPath = path.resolve(__dirname, `./tsconfig.json`);
    const tsconfigString = readFileSync(tsconfigPath, `utf-8`);
    const tsconfig = JSON.parse(tsconfigString);
    if (!tsconfig.compilerOptions) {
        tsconfig.compilerOptions = {};
    }
    tsconfig.compilerOptions.outDir = fileCabinetPath;
    writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
}