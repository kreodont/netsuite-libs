# netsuite-libs
Several handy functions to speed up Netsuite development

This is for quick creation a TypeScript NetSuite project and ready-to-deploy using SDF from scratch

_Usage:_ 
1. Create a new SDF project ( suitecloud project:create -i )
2. Choose "Account Customization Project"
3. Enter any project name ("MyOwnNSProject" for example)
4. DO NOT include Jest testing framework (TypeScript tests are set up already)

**Logger.ts** provides function log() that can identify in which script context it's working and provide well formatted output
Usage:

`import {log} from 'netsuite-libs/Logger'
log('Something')`

**Helpers.ts** provides several functions which I find sometimes useful:

`parseDate(dateString: string, format: string): Date | null` - transforms date string into Date object

`chunks<T>(inputArray: Array<T>, chunkSize: number): Array<T>[]` - splits an Array to chunks (can be useful for SuiteQL query, since it's not allowed to specify more than 1000 ids in IN() operator)

`getSqlResultAsMap(sqlString: string, logs: string[]): {}[] | undefined` - launches SQL and return results as list of objects