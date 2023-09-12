export interface Error {
    details: string
    stop?: boolean
    notify?: boolean
    throwException?: boolean
    severity?: `ERROR` | `DEBUG`
}

export function errorWithoutExceptionButWithScriptOwnerNotification(details: string): Error {
    return {details: details, stop: true, notify: true, throwException: false, severity: `ERROR`};
}

export function errorWithException(details: string): Error {
    return {details: details, stop: true, notify: true, throwException: true, severity: `ERROR`};
}

