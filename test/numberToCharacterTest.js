const assert = require("chai").assert;
const numberToLetters = require('../api/controllers/controllers').numberToLetters;

describe("converts numbers to letters", () => {
  it("should convert 2", () => {
    const two = "2";

    assert.deepEqual(numberToLetters(two), ["a", "b", "c"]);
  });

  it("should convert 3", () => {
    const three = "3";

    assert.deepEqual(numberToLetters(three), ["d", "e", "f"]);
  });

  it("should convert 4", () => {
    const four = "4";

    assert.deepEqual(numberToLetters(four), ["g", "h", "i"]);
  });

  it("should convert 5", () => {
    const five = "5";

    assert.deepEqual(numberToLetters(five), ["j", "k", "l"]);
  });

  it("should convert 6", () => {
    const six = "6";

    assert.deepEqual(numberToLetters(six), ["m", "n", "o"]);
  });

  it("should convert 7", () => {
    const seven = "7";

    assert.deepEqual(numberToLetters(seven), ["p", "q", "r", "s"]);
  });

  it("should convert 8", () => {
    const eight = "8";

    assert.deepEqual(numberToLetters(eight), ["t", "u", "v"]);
  });

  it("should convert 9", () => {
    const nine = "9";

    assert.deepEqual(numberToLetters(nine), ["w", "x", "y", "z"]);
  });

  it("should not convert anything else", () => {
    const zero = "0";
    const one = "1";
    const somethingElse = "not a number";

    assert.deepEqual(numberToLetters(one), "");
    assert.deepEqual(numberToLetters(zero), "");
    assert.deepEqual(numberToLetters(somethingElse), "");
  });
});