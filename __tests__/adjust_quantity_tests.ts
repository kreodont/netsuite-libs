import { adjustQuantity } from "../Helpers"; // Copy to another module first, import from Helpers won't work

describe("Adjust quantity test", () => {
    test("Correctly split 2 lines", () => {
        const initialLines = [
            { lineNumber: 0, rate: 1000, quantity: 1, amount: 1000 },
            { lineNumber: 1, rate: 1000, quantity: 1, amount: 1000 },
        ];

        const resultLines = adjustQuantity(initialLines, 1000);
        const amount =
            Math.round(
                (resultLines[0].quantity * resultLines[0].rate +
                    resultLines[1].quantity * resultLines[1].rate) *
                    100000,
            ) / 100000;
        expect(amount).toBe(1000);
    });
    test("Correctly split 3 lines", () => {
        const initialLines = [
            { lineNumber: 0, rate: 1000, quantity: 1, amount: 1000 },
            { lineNumber: 1, rate: 1000, quantity: 1, amount: 1000 },
            { lineNumber: 2, rate: 1000, quantity: 1, amount: 1000 },
        ];
        const resultLines = adjustQuantity(initialLines, 1000);
        const amount =
            Math.round(
                (resultLines[0].quantity * resultLines[0].rate +
                    resultLines[1].quantity * resultLines[1].rate +
                    resultLines[2].quantity * resultLines[2].rate) *
                    100000,
            ) / 100000;
        expect(amount).toBe(1000);
    });
    test("Correctly split 3 lines with big numbers", () => {
        const initialLines = [
            { lineNumber: 0, rate: 100000000, quantity: 1, amount: 100000000 },
            { lineNumber: 1, rate: 100000000, quantity: 1, amount: 100000000 },
            { lineNumber: 2, rate: 100000000, quantity: 1, amount: 100000000 },
        ];
        const resultLines = adjustQuantity(initialLines, 100000000);
        const amount =
            Math.round(
                (resultLines[0].quantity * resultLines[0].rate +
                    resultLines[1].quantity * resultLines[1].rate +
                    resultLines[2].quantity * resultLines[2].rate) *
                    100000,
            ) / 100000;
        expect(amount).toBe(100000000);
    });
    test("Correctly split 3 lines with small numbers", () => {
        const initialLines = [
            { lineNumber: 0, rate: 1, quantity: 1, amount: 1 },
            { lineNumber: 1, rate: 1, quantity: 1, amount: 1 },
            { lineNumber: 2, rate: 1, quantity: 1, amount: 1 },
        ];
        const resultLines = adjustQuantity(initialLines, 1);
        const amount =
            Math.round(
                (resultLines[0].quantity * resultLines[0].rate +
                    resultLines[1].quantity * resultLines[1].rate +
                    resultLines[2].quantity * resultLines[2].rate) *
                    10000,
            ) / 10000;

        expect(amount).toBe(1);
    });
    test("Correctly split 3 lines with quantity < 1", () => {
        const initialLines = [
            { amount: 833.33, lineNumber: 0, quantity: 0.83333, rate: 1000 },
            { amount: 833.33, lineNumber: 1, quantity: 0.83333, rate: 1000 },
            { amount: 833.33, lineNumber: 2, quantity: 0.83333, rate: 1000 },
        ];
        const resultLines = adjustQuantity(initialLines, 2500);
        const amount =
            Math.round(
                (resultLines[0].quantity * resultLines[0].rate +
                    resultLines[1].quantity * resultLines[1].rate +
                    resultLines[2].quantity * resultLines[2].rate) *
                    100000,
            ) / 100000;

        expect(amount).toBe(2500);
    });
    test("from real case", () => {
        const initialLines = [
            { amount: 1000, lineNumber: 0, quantity: 1, rate: 1000 },
            { amount: 1000, lineNumber: 1, quantity: 1, rate: 1000 },
            { amount: 1000, lineNumber: 2, quantity: 1, rate: 1000 },
        ];
        const resultLines = adjustQuantity(initialLines, 500);
        const amount =
            Math.round(
                (resultLines[0].quantity * resultLines[0].rate +
                    resultLines[1].quantity * resultLines[1].rate +
                    resultLines[2].quantity * resultLines[2].rate) *
                    100000,
            ) / 100000;

        expect(amount).toBe(500);
    });
    test("when target is 100", () => {
        const initialLines = [
            { amount: 1000, lineNumber: 0, quantity: 1, rate: 1000 },
            { amount: 500, lineNumber: 1, quantity: 1, rate: 500 },
        ];
        const resultLines = adjustQuantity(initialLines, 100);
        const amount =
            Math.round(
                (resultLines[0].quantity * resultLines[0].rate +
                    resultLines[1].quantity * resultLines[1].rate) *
                    100000,
            ) / 100000;
        expect(amount).toBe(100);
    });
    test("owl-95", () => {
        const initialLines = [
            { amount: 1606.5, lineNumber: 0, quantity: 1, rate: 1606.5 },
            { amount: 6009.5, lineNumber: 1, quantity: 1, rate: 6009.5 },
        ];
        const resultLines = adjustQuantity(initialLines, 1000);

        expect(resultLines[0].quantity).toBe(0.13131);
        expect(resultLines[1].quantity).toBe(0.1313);
    });
});
