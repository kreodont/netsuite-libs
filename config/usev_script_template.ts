/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 * @NDeploy Sales Order
 * @NDescription
 * @NName
 */

Do not forget to remove this file from usev_script_template.ts and set @NName and @NDescription

import {EntryPoints} from "N/types";
import {log} from "../netsuite-libs/Logger"

export function beforeLoad(context: EntryPoints.UserEvent.beforeLoadContext): void {
    log(`Before Load context: ${JSON.stringify(context)}`)
}

export function beforeSubmit(context: EntryPoints.UserEvent.beforeSubmitContext): void {
    log(`Before Submit context: ${JSON.stringify(context)}`)
}

export function afterSubmit(context: EntryPoints.UserEvent.afterSubmitContext): void {
    log(`Before Submit context: ${JSON.stringify(context)}`)
}

