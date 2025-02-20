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
    const errors = sanityChecks(scriptFiles, ``);
    expect(errors).toEqual([`There must be at least 1 empty line after the header in file "wrong.ts"`]);
    delete scriptFiles['wrong.ts'];
    expect(sanityChecks(scriptFiles, ``)).toEqual([]);
});

test(`User event script should not use Record.getText (etc.) function in context.UserEventType.CREATE mode`, () => {
    const scriptFiles: {[name: string]: string} = {
        'wrong.ts': `/**
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


        'correct.ts': `/**
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
    }
    const errors = sanityChecks(scriptFiles, ``);
    expect(errors).toEqual([`UserEvent script "wrong.ts" uses "Record.Text" functions in "context.UserEventType.CREATE" mode`]);
    delete scriptFiles['wrong.ts'];
    expect(sanityChecks(scriptFiles, ``)).toEqual([]);
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
        `Wrong manifest.xml found. For script "ue_script.ts" it should contain "<feature required="true">SERVERSIDESCRIPTING</feature>"`,
        `Wrong manifest.xml found. For script "mr_script.ts" it should contain "<feature required="true">SERVERSIDESCRIPTING</feature>"`,
        `Wrong manifest.xml found. For script "st_script.ts" it should contain "<feature required="true">SERVERSIDESCRIPTING</feature>"`,
        `Wrong manifest.xml found. For script "sch_script.ts" it should contain "<feature required="true">SERVERSIDESCRIPTING</feature>"`,
    ]);
    expect(sanityChecks(scriptFiles, correctManifest)).toEqual([]);
});