import {ScriptObject} from "../Deployment/ScriptObject";

describe("Deployment tests", () => {

    test("All the script files should have tag @NApiVersion", () => {
        const wrong = new ScriptObject('', '', '')
        expect(wrong.errors.indexOf('Missing tag @NApiVersion')).toBeGreaterThanOrEqual(0)
        expect(wrong.correct).toEqual(false)

        const correct = new ScriptObject('@NApiVersion A', '', '')
        expect(correct.errors.indexOf('Missing tag @NApiVersion')).toEqual(-1)
    })

    test("@NApiVersion must be only 2.1", () => {
        const wrong = new ScriptObject('@NApiVersion 2.x', '', '')
        expect(wrong.errors.indexOf('@NApiVersion must be "2.1", "2.x" specified')).toBeGreaterThanOrEqual(0)
        expect(wrong.correct).toEqual(false)

        const correct = new ScriptObject('@NApiVersion 2.1', '', '')
        expect(correct.errors.indexOf('@NApiVersion must be "2.1", "2.x" specified')).toEqual(-1)
    })

    test(`@NName tag must be specified`, () => {
        const wrong = new ScriptObject('@NApiVersion 2.x', '', '')
        expect(wrong.correct).toEqual(false)
        expect(wrong.errors.indexOf('@NName tag must be specified')).toBeGreaterThanOrEqual(0)

        const correct = new ScriptObject(`@NName Script Name`, '', '')
        expect(correct.errors.indexOf('@NName tag must be specified')).toEqual(-1)
    })

    test(`@NDescription tag must be specified`, () => {
        const wrong = new ScriptObject('@NApiVersion 2.x', '', '')
        expect(wrong.correct).toEqual(false)
        expect(wrong.errors.indexOf('@NDescription tag must be specified')).toBeGreaterThanOrEqual(0)

        const correct = new ScriptObject('@NDescription This is a very cool script', '', '')
        expect(correct.errors.indexOf(`@NDescription tag must be specified`)).toEqual(-1)
    })

    test(`Empty file name is not allowed`, () => {
        const wrong = new ScriptObject('@NApiVersion 2.x', '', '')
        expect(wrong.correct).toEqual(false)
        expect(wrong.errors.indexOf('fileName must not be empty')).toBeGreaterThanOrEqual(0)
    })

    test(`scriptid must be customscript_script_file_name`, () => {
        const script = new ScriptObject('', 'ue_for_testing.js', '')
        expect(script.scriptid).toEqual('customscript_ue_for_testing')

    })

    test (`scriptid length must be <= 40`, () => {
        const script = new ScriptObject('', 'this_is_a_very_long_file_name_which_should_be_truncated.js', '')
        expect(script.scriptid).toEqual('customscript_this_is_a_very_long_file_na')
        expect(script.scriptid.length).toBeLessThanOrEqual(40)
    })

    test (`scriptid should not end with _`, () => {
        const script = new ScriptObject('', 'this_is_a_very_long_file___name_which_should_be_truncated.js', '')
        expect(script.scriptid).toEqual('customscript_this_is_a_very_long_file')
        expect(script.scriptid.length).toBeLessThanOrEqual(40)
    })

    test(`@NScriptType tag is mandatory`, () => {
        const w = new ScriptObject('@NApiVersion 2.x', '', '')
        expect(w.correct).toEqual(false)
        expect(w.errors.indexOf('@NScriptType tag must be specified')).toBeGreaterThanOrEqual(0)

        const c = new ScriptObject(`@NApiVersion 2.x @NScriptType UserEventScript`, '', '')
        expect(c.errors.indexOf('@NScriptType tag must be specified')).toEqual(-1)
    })

    test(`Unknown @NScriptType is not allowed`, () => {
        const w = new ScriptObject('@NApiVersion 2.x @NScriptType FairyScript', '', '')
        expect(w.correct).toEqual(false)
        expect(w.errors.indexOf('@NScriptType tag must be one of the following: None,Client,UserEventScript,Suitelet,Restlet,MapReduceScript,Portlet,MassUpdateScript,WorkflowActionScript,ScheduledScript. Provided: FairyScript')).toBeGreaterThanOrEqual(0)

        const c = new ScriptObject(`@NApiVersion 2.x @NScriptType MassUpdateScript`, '', '')
        expect(c.errors.indexOf(`@NScriptType tag must be one of the following: None,Client,UserEventScript,Suitelet,Restlet,MapReduceScript,Portlet,MassUpdateScript,WorkflowActionScript,ScheduledScript. Provided: FairyScript`)).toEqual(-1)
    })

    test(`Project folder should always start with SuiteScripts/`, () => {
        const w = new ScriptObject(``, ``, ``)
        expect(w.correct).toEqual(false)
        expect(w.errors.indexOf(`projectFolder must always start with SuiteScripts/`)).toBeGreaterThanOrEqual(0)

        const c = new ScriptObject(``, ``, `SuiteScripts/TempProject`)
        expect(c.errors.indexOf(`projectFolder must always start with SuiteScripts/`)).toEqual(-1)
        })

    test(`If @NDeploy tag specified, the script should have at least one deployment`, () => {
        const s = new ScriptObject(`@NDeploy`, ``, ``)
        expect(s.deployments.length).toEqual(1)
        expect(s.deployments[0].scriptid.startsWith('customdeploy')).toEqual(true)
        expect(s.deployments[0].recordtype).toEqual(null)
    })

    test(`There can be several deployments split with comma`, () => {
        const s = new ScriptObject(`@NDeploy SalesOrder, Customer`, ``, ``)
        expect(s.deployments.length).toEqual(2)
        expect(s.deployments[0].recordtype).toEqual('SALESORDER')
        expect(s.deployments[1].recordtype).toEqual('CUSTOMER')
    })

    test(`UserEvent script must have at least 1 non-empty deployment`, () => {
        const w = new ScriptObject(`@NScriptType UserEventScript\n@NDeploy`, ``, ``)
        expect(w.correct).toEqual(false)
        expect(w.errors.indexOf(`UserEvent script must have at least one deployment to a record`)).toBeGreaterThanOrEqual(0)

        const c = new ScriptObject(`@NScriptType UserEvent\n@NDeploy Customer`, ``, ``)
        expect(c.errors.indexOf(`UserEvent script must have at least one deployment to a record`)).toEqual(-1)
    })

    test(`All the deployments must have different ids`, () => {
        const s = new ScriptObject(`@NScriptType UserEvent\n@NDeploy Customer, Customer, Sales Order`, `ue_some_script`, ``)
        expect(s.deployments.length).toEqual(3)
        expect(s.deployments[0].scriptid).toEqual('customdeploy_ue_some_script1')
        expect(s.deployments[1].scriptid).toEqual('customdeploy_ue_some_script2')
        expect(s.deployments[2].scriptid).toEqual('customdeploy_ue_some_script3')
    })

    test(`MapReduce scripts must have only 1 bare @NDeploy tag and 10 deployments by default`, () => {
        const w = new ScriptObject(`@NScriptType MapReduceScript`, `ue_some_script`, ``)
        expect(w.correct).toEqual(false)
        expect(w.errors.indexOf(`MapReduce script must have one empty @NDeploy tag`)).toBeGreaterThanOrEqual(0)

        const w2 = new ScriptObject(`@NScriptType MapReduceScript\n@NDeploy Estimate`, `ue_some_script`, ``)
        expect(w2.correct).toEqual(false)
        expect(w2.errors.indexOf(`MapReduce @NDeploy tag must be empty`)).toBeGreaterThanOrEqual(0)

        const c = new ScriptObject(`@NScriptType MapReduceScript\n@NDeploy\n@NName Some Map Reduce script\n@NDescription none\n@NApiVersion 2.1\n@NVariables 9`, `ue_some_script`, `SuiteScripts/`)
        expect(c.correct).toEqual(true)
        expect(c.deployments.length).toEqual(10)
        expect(c.deployments[9].scriptid).toEqual('customdeploy_ue_some_script10')
    })

    test(`MapReduce deployments status must always be TESTING (SDF rejects RELEASED)`, () => {
        const c = new ScriptObject(`@NScriptType MapReduceScript\n@NDeploy`, `ue_some_script`, ``)
        expect(c.deployments[0].status).toEqual('TESTING')
    })

    test(`UserEvent script default context must be USERINTERFACE|WEBSERVICES|CSVIMPORT`, () => {
        const c = new ScriptObject(`@NScriptType UserEventScript\n@NDeploy Sales Order`, `ue_some_script`, ``)
        expect(c.deployments[0].executioncontext).toEqual('USERINTERFACE|WEBSERVICES|CSVIMPORT')
    })

    test(`Deployment XML`, () => {
        const c = new ScriptObject(`@NScriptType UserEventScript\n@NDeploy Sales Order`, `ue_some_script`, ``)
        expect(c.deployments[0].xml()).toEqual(`<scriptdeployment scriptid="customdeploy_ue_some_script1">
    <status>RELEASED</status>
    <title>customdeploy_ue_some_script1</title>
    <isdeployed>T</isdeployed>
    <loglevel>DEBUG</loglevel>
    <allroles>T</allroles>
    <runasrole>ADMINISTRATOR</runasrole>
    <executioncontext>USERINTERFACE|WEBSERVICES|CSVIMPORT</executioncontext>
    <recordtype>SALESORDER</recordtype>
</scriptdeployment>`)
    })

    test(`Script XML without deployments`, () => {
        const c = new ScriptObject(`@NScriptType ClientScript\n@NName Some Client script`, `cl_some_script.js`, `SuiteScripts/SomeFolder`)
        expect(c.xml()).toEqual(`<clientscript scriptid="customscript_cl_some_script">
    <name>Some Client script</name>
    <notifyowner>T</notifyowner>
    <description></description>
    <scriptfile>[/SuiteScripts/SomeFolder/cl_some_script.js]</scriptfile>
</clientscript>`)
    })

    test(`Script XML with deployments`, () => {
        const c = new ScriptObject(`@NScriptType ClientScript\n@NName Some Client script\n@NDeploy Sales Order, Customer`, `cl_some_script.js`, ``)
        expect(c.xml()).toEqual(`<clientscript scriptid="customscript_cl_some_script">
    <name>Some Client script</name>
    <notifyowner>T</notifyowner>
    <description></description>
    <scriptfile>[//cl_some_script.js]</scriptfile>
\t<scriptdeployments>
\t\t<scriptdeployment scriptid="customdeploy_cl_some_script1">
\t\t    <status>RELEASED</status>
\t\t    <title>customdeploy_cl_some_script1</title>
\t\t    <isdeployed>T</isdeployed>
\t\t    <loglevel>DEBUG</loglevel>
\t\t    <allroles>T</allroles>
\t\t    <runasrole>ADMINISTRATOR</runasrole>
\t\t    <executioncontext>USERINTERFACE</executioncontext>
\t\t    <recordtype>SALESORDER</recordtype>
\t\t</scriptdeployment>
\t\t<scriptdeployment scriptid="customdeploy_cl_some_script2">
\t\t    <status>RELEASED</status>
\t\t    <title>customdeploy_cl_some_script2</title>
\t\t    <isdeployed>T</isdeployed>
\t\t    <loglevel>DEBUG</loglevel>
\t\t    <allroles>T</allroles>
\t\t    <runasrole>ADMINISTRATOR</runasrole>
\t\t    <executioncontext>USERINTERFACE</executioncontext>
\t\t    <recordtype>CUSTOMER</recordtype>
\t\t</scriptdeployment>
\t</scriptdeployments>
</clientscript>`)
    })

    test(`For MapReduce, at least one NVariable is required`, () => {
        const w = new ScriptObject(`@NScriptType MapReduceScript\n@NDeploy\n@NName Some Map Reduce script\n@NDescription none\n@NApiVersion 2.1`, `mr_some_script`, `SuiteScripts/`)
        expect(w.correct).toEqual(false)
        expect(w.errors.indexOf(`For MapReduce scripts at least one NVariables must be specified`)).toBeGreaterThanOrEqual(0)

        const c = new ScriptObject(`@NScriptType MapReduceScript\n@NDeploy\n@NName Some Map Reduce script\n@NDescription none\n@NApiVersion 2.1\n@NVariables a, b`, `mr_some_script`, `SuiteScripts/`)
        expect(c.correct).toEqual(true)
        expect(c.mapReduceVariables.length).toEqual(2)
        expect(c.mapReduceVariables[0]).toEqual('a')
        expect(c.mapReduceVariables[1]).toEqual('b')
    })

    test(`MapReduce variable name length should not be more than 30 symbols`, () => {
        const w = new ScriptObject(`@NScriptType MapReduceScript\n@NDeploy\n@NName Some Map Reduce script\n@NDescription none\n@NApiVersion 2.1\n@NVariables a, some_variable_with_a_very_long_name_which_is_definitely_longer_than_thirty_symbols`, `mr_some_script`, `SuiteScripts/`)
        expect(w.correct).toEqual(false)
        expect(w.errors.indexOf(`Map Reduce variable "some_variable_with_a_very_long_name_which_is_definitely_longer_than_thirty_symbols" name is too long. Should not be longer than 30 symbols (currently 82)`)).toBeGreaterThanOrEqual(0)

    })
})