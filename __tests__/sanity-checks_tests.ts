import {sanityChecks} from '../config/delivery_functions';

test(`Each script file must have at least one empty line after header`, () => {
    const scriptFiles: {[name: string]: string} = {
        'wrong.ts': `/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 * @NDeploy Customer Payment
 * @NDescription Every time new payment is created, we send a message to Slack channel @collections
 * @NName Cash bot
 */
import {EntryPoints} from "N/types";
import {log} from "netsuite-libs/Logger";
import {fetchOneValue, formatAsCurrency, getDifferentParameterByIDS, getSqlResultAsMap} from "./netsuite-libs/Helpers";
import {runtime} from "N";
import {https} from "N";`,


        'correct.ts': `/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 * @NDeploy Customer Payment
 * @NDescription Every time new payment is created, we send a message to Slack channel @collections
 * @NName Cash bot
 */

import {EntryPoints} from "N/types";
import {log} from "netsuite-libs/Logger";
import {fetchOneValue, formatAsCurrency, getDifferentParameterByIDS, getSqlResultAsMap} from "./netsuite-libs/Helpers";
import {runtime} from "N";
import {https} from "N";`,
    }
    const correctManifest = `<manifest projecttype="ACCOUNTCUSTOMIZATION">
<projectname>TestProject</projectname>
<frameworkversion>1.0</frameworkversion>
<dependencies>
<features>
<feature required="true">SERVERSIDESCRIPTING</feature>
</features>
</dependencies>
</manifest>`

    const errors = sanityChecks(scriptFiles, correctManifest);
    expect(errors).toEqual([`There must be at least 1 empty line after the header in file "wrong.ts"`]);
    delete scriptFiles['wrong.ts'];
    expect(sanityChecks(scriptFiles, correctManifest)).toEqual([]);
});

test(`User event script should not use Record.getText (etc.) function in context.UserEventType.CREATE mode`, () => {
    const scriptFiles: {[name: string]: string} = {
        'wrong_ue_script.ts': `/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 * @NDeploy customer
 * @NName Test RecordText functions
 * @NDescription Script to check RecordText functions in Create mode
 */

import {EntryPoints} from "N/types";


export function beforeSubmit(context: EntryPoints.UserEvent.beforeSubmitContext): void {

    const customerRecord = context.newRecord;
    customerRecord.setText({fieldId: 'referrer', text: 'Test text please ignore'})

}`,

        'correct_ue_script.ts': `/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 * @NDeploy customer
 * @NName Test RecordText functions
 * @NDescription Script to check RecordText functions in Create mode
 */

import {EntryPoints} from "N/types";


export function beforeSubmit(context: EntryPoints.UserEvent.beforeSubmitContext): void {
    if (context.type === context.UserEventType.CREATE) {
        return;
    }

    const customerRecord = context.newRecord;
    customerRecord.setText({fieldId: 'referrer', text: 'Test text please ignore'})

}`,

        'ue_script_without_text_functions.ts': `/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 * @NDeploy customer
 * @NName Script without RecordText functions
 * @NDescription
 */

import {EntryPoints} from "N/types";
}`,

        'not_ue_script.ts': `/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 * @NName Some Client Script
 * @NDescription Some Description
 */


import {currentRecord} from "N";`,
    }
    const correctManifest = `<manifest projecttype="ACCOUNTCUSTOMIZATION">
<projectname>TestProject</projectname>
<frameworkversion>1.0</frameworkversion>
<dependencies>
<features>
<feature required="true">SERVERSIDESCRIPTING</feature>
</features>
</dependencies>
</manifest>`

    const errors = sanityChecks(scriptFiles, correctManifest);
    expect(errors).toEqual([`UserEvent script "wrong_ue_script.ts". Line 15. Record.setText function used in "CREATE" mode.\nHow to fix:\nAdd "if (context.type === context.UserEventType.CREATE) {return;}" code to the beginning of the script.\n`]);
    delete scriptFiles['wrong_ue_script.ts'];
    expect(sanityChecks(scriptFiles, correctManifest)).toEqual([]);
});

