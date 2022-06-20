enum ScriptType {
    None = 'None',
    Client = 'Client',
    UserEvent = 'UserEvent',
    Suitelet ='Suitelet', Restlet = 'Restlet',
    MapReduce ='MapReduce',
    Portlet = 'Portlet',
    MassUpdateScript = 'MassUpdateScript',
    WorkflowActionScript = 'WorkflowActionScript' ,
    ScheduledScript = 'ScheduledScript'}
type LogLevel = 'DEBUG' | 'AUDIT' | 'INTERNAL' | 'ERROR' | 'SYSTEM' | 'EMERGENCY'

class ScriptDeployment {
    scriptid: string
    status: 'TESTING' | 'RELEASED'
    title: string
    isdeployed: 'T' | 'F'
    recordtype: string | null
    loglevel: LogLevel
    allroles: 'T' | 'F'
    executioncontext: string | null
    runasrole: string
    constructor(
        scriptId: string,
        status: 'TESTING' | 'RELEASED',
        title: string,
        isDeployed: 'T' | 'F',
        recordType: string | null,
        logLevel: LogLevel = 'DEBUG',
        executionContext: string | null,
        runAsRole: string = 'Administrator',
        allRoles: 'T' | 'F' = 'T'
        ) {
        this.scriptid = scriptId
        this.status = status
        this.title = title
        this.isdeployed = isDeployed
        this.recordtype = recordType && recordType.length > 0 ? recordType : null
        this.loglevel = logLevel
        this.executioncontext = executionContext
        this.runasrole = runAsRole
        this.allroles = allRoles
    }
    static copy(i: ScriptDeployment): ScriptDeployment {
        return new ScriptDeployment(i.scriptid, i.status, i.title, i.isdeployed, i.recordtype, i.loglevel, i.executioncontext, i.runasrole, i.allroles)
    }
    xml(): string {
        let outputString = `<scriptdeployment scriptid="${this.scriptid}">
    <status>${this.status}</status>
    <title>${this.scriptid}</title>
    <isdeployed>${this.isdeployed}</isdeployed>
    <loglevel>${this.loglevel}</loglevel>
    <allroles>${this.allroles}</allroles>
`
        if (this.executioncontext) {
            outputString += `    <executioncontext>${this.executioncontext}</executioncontext>\n`
        }
        if (this.recordtype) {
            outputString += `    <recordtype>${this.recordtype}</recordtype>\n`
        }
        outputString += `</scriptdeployment>`
        return outputString
    }
}

export class ScriptObject {
    scriptid: string = ''
    name: string = ''
    description: string = ''
    type: ScriptType = ScriptType.None
    deployments: ScriptDeployment[] = []
    suiteScriptVersion: string = '2.0'
    scriptfile: string = ''
    portlettype: 'FORM' | 'HTML' | 'LINKS' | 'LIST' | null = null
    isinactive: 'T' | 'F' = 'F'
    notifyowner: 'T' | 'F' = 'F'
    fileName: string
    projectFolder: string
    get correct(): boolean {return this.errors.length === 0}
    errors: string[]
    constructor(fileText: string, fileName: string, projectFolder: string) {
        this.fileName = fileName
        this.projectFolder = projectFolder
        this.errors = []
        if (fileName.length === 0) {
            this.errors.push(`fileName must not be empty`)
        }
        const scriptVersion = /@NApiVersion (.+)/.exec(fileText)
        if (!scriptVersion) {
            this.errors.push(`Missing tag @NApiVersion`)
        }
        this.suiteScriptVersion = scriptVersion && scriptVersion.length > 1 ? scriptVersion[1].trim() : ""
        if (this.suiteScriptVersion !== '2.1') {
            this.errors.push(`@NApiVersion must be "2.1", "${this.suiteScriptVersion}" specified`)
        }

        const scriptName = /@NName (.+)/.exec(fileText)
        this.name = scriptName && scriptName.length > 1 ? scriptName[1] : ""
        if (this.name.length === 0) {
            this.errors.push(`@NName tag must be specified`)
        }

        const scriptDescription = /@NDescription (.+)/.exec(fileText)
        this.description = scriptDescription && scriptDescription.length > 1 ? scriptDescription[1] : ''
        if (this.description.length === 0) {
            this.errors.push('@NDescription tag must be specified')
        }

        this.scriptid = `customscript_` + fileName
            .replace('.js', '')
            .slice(0, 27)
            .replace(/_+$/, '')

        const scriptType = /@NScriptType (.+)/.exec(fileText)
        this.type = scriptType && scriptType.length > 1 ? scriptType[1] as unknown as ScriptType  : ScriptType.None
        if (this.type === ScriptType.None) {
            this.errors.push('@NScriptType tag must be specified')
        }
        if (Object.values(ScriptType).indexOf(this.type) < 0) {
            this.errors.push(`@NScriptType tag must be one of the following: ${Object.values(ScriptType).filter(e => !Number.isSafeInteger(e))}. Provided: ${this.type}`)
        }

        if (!projectFolder.startsWith('SuiteScripts/')) {
            this.errors.push(`projectFolder must always start with SuiteScripts/`)
        }

        const deploymentsSearchResult =  /@NDeploy(.*)/.exec(fileText)
        let executionContext = 'USERINTERFACE'
        if (this.type === ScriptType.UserEvent) {
            executionContext = 'USERINTERFACE|WEBSERVICES|CSVIMPORT'
        }
        if (deploymentsSearchResult && deploymentsSearchResult.length > 1) {
            this.deployments = deploymentsSearchResult[1]
                .split(',')
                .map(e => new ScriptDeployment(
                    this.scriptid.replace('customscript', 'customdeploy'),
                    'RELEASED',
                    'Script Deployment Title',
                    "T",
                    e.trim().toUpperCase().replace(/ /g, ''),
                    'DEBUG',
                    executionContext))
        }

        if (this.type === ScriptType.UserEvent) {
            const nonEmptyDeployments = this.deployments.filter(e => e.recordtype)
            if (nonEmptyDeployments.length === 0) {
                this.errors.push(`UserEvent script must have at least one deployment to a record`)
            }
        }

        if (this.type === ScriptType.MapReduce) {
            if (this.deployments.length !== 1) {
                this.errors.push(`MapReduce script must have one empty @NDeploy tag`)
            }
            else if (this.deployments[0].recordtype) {
                this.errors.push(`MapReduce @NDeploy tag must be empty`)
            }
            else {
                const initialDeployment = this.deployments[0]
                initialDeployment.status = 'TESTING'
                for (let _ = 0; _ < 9; _++) {
                    this.deployments.push(ScriptDeployment.copy(initialDeployment))
                }
            }
        }

        /*
        Numbering deployments
         */
        let deploymentNumber = 1
        for (const d of this.deployments) {
            if (d.scriptid.length > 37) {
                d.scriptid = d.scriptid.slice(0, d.scriptid.length - 2)
            }
            d.scriptid +=`${deploymentNumber++}`
        }
    }
    xml(): string {
        let outputText = `<${this.type.toLowerCase()} scriptid="${this.scriptid}">
    <name>${this.name}</name>
    <notifyowner>${this.notifyowner}</notifyowner>
    <scriptfile>[${this.projectFolder}/${this.fileName}]</scriptfile>`
        if (this.deployments.length > 0) {
            outputText += `\n\t<scriptdeployments>`
            for (const d of this.deployments) {
                for (const string of d.xml().split('\n')) {
                    outputText += `\n\t\t${string}`
                }
            }
            outputText += `\n\t</scriptdeployments>`
        }
        outputText += `\n</${this.type.toLowerCase()}>`
        return outputText
    }
}