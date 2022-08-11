import assert, { AssertionError } from "assert";

export const isSorted =
  (arr: number[], funcName?: string) => (sorted: number[]) => {
    try {
      assert.deepStrictEqual(
        sorted,
        arr.sort((a, b) => a - b),
        `Function: ${funcName}`
      );
      return true;
    } catch (e) {
      const { actual, expected } = e as AssertionError;
      console.log({ actual, expected });
      return false;
    }
  };