test(`Manifest for server scripts (MapReduce, UserEvent, Scheduled, Suitelet) must contain '<feature required="true">SERVERSIDESCRIPTING</feature>' string`, () => {
    const scriptFiles: {[name: string]: string} = {
        'ue_script.ts': `/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 * @NDeploy Customer Payment
 * @NDescription Every time new payment is created, we send a message to Slack channel @collections
 * @NName Cash bot
 */

import {EntryPoints} from "N/types";
import {log} from "netsuite-libs/Logger";
import {fetchOneValue, formatAsCurrency, getDifferentParameterByIDS, getSqlResultAsMap} from "./netsuite-libs/Helpers";
import {runtime} from "N";
import {https} from "N";`,

        'mr_script.ts': `/**
 * @NApiVersion 2.1
 * @NScriptType MapReduceScript
 * @NModuleScope SameAccount
 * @NDeploy
 * @NName Map Reduce To Run several commands
 * @NDescription Parses commands and runs them
 */

import { EntryPoints } from "N/types";
import {log} from "../netsuite-libs/Logger";
        `,

        'st_script.ts': `/**
* @NApiVersion 2.1
* @NScriptType Suitelet
* @NModuleScope SameAccount
* @NDeploy
* @NName Run input commands Suitelet
* @NDescription Parse and run one or several commands
*/


import {EntryPoints} from "N/types";
import {Method} from "N/http";
        `,

        'sch_script.ts': `/**
*@NApiVersion 2.1
*@NScriptType ScheduledScript
* @NModuleScope SameAccount
* @NDeploy
* @NName Some name
* @NDescription Some description
*/


import {EntryPoints} from "N/types";
import {Method} from "N/http";
        `,
    }
    const wrongManifest = `<manifest projecttype="ACCOUNTCUSTOMIZATION">
<projectname>TestProject</projectname>
<frameworkversion>1.0</frameworkversion>
<dependencies>
<features>
</features>
</dependencies>
</manifest>`
    const correctManifest = `<manifest projecttype="ACCOUNTCUSTOMIZATION">
<projectname>TestProject</projectname>
<frameworkversion>1.0</frameworkversion>
<dependencies>
<features>
<feature required="true">SERVERSIDESCRIPTING</feature>
</features>
</dependencies>
</manifest>`

    const errors = sanityChecks(scriptFiles, wrongManifest);
    expect(errors).toEqual([
        `For script "ue_script.ts" ./src/manifest.xml should contain "SERVERSIDESCRIPTING"`,
        `For script "mr_script.ts" ./src/manifest.xml should contain "SERVERSIDESCRIPTING"`,
        `For script "st_script.ts" ./src/manifest.xml should contain "SERVERSIDESCRIPTING"`,
        `For script "sch_script.ts" ./src/manifest.xml should contain "SERVERSIDESCRIPTING"`,
    ]);
    expect(sanityChecks(scriptFiles, correctManifest)).toEqual([]);
});

test(`Script's name should not be longer than 40 symbols`, () => {
    const scriptFiles: {[name: string]: string} = {
        'wrong.ts': `/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 * @NDeploy Customer Payment
 * @NDescription Every time new payment is created, we send a message to Slack channel @collections
 * @NName This is wrong and pretty long script's name
 */

import {EntryPoints} from "N/types";
import {log} from "netsuite-libs/Logger";
import {fetchOneValue, formatAsCurrency, getDifferentParameterByIDS, getSqlResultAsMap} from "./netsuite-libs/Helpers";
import {runtime} from "N";
import {https} from "N";`,

        'correct.ts': `/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 * @NDeploy Customer Payment
 * @NDescription Every time new payment is created, we send a message to Slack channel @collections
 * @NName Short name
 */

import {EntryPoints} from "N/types";
import {log} from "netsuite-libs/Logger";
import {fetchOneValue, formatAsCurrency, getDifferentParameterByIDS, getSqlResultAsMap} from "./netsuite-libs/Helpers";
import {runtime} from "N";
import {https} from "N";`,

        'ExampleModule.ts': `
import {} from "N/ui/serverWidget";
import {EntryPoints} from "N/types";
import {log} from "../netsuite-libs/Logger";
import {fetchOneValue, formatAsCurrency, getDifferentParameterByIDS, getSqlResultAsMap} from "../netsuite-libs/Helpers";
import {runtime, https} from "N";`,
    }
    const correctManifest = `<manifest projecttype="ACCOUNTCUSTOMIZATION">
<projectname>TestProject</projectname>
<frameworkversion>1.0</frameworkversion>
<dependencies>
<features>
<feature required="true">SERVERSIDESCRIPTING</feature>
</features>
</dependencies>
</manifest>`

    const errors = sanityChecks(scriptFiles, correctManifest);
    expect(errors).toEqual([`File "wrong.ts". Script's name @NName "This is wrong and pretty long script's name" is longer than 40 symbols`]);
    delete scriptFiles['wrong.ts'];
    expect(sanityChecks(scriptFiles, correctManifest)).toEqual([]);
});

