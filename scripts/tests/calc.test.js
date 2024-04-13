const addition = require("../calc")

describe("Calculator", () => {
    describe("Addition", () => {
        test("Should return 42 for 20 + 22", () => {
            expect(addition(20,22)).toBe(42);
        })
    })
})