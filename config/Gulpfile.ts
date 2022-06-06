const { dest, series, src } = require("gulp");
const { VinylFile } = require("gulp-typescript/release/types");
const exec = require("child_process").exec;
const log = require("fancy-log");
const replace = require("gulp-replace");
const ts_compiler = require("gulp-typescript");
const clean = require("gulp-clean");
const fs = require("fs");
const git = require("gulp-git");
const path = require("path");
const jestGulp = require("gulp-jest").default;
const outputDirectory = `./src/FileCabinet/SuiteScripts`;
const dirName = path.basename(__dirname);
const buildName = `${dirName}_build`;
const buildAndDeployName = `${dirName}_build_and_deploy`;
let globalBranch = "";

function deploymentStatus() {
    if (["master", "main"].indexOf(globalBranch) >= 0) {
        return "RELEASED";
    }
    return "TESTING";
}
class ScriptFile {
    content: string;
    fullPath: string;
    constructor(args: { content: string; fullPath: string }) {
        this.content = args.content;
        this.fullPath = args.fullPath;
    }
    name(): string {
        return path.basename(this.fullPath).replace(/\.js/g, "");
    }
    scriptType(): string {
        const re = /\* @NScriptType (.+)/;
        const scriptTypeArray = re.exec(this.content);
        if (!scriptTypeArray || scriptTypeArray.length < 2) {
            return "";
        }
        return scriptTypeArray[1];
    }
    portletType(): string {
        const re = /\* @NScriptPortletType (.+)/;
        const scriptPortletTypeArray = re.exec(this.content);
        if (!scriptPortletTypeArray || scriptPortletTypeArray.length < 2) {
            return "";
        }
        return scriptPortletTypeArray[1];
    }

    static mapReduceScheduledDeployment(
        scriptName: string,
        deploymentNumber: number,
    ): string {
        // status TESTING is not an error, the RELEASED raising an error
        return `
            <scriptdeployment scriptid="${scriptName.replace(
                "customscript",
                "customdeploy",
            )}_${deploymentNumber}">
                <status>TESTING</status>
                <title>${scriptName}_${deploymentNumber}</title>
                <isdeployed>T</isdeployed>
                <loglevel>DEBUG</loglevel>
                <allroles>T</allroles>
            </scriptdeployment>
        `;
    }

    static suiteletDeployment(scriptName: string): string {
        return `
            <scriptdeployment scriptid="${scriptName.replace(
                "customscript",
                "customdeploy",
            )}">
                <status>${deploymentStatus()}</status>
                <title>${scriptName}</title>
                <isdeployed>T</isdeployed>
                <loglevel>DEBUG</loglevel>
                <allroles>T</allroles>
            </scriptdeployment>
        `;
    }
    static portletDeployment(scriptName: string): string {
        return `
            <scriptdeployment scriptid="${scriptName.replace(
                "customscript",
                "customdeploy",
            )}">
                <status>${deploymentStatus()}</status>
                <title>${scriptName}</title>
                <isdeployed>T</isdeployed>
                <loglevel>DEBUG</loglevel>
                <allroles>T</allroles>
                <dashboardapp>T</dashboardapp>
            </scriptdeployment>
        `;
    }

    recordTypeRequiredForDeployments(): boolean {
        return ["UserEventScript"].indexOf(this.scriptType()) >= 0;
    }

    getDeployments(): string[] {
        const re = /\* @NDeploy(.+)/;
        const deploymentsArray = re.exec(this.content);
        if (!deploymentsArray || deploymentsArray.length < 2) {
            return [];
        }

        const deploymentsList: string[] = deploymentsArray[1]
            .split(",")
            .map((element) => element.replace(/ /g, "").toUpperCase()); //.filter(element => element.indexOf('CUSTOMRECORD') < 0);
        for (const deployment of deploymentsList) {
            if (deployment.indexOf("CUSTOMRECORD") >= 0) {
                deploymentsList[
                    deploymentsList.indexOf(deployment)
                ] = `[${deployment.toLowerCase()}]`;
            }
        }
        return deploymentsList;
    }

    xmlText(): string {
        /*
        For script file, create an XML for deployment
         */
        const deployments = this.getDeployments();
        if (
            deployments.length === 0 &&
            this.recordTypeRequiredForDeployments()
        ) {
            throw `For script type ${this.scriptType()} at least one deployment must be specified. Please add tag @NDeploy`;
        }
        let outputText = `
            <${this.scriptType().toLowerCase()} scriptid="${this.name()}">
                <name>${this.name()}</name>
                <notifyowner>T</notifyowner>
                <scriptfile>[/SuiteScripts/${dirName}/${this.name()}.js]</scriptfile>
                <scriptdeployments>
                `;
        if (this.scriptType().toLowerCase() === "portlet") {
            outputText = `
            <${this.scriptType().toLowerCase()} scriptid="${this.name()}">
                <name>${this.name()}</name>
                <notifyowner>T</notifyowner>
                <scriptfile>[/SuiteScripts/${dirName}/${this.name()}.js]</scriptfile>
                <portlettype>${this.portletType().toUpperCase()}</portlettype>
                <scriptdeployments>
                `;
        }
        let deployment_number = 0;
        for (const deployment of deployments) {
            deployment_number++;

            if (this.scriptType().toLowerCase() === "usereventscript") {
                outputText += `        
                            <scriptdeployment scriptid="${this.name().replace(
                                "customscript",
                                "customdeploy",
                            )}_${deployment_number}">
                                <isdeployed>T</isdeployed>
                                <loglevel>DEBUG</loglevel>
                                <allroles>T</allroles>
                                <executioncontext>USERINTERFACE</executioncontext>
                                <recordtype>${deployment}</recordtype>
                                <runasrole>ADMINISTRATOR</runasrole>
                                <status>${deploymentStatus()}</status>
                            </scriptdeployment>
                `;
            } else {
                outputText += `        
                            <scriptdeployment scriptid="${this.name().replace(
                                "customscript",
                                "customdeploy",
                            )}_${deployment_number}">
                                <isdeployed>T</isdeployed>
                                <loglevel>DEBUG</loglevel>
                                <allroles>T</allroles>
                                <recordtype>${deployment}</recordtype>
                                <status>${deploymentStatus()}</status>
                            </scriptdeployment>
                `;
            }
        }

        if (
            ["ScheduledScript", "MapReduceScript"].indexOf(
                this.scriptType(),
            ) !== -1
        ) {
            for (let i = 0; i < 10; i++) {
                outputText += ScriptFile.mapReduceScheduledDeployment(
                    this.name(),
                    i,
                );
            }
        }
        if (this.scriptType() === "Suitelet") {
            outputText += ScriptFile.suiteletDeployment(this.name());
        }
        if (this.scriptType() === "Portlet") {
            outputText += ScriptFile.portletDeployment(this.name());
        }

        outputText += `    
                </scriptdeployments>
            </${this.scriptType().toLowerCase()}>`;
        return outputText;
    }
}

