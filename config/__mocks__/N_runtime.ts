const runtime = {
    getCurrentScript: jest.fn().mockReturnValue({ id: "customscript_mock" }),
};

export = runtime;