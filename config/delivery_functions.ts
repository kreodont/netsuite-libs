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
        return true
    } catch (error) {
        console.error(`An error occurred while removing the folder: ${error}`);
        return false
    }
}

function makeConfigurationFiles(): string[] {
    const packageJson = require("./package.json");
    const outputDirectory = packageJson.file_cabinet_path || "./src/FileCabinet/SuiteScripts";
    const shortOutputDirectory = outputDirectory.replace(`./src/FileCabinet/`, ``);
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
                console.log(`${f}: ${e}`)
            }
            return script.errors;
        }
        writeFileSync(`./src/Objects/${script.scriptid}.xml`, script.xml());
    }
    return []
}

function getUniqueOccurrences(text: string): string[] {
    const prefixes = ['custbody', 'custentity', 'custitem', 'custcol', 'custitemnumber', 'custrecord'];
    const regex = new RegExp(`\\b(${prefixes.join('|')})\\w*\\b`, 'g');
    const matches = text.match(regex) || [];
    return Array.from(new Set(matches));
}

export function addDependenciesToManifest(): boolean {
    const tsFiles = readdirSync(`./`)
        .filter(file => path.extname(file) === `.ts`)
        .filter(file => [`delivery_functions.ts`].indexOf(file) < 0);
    const customFields: string[] = []
    for (const f of tsFiles) {
        const fileContents = readFileSync(f, `utf8`);
        customFields.push(...getUniqueOccurrences(fileContents))
    }
    // const allCustomFields = Array.from(new Set(customFields))

    const manifestFileContent = readFileSync('./src/manifest.xml', 'utf8')
    const regex = /<object>(.*?)<\/object>/g;
    let match;
    while ((match = regex.exec(manifestFileContent)) !== null) {
        customFields.push(match[1]);
    }

    const resultObjects = Array.from(new Set(customFields))
    const objectsString = resultObjects.map(result => `\t\t<object>${result}</object>`).join('\n');

    // Replace the content between <objects> and </objects> with the objectsString
    const updatedXmlData = manifestFileContent.replace(/(<objects>)[\s\S]*?(<\/objects>)/, `$1\n${objectsString}\n$2`);
    console.log(updatedXmlData)
    writeFileSync('./src/manifest.xml', updatedXmlData)
    return true
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

        const packageJson = require("./package.json");
        const fileCabinetPath = packageJson.file_cabinet_path || "./src/FileCabinet/SuiteScripts";

        console.log(`Removing ${fileCabinetPath}/netsuite-libs...`);
        removeFolderSync(`${fileCabinetPath}/netsuite-libs`) // to make sure netsuite-libs not deployed in NS. This is important not to re-write days.js for example
        console.log(`Removing ${fileCabinetPath}/netsuite-libs completed\n`);
        return true

    } catch (error) {
        console.error(`An error occurred: ${error}`);
        return false
    }
}

export function deploy() {
    console.log(`Making deployment files`);
    const errors = makeConfigurationFiles();
    if (errors.length > 0) {
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
    const packageJson = require("./package.json");
    const fileCabinetPath = packageJson.file_cabinet_path || "./src/FileCabinet/SuiteScripts";
    const shortCabinetPath = fileCabinetPath.replace(`./src/FileCabinet/`, ``);

    const files = readdirSync(`${fileCabinetPath}/${projectName}/`).filter(f=>f.endsWith('.js'));
    if (files.length === 0) {
        console.log(`No files to upload`);
        return false;
    }
    const uploadString = files.map(file => `"/${shortCabinetPath}/${path.basename(__dirname)}/${file}"`).join(` `);
    console.log(uploadString)
    execSync(`suitecloud file:upload --paths ${uploadString}`, { stdio: `inherit` });
    return true
}

export function uploadFiles() {
    console.log(`Running tests`);
    execSync(`jest`);
    console.log(`Tests completed\n`);

    console.log(`tsc...`);
    execSync(`tsc`, { stdio: `inherit` });
    console.log(`tsc completed\n`);

    console.log(`Choosing account to deploy...`);
    execSync(`suitecloud account:setup`, { stdio: `inherit` });

    console.log(`Uploading files`);
    if (!uploadJSFiles()) {
        console.log(`Failed to upload files`)
        return;
    }
    console.log(`Uploading files completed\n`);

}

export function quickUploadToTheSameAccount(): void {
    console.log(`Running tsc...`);
    execSync(`tsc`, { stdio: `inherit` });
    console.log(`tsc completed\n`);

    const packageJson = require("./package.json");
    const fileCabinetPath = packageJson.file_cabinet_path || "./src/FileCabinet/SuiteScripts";

    console.log(`Removing ${fileCabinetPath}/netsuite-libs...`);
    removeFolderSync(`${fileCabinetPath}/netsuite-libs`) // to make sure netsuite-libs not deployed in NS. This is important not to re-write days.js for example
    console.log(`Removing ${fileCabinetPath}/netsuite-libs completed\n`);

    console.log(`Uploading files`);
    if (!uploadJSFiles()) {
        console.log(`Failed to upload files`)
        return;
    }
    console.log(`Uploading files completed\n`);
}

export function generate_tsconfig() {
    const packageJson = require("./package.json");
    const fileCabinetPath = packageJson.file_cabinet_path || "./src/FileCabinet/SuiteScripts";
    const tsconfigPath = path.resolve(__dirname, "./tsconfig.json");
    const tsconfigString = readFileSync(tsconfigPath, "utf-8");
    console.log(tsconfigString);
    const tsconfig = JSON.parse(tsconfigString);
    if (!tsconfig.compilerOptions) {
        tsconfig.compilerOptions = {};
    }
    tsconfig.compilerOptions.outDir = fileCabinetPath;
    writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));
}