test(`Client scripts should not use improper imports`, () => {
    const scriptFiles: {[name: string]: string} = {

        'ExampleModule.ts': `
import {} from "N/ui/serverWidget";
import {EntryPoints} from "N/types";
import {log} from "../netsuite-libs/Logger";
import {fetchOneValue, formatAsCurrency, getDifferentParameterByIDS, getSqlResultAsMap} from "../netsuite-libs/Helpers";
import {runtime, https} from "N";`,

        'wrong_client_script_1.ts': `/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 * @NName Run input commands client script
 * @NDescription This client script imports 'N/ui/serverWidget'
 */


import {currentRecord} from "N";
import {} from "N/ui/serverWidget";`,

        'wrong_client_script_2.ts': `/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 * @NName Run input commands client script
 * @NDescription This client script imports ExampleModule from ExampleModule.ts, 'N/ui/serverWidget' imported there
 */


import {currentRecord} from "N";
import ExampleModule from "./ExampleModule";`,

        'correct_client_script_2.ts': `/**
 * @NApiVersion 2.1
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 * @NName Run input commands client script
 * @NDescription This script doesn't import 'N/ui/serverWidget'
 */


import {currentRecord} from "N";`,

        'ue_script.ts': `/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 * @NDeploy Customer Payment
 * @NDescription This UE script uses 'N/ui/serverWidget'
 * @NName Cash bot
 */

import {EntryPoints} from "N/types";
import {log} from "../netsuite-libs/Logger";
import {fetchOneValue, formatAsCurrency, getDifferentParameterByIDS, getSqlResultAsMap} from "../netsuite-libs/Helpers";
import {runtime} from "N";
import {} from "N/ui/serverWidget";`,
    }
    const correctManifest = `<manifest projecttype="ACCOUNTCUSTOMIZATION">
<projectname>TestProject</projectname>
<frameworkversion>1.0</frameworkversion>
<dependencies>
<features>
<feature required="true">SERVERSIDESCRIPTING</feature>
</features>
</dependencies>
</manifest>`

    const errors = sanityChecks(scriptFiles, correctManifest);
    expect(errors).toEqual([
        `Script "wrong_client_script_1.ts" uses prohibited module: "N/ui/serverWidget". Related script file: wrong_client_script_1.ts`,
        `Script "wrong_client_script_2.ts" uses prohibited module: "N/ui/serverWidget". Related script file: ExampleModule.ts`,
    ]);
    delete scriptFiles['wrong_client_script_1.ts'];
    delete scriptFiles['wrong_client_script_2.ts'];
    expect(sanityChecks(scriptFiles, correctManifest)).toEqual([]);
});

