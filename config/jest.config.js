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
        '^N/log$': '<rootDir>/__mocks__/N_log.ts',
        '^N/query$': '<rootDir>/__mocks__/N_query.ts',
        '^N/url$': '<rootDir>/__mocks__/N_url.ts',
        '^N/email$': '<rootDir>/__mocks__/N_email.ts',
        '^N/file$': '<rootDir>/__mocks__/N_file.ts',
        '^N/runtime$': '<rootDir>/__mocks__/N_runtime.ts',
        '^N$': '<rootDir>/__mocks__/N.ts',
        "^N/ui/message$": "<rootDir>/__mocks__/N_ui_message.ts",
        "^N/ui/serverWidget$": "<rootDir>/__mocks__/N_ui_serverWidget.ts",
        '^N/currency$': '<rootDir>/__mocks__/N_currency.ts'
    }
};