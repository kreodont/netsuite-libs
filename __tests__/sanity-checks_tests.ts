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