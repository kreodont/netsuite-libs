describe("Basic test with simple assert", () => {
    it("should assert strings are equal", () => {
        const a = "foobar";
        const b = "foobar";
        expect(a).toMatch(b);
    });
});
