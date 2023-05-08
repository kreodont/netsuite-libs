module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/__tests__/**/*.+(ts|tsx|js)'],
    moduleNameMapper: {
        '^N/log$': '<rootDir>/__mocks__/N_log.ts',
        '^N/query$': '<rootDir>/__mocks__/N_query.ts',
        '^N/url$': '<rootDir>/__mocks__/N_url.ts',
        '^N/email$': '<rootDir>/__mocks__/N_email.ts',
        '^N/file': '<rootDir>/__mocks__/N_file.ts',
        '^N$': '<rootDir>/__mocks__/N.ts',
    }
};