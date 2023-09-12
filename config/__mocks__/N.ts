// Mock N/log
const log = {
    debug: jest.fn(),
    error: jest.fn(),
    audit: jest.fn(),
    emergency: jest.fn(),
};

// Mock N/query
const query = {
    create: jest.fn(),
    run: jest.fn(),
    runPaged: jest.fn(),
};

// Mock N/url
const url = {
    resolveScript: jest.fn(),
    resolveTaskLink: jest.fn(),
    resolveRecord: jest.fn(),
    resolveDomain: jest.fn(),
};

// Mock N/email
const email = {
    send: jest.fn(),
    sendBulk: jest.fn(),
    create: jest.fn(),
};

// Mock N/runtime
const runtime = {
    // Add any required methods or properties of the N/runtime module
};

const record = {
    // Add any required methods or properties of the N/record module
    load: jest.fn().mockReturnValue('test'),
    Type: {}
};

export { log, query, url, email, runtime, record };