test(`Amount of 'createDebugLogger()' with 'writeToFile' option should be less or equal to 'flushLogs()' in the code`, () => {
    const scriptFiles: {[name: string]: string} = {
        'wrong.ts': `/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 * @NDeploy Customer Payment
 * @NDescription Every time new payment is created, we send a message to Slack channel @collections
 * @NName Cash bot
 */
 
import {EntryPoints} from "N/types";
import {log} from "netsuite-libs/Logger";

export function onRequest(context: EntryPoints.Suitelet.onRequestContext) {
    const log = createDebugLogger({header: '', writeToFile: true});
    ...
    some code
    ...
    const log2 = createDebugLogger({
                    header: '',
                    writeToFile: true
    });
    ...
    createDebugLogger();
    ...
    const log3 = createDebugLogger({header: '', writeToFile: true});
   
`,


        'correct_1.ts': `/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 * @NDeploy Customer Payment
 * @NDescription Every time new payment is created, we send a message to Slack channel @collections
 * @NName Cash bot
 */

import {EntryPoints} from "N/types";
import {log} from "netsuite-libs/Logger";

export function onRequest(context: EntryPoints.Suitelet.onRequestContext) {
    const log = createDebugLogger({header: '', writeToFile: true});
    ...
    flushLogs();`,

        'correct_2.ts': `/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 * @NDeploy Customer Payment
 * @NDescription Every time new payment is created, we send a message to Slack channel @collections
 * @NName Cash bot
 */

import {EntryPoints} from "N/types";
import {log} from "netsuite-libs/Logger";

export function onRequest(context: EntryPoints.Suitelet.onRequestContext) {
    const log = createDebugLogger({header: '', writeToFile: true});
    ...
    flushLogs();
    ...
    some code
    ...
    flushLogs();`,

        'without_1.ts': `/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 * @NDeploy Customer Payment
 * @NDescription Every time new payment is created, we send a message to Slack channel @collections
 * @NName Cash bot
 */

import {EntryPoints} from "N/types";
import {log} from "netsuite-libs/Logger";
`,
        'without_2.ts': `/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 * @NDeploy Customer Payment
 * @NDescription Every time new payment is created, we send a message to Slack channel @collections
 * @NName Cash bot
 */

import {EntryPoints} from "N/types";
import {log} from "netsuite-libs/Logger";

function foo() {
    createDebugLogger();
    const boo = someFunction({writeToFile: true});
}
`,
    }
    const correctManifest = `<manifest projecttype="ACCOUNTCUSTOMIZATION">
<projectname>TestProject</projectname>
<frameworkversion>1.0</frameworkversion>
<dependencies>
<features>
<feature required="true">SERVERSIDESCRIPTING</feature>
</features>
</dependencies>
</manifest>`

    const errors = sanityChecks(scriptFiles, correctManifest);
    expect(errors).toEqual([`File "wrong.ts". Amount of 'createDebugLogger()' with 'writeToFile' option - (3) is greater than 'flushLogs()' - (0) in the code`]);
    delete scriptFiles['wrong.ts'];
    expect(sanityChecks(scriptFiles, correctManifest)).toEqual([]);
});

