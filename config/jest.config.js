module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    // Tell Jest to look for tests only in the current directory
    roots: ['<rootDir>'],
    // Only run test files, not random JS files
    testMatch: ['**/__tests__/**/*.ts'],
    // Prefer .ts files over .js files
    extensionsToTreatAsEsm: ['.ts'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transform: {
        // Use ts-jest for TypeScript files with inline config
        '^.+\\.ts$': ['ts-jest', {
            tsconfig: {
                rootDir: '.',
                baseUrl: '.',
                module: 'commonjs',
                esModuleInterop: true
            }
        }],
        // Use babel-jest for JavaScript files
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
        'node_modules/(?!ts-serializable)',
    ],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
        '^N/log$': '<rootDir>/__mocks__/N_log.ts',
        '^N/query$': '<rootDir>/__mocks__/N_query.ts',
        '^N/url$': '<rootDir>/__mocks__/N_url.ts',
        '^N/email$': '<rootDir>/__mocks__/N_email.ts',
        '^N/file$': '<rootDir>/__mocks__/N_file.ts',
        '^N/runtime$': '<rootDir>/__mocks__/N_runtime.ts',
        '^N$': '<rootDir>/__mocks__/N.ts',
        '^N/ui/message$': '<rootDir>/__mocks__/N_ui_message.ts',
        '^N/ui/serverWidget$': '<rootDir>/__mocks__/N_ui_serverWidget.ts',
        '^N/currency$': '<rootDir>/__mocks__/N_currency.ts'
    }
};