function checkBranch() {
    return git.revParse(
        { args: "--abbrev-ref HEAD" },
        function (err: string, branch: string) {
            globalBranch = branch;
        },
    );
}
function cleanOutput() {
    return src(`${outputDirectory}/*`).pipe(clean());
}
function cleanScriptsDefinitions() {
    return src(`./src/FileCabinet/Objects/*`).pipe(clean());
}
function transpile() {
    const tsProject = ts_compiler.createProject(`./tsconfig.json`, {
        typescript: require("typescript"),
        declaration: false,
    });
    return tsProject
        .src()
        .pipe(tsProject())
        .on("data", (file: typeof VinylFile) => {
            const re = /\* @NScriptType (.+)/;
            let scriptName = "customscript_";
            const isScriptForNS = file.contents
                ? re.test(file.contents.toString("utf8"))
                : false;
            if (isScriptForNS && file.basename !== "Gulpfile.js") {
                if (file.basename.indexOf(scriptName) === 0) {
                    scriptName = file.basename;
                } else {
                    scriptName += file.basename;
                }
                scriptName = scriptName.replace("__", "_");

                if (scriptName.length > 40) {
                    const fileType: string = scriptName.slice(
                        scriptName.indexOf("."),
                    );
                    if (scriptName[39 - fileType.length] === "_") {
                        scriptName =
                            scriptName.slice(0, 39 - fileType.length) +
                            fileType;
                    } else {
                        scriptName =
                            scriptName.slice(0, 40 - fileType.length) +
                            fileType;
                    }
                }
                file.basename = scriptName;
            }
        })
        .pipe(dest(`${outputDirectory}`));
}
function transpileLibs() {
    const tsProject = ts_compiler.createProject(
        `./node_modules/netsuite-libs/tsconfig.json`,
        { typescript: require("typescript"), declaration: false },
    );
    return tsProject
        .src()
        .pipe(tsProject())
        .pipe(dest(`${outputDirectory}/${dirName}`));
}

function fixLibraryImports() {
    const folderWithJS = `${outputDirectory}/${dirName}`;
    log(
        `Changing imports netsuite-libs/ to ./ in all JS files from folder ${folderWithJS}`,
    );
    return src(`${folderWithJS}/*.js`, {})
        .pipe(replace('"netsuite-libs/', '"./'))
        .pipe(dest(`${folderWithJS}`));
}
function writeScriptConfigurationFiles() {
    const inputStream = src([`${outputDirectory}/${dirName}/*.js`]);
    inputStream.on("data", (file: { contents: Buffer; history: string[] }) => {
        if (!fs.existsSync("./src/Objects/")) {
            fs.mkdirSync("./src/Objects/");
        }

        const scriptFile = new ScriptFile({
            content: file.contents.toString("utf8"),
            fullPath: file.history[0],
        });
        log(scriptFile.xmlText());
        const re = /\* @NScriptType (.+)/;
        const isScriptForNS =
            re.test(file.contents.toString("utf8")) &&
            path.basename(file.history[0]) !== "Gulpfile.js";
        if (isScriptForNS) {
            fs.writeFile(
                `./src/Objects/${scriptFile.name()}.xml`,
                scriptFile.xmlText(),
                function (err: string) {
                    if (err) return log(err);
                },
            );
        }
    });
    inputStream.on("end", () => {
        exec(`suitecloud project:adddependencies`, function () {});
    });
    return inputStream;
}
function runTests() {
    return src("./__tests__").pipe(jestGulp());
}
function deploy(cb: CallableFunction) {
    exec(
        `suitecloud project:deploy`,
        function (err: string, stdout: string, stderr: string) {
            log(stdout);
            log(stderr);
            cb(err);
        },
    );
}

function copyJSLibs() {
    log(
        `Copying all JS from ./node-modules/netsuite-libs/ to ${outputDirectory}/${dirName}`,
    );
    return src(`./node_modules/netsuite-libs/*.js`, {}).pipe(
        dest(`${outputDirectory}/${dirName}`),
    );
}

checkBranch();

exports[buildName] = series(
    cleanOutput,
    cleanScriptsDefinitions,
    transpile,
    transpileLibs,
    copyJSLibs,
    fixLibraryImports,
    runTests,
);

exports[buildAndDeployName] = series(
    checkBranch,
    cleanOutput,
    cleanScriptsDefinitions,
    transpile,
    transpileLibs,
    copyJSLibs,
    fixLibraryImports,
    writeScriptConfigurationFiles,
    runTests,
    deploy,
    deploy,
);