test(`Manifest file should contain object tags for each custom object in the script`, () => {
    const scriptFiles: {[name: string]: string} = {
        'script.ts': `/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 * @NDeploy Customer Payment
 * @NDescription Every time new payment is created, we send a message to Slack channel @collections
 * @NName Cash bot
 */

import {EntryPoints} from "N/types";
import {log} from "netsuite-libs/Logger";
import {fetchOneValue, formatAsCurrency, getDifferentParameterByIDS, getSqlResultAsMap} from "./netsuite-libs/Helpers";
import {runtime} from "N";
import {https} from "N";

const customer: CustomerInNetsuite = existingCustomers.length > 0 ? existingCustomers[0] : {
            socialSecurityNumber: {
                value: String(r.custentity_social_security_number),
                name: \`Social Security Number Encrypted\`,
                fieldId: \`custentity_social_security_number\`
            },
            isperson: {
                value: Boolean(r.isperson),
                name: \`Company\`,
                fieldId: \`isperson\`
            },
            firstname: {
                value: String(r.firstname),
                name: \`Name\`,
                fieldId: \`firstname\`
            },
            lastname: {
                value: String(r.lastname),
                name: \`\`,
                fieldId: \`lastname\`
            },
            custentity_home_owner_primary_email: {
                value: String(r.custentity_home_owner_primary_email),
                name: \`Homeowner Phone\`,
                fieldId: \`custentity_home_owner_primary_email\`
            },
            custentity_home_owner_phone: {
                value: String(r.custentity_home_owner_phone),
                name: \`Homeowner Phone\`,
                fieldId: \`custentity_home_owner_phone\`
            }
        };`,
    }
    const incompleteManifest = `
<manifest projecttype="ACCOUNTCUSTOMIZATION">
<projectname>TestProject</projectname>
<frameworkversion>1.0</frameworkversion>
<dependencies>
<features>
<feature required="true">SERVERSIDESCRIPTING</feature>
</features>
<objects>
<object>custentity_home_owner_phone</object>
</objects>
</dependencies>
</manifest>`;

    expect(sanityChecks(scriptFiles, incompleteManifest)).toEqual([
        `File \"script.ts\". Custom objects were used (custentity_social_security_number,custentity_home_owner_primary_email,custentity_home_owner_phone) in the code but not included in manifest.xml.
Correct manifest.xml should look the following way:

<manifest projecttype=\"ACCOUNTCUSTOMIZATION\">
<projectname>TestProject</projectname>
<frameworkversion>1.0</frameworkversion>
<dependencies>
<features>
<feature required=\"true\">SERVERSIDESCRIPTING</feature>
</features>
<objects>
<object>custentity_social_security_number</object>
<object>custentity_home_owner_primary_email</object>
<object>custentity_home_owner_phone</object>
</objects>
</dependencies>
</manifest>`,
    ]);

    const manifestWithoutObjects = `
<manifest projecttype="ACCOUNTCUSTOMIZATION">
<projectname>TestProject</projectname>
<frameworkversion>1.0</frameworkversion>
<dependencies>
<features>
<feature required="true">SERVERSIDESCRIPTING</feature>
</features>
</dependencies>
</manifest>`

    expect(sanityChecks(scriptFiles, manifestWithoutObjects)).toEqual([
        `File \"script.ts\". Custom objects were used (custentity_social_security_number,custentity_home_owner_primary_email,custentity_home_owner_phone) in the code but not included in manifest.xml.
Correct manifest.xml should look the following way:

<manifest projecttype=\"ACCOUNTCUSTOMIZATION\">
<projectname>TestProject</projectname>
<frameworkversion>1.0</frameworkversion>
<dependencies>
<features>
<feature required=\"true\">SERVERSIDESCRIPTING</feature>
</features>
<objects>
<object>custentity_social_security_number</object>
<object>custentity_home_owner_primary_email</object>
<object>custentity_home_owner_phone</object>
</objects>
</dependencies>
</manifest>`,
    ]);
});

