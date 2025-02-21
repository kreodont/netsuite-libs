module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    transformIgnorePatterns: [
        "node_modules/(?!ts-serializable)",
    ],
    moduleNameMapper: {
        '^N/log$': '<rootDir>/mocks/N_log.ts',
        '^N/query$': '<rootDir>/mocks/N_query.ts',
        '^N/url$': '<rootDir>/mocks/N_url.ts',
        '^N/email$': '<rootDir>/mocks/N_email.ts',
        '^N/file$': '<rootDir>/mocks/N_file.ts',
        '^N/runtime$': '<rootDir>/mocks/N_runtime.ts',
        '^N$': '<rootDir>/mocks/N.ts',
        "^N/ui/message$": "<rootDir>/mocks/N_ui_message.ts",
        "^N/ui/serverWidget$": "<rootDir>/mocks/N_ui_serverWidget.ts",
        '^N/currency$': '<rootDir>/mocks/N_currency.ts'
    }
};