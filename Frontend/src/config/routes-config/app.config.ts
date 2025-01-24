export type AppConfig = {
    authenticatedEntryPath: string
    baseEntryPath: string
    unAuthenticatedEntryPath: string
    authenticated:boolean
}

const appConfig: AppConfig = {
    authenticatedEntryPath: '/',
    baseEntryPath: '/',
    unAuthenticatedEntryPath: '/',
    authenticated:false
}

export default appConfig