test(`When manifest file contains all custom objects there must be no errors`, () => {
    const scriptFiles: {[name: string]: string} = {
        'script.ts': `import {LineItem} from "./LineItem";
import {EntryPoints} from "N/types";

export interface SalesOrder {
    id: number;
    name: string;
    status: string;
    lineItems: LineItem[];
}

export function buildSalesOrderFromScriptContext(context: EntryPoints.UserEvent.beforeLoadContext): SalesOrder {
    const salesOrder: SalesOrder = {
        id: Number(context.newRecord.id),
        name: context.newRecord.getValue({fieldId: \`tranid\`}) as string,
        status: context.newRecord.getValue({fieldId: \`status\`}) as string,
        lineItems: [],
    };

    for (let i = 0; i < context.newRecord.getLineCount({sublistId: \`item\`}); i++) {
        const itemId = context.newRecord.getSublistValue({
            sublistId: \`item\`,
            fieldId: \`item\`,
            line: i,
        }) as number;
        const itemName = context.newRecord.getSublistText({ // can use getSublistText since we always work in VIEW mode
            sublistId: \`item\`,
            fieldId: \`item\`,
            line: i,
        });
        const billingScheduleId = context.newRecord.getSublistValue({
            sublistId: \`item\`,
            fieldId: \`billingschedule\`,
            line: i,
        });
        const billingScheduleName = context.newRecord.getSublistText({ // can use getSublistText since we always work in VIEW mode
            sublistId: \`item\`,
            fieldId: \`billingschedule\`,
            line: i,
        });
        salesOrder.lineItems.push({
            id: context.newRecord.getSublistValue({fieldId: \`lineuniquekey\`, sublistId: \`item\`, line: i}) as number,
            lineNumberStartingFrom0: i,
            itemId: itemId,
            itemName: itemName,
            billingSchedule: billingScheduleId ? {
                id: Number(billingScheduleId),
                name: billingScheduleName,
                isPublic: !billingScheduleName.startsWith(\`CT\`)
            } : null,
            quantityBilled: Number(context.newRecord.getSublistValue({
                sublistId: \`item\`,
                fieldId: \`quantitybilled\`,
                line: i,
            })),
            quantity: Number(context.newRecord.getSublistValue({
                sublistId: \`item\`,
                fieldId: \`quantity\`,
                line: i,
            })),
            amount: Number(context.newRecord.getSublistValue({
                sublistId: \`item\`,
                fieldId: \`amount\`,
                line: i,
            })),
            isProprietaryHardware: context.newRecord.getSublistValue({
                sublistId: \`item\`,
                fieldId: \`custcol_proprietaryhardware\`,
                line: i,
            }) as boolean,
            isClosed: context.newRecord.getSublistValue({
                sublistId: \`item\`,
                fieldId: \`isclosed\`,
                line: i,
            }) as boolean
        });
    }

    return salesOrder;
}`}
    const correctManifest = `<manifest projecttype="ACCOUNTCUSTOMIZATION">
  <projectname>Cotermination2</projectname>
  <frameworkversion>1.0</frameworkversion>
  <dependencies>
    <features>
      <feature required="true">SERVERSIDESCRIPTING</feature>
    </features>
    <objects>
      <object>custcol_proprietaryhardware</object>
    </objects>
  </dependencies>
</manifest>`
    expect(sanityChecks(scriptFiles, correctManifest)).toEqual([]);
})

test(`Another test for flush logs`, () => {
    const scriptFiles = {"ue_coterm_button.ts": '/**\n' +
            ' * @NApiVersion 2.1\n' +
            ' * @NScriptType UserEventScript\n' +
            ' * @NModuleScope SameAccount\n' +
            ' * @NName Cotermination Button\n' +
            ' * @NDeploy Sales Order, Customer\n' +
            ' * @NDescription Detects if we need to show the cotermination button on the sales order or customer record\n' +
            ' */\n' +
            '\n' +
            'import {EntryPoints} from "N/types";\n' +
            'import {createDebugLogger} from "../netsuite-libs/Logger";\n' +
            'import {buildSalesOrderFromScriptContext} from "./SalesOrder";\n' +
            '\n' +
            'export function beforeLoad(context: EntryPoints.UserEvent.beforeLoadContext): void {\n' +
            '    if (context.type !== context.UserEventType.VIEW) {\n' +
            '        // Works only in View Context\n' +
            '        return;\n' +
            '    }\n' +
            '    const log = createDebugLogger({header: `${context.newRecord.getValue({fieldId: `tranid`})}`, writeToFile: true});\n' +
            '    const salesOrder = buildSalesOrderFromScriptContext(context);\n' +
            '    log(`Sales Order: ${JSON.stringify(salesOrder)}`);\n' +
            '}'};
    const correctManifest = `<manifest projecttype="ACCOUNTCUSTOMIZATION">
<projectname>TestProject</projectname>
<frameworkversion>1.0</frameworkversion>
<dependencies>
<features>
<feature required="true">SERVERSIDESCRIPTING</feature>
</features>
</dependencies>
</manifest>`
    const errors = sanityChecks(scriptFiles, correctManifest);
    expect(errors).toEqual([`File "ue_coterm_button.ts". Amount of 'createDebugLogger()' with 'writeToFile' option - (1) is greater than 'flushLogs()' - (0) in the code`]);
})
