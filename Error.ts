export interface Error {
    details: string
    stop?: boolean
    notify?: boolean
    throwException?: boolean

    severity?: `ERROR` | `DEBUG`
}