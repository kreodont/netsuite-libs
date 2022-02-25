import { EntryPoints } from 'N/types';
import { KitTemplate } from './StepsRunner';

export type ScriptContext =
    | EntryPoints.Scheduled.executeContext
    | EntryPoints.WorkflowAction.onActionContext
    | EntryPoints.RESTlet.get
    | EntryPoints.RESTlet.post
    | EntryPoints.RESTlet.put
    | EntryPoints.RESTlet.delete_
    | EntryPoints.MassUpdate.eachContext
    | EntryPoints.MapReduce.mapContext
    | EntryPoints.MapReduce.reduceContext
    | EntryPoints.MapReduce.summarizeContext
    | EntryPoints.MapReduce.getInputDataContext
    | EntryPoints.Suitelet.onRequestContext
    | EntryPoints.UserEvent.beforeLoadContext
    | EntryPoints.UserEvent.beforeSubmitContext
    | EntryPoints.UserEvent.afterSubmitContext
    | EntryPoints.Client.pageInitContext
    | EntryPoints.Client.sublistChangedContext
    | EntryPoints.Client.fieldChangedContext
    | EntryPoints.Client.saveRecordContext
    | null;

export type EntryPoint =
    | 'beforeLoad'
    | 'beforeSubmit'
    | 'afterSubmit'
    | 'onRequest'
    | 'saveRecord'
    | 'pageInit'
    | 'fieldChanged'
    | 'sublistChanged'
    | 'map'
    | 'reduce'
    | 'summarize'
    | 'getInputData'
    | 'each'
    | 'GET'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'execute'
    | 'onAction';

export type ScriptFunction = {
    function: (kit: KitTemplate) => KitTemplate;
    description?: string;
    logEntry: string;
};

export type TypeForAsMap = { [p: string]: string | boolean | number | null }[];
