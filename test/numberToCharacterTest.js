var assert = require("chai").assert;

describe("converts numbers to letters", () => {
  it("should convert 2", () => {
    var two = "2";

    assert.deepEqual(numberToLetters(two), ["a", "b", "c"]);
  });

  it("should convert 3", () => {
    var three = "3";

    assert.deepEqual(numberToLetters(three), ["d", "e", "f"]);
  });

  it("should convert 4", () => {
    var four = "4";

    assert.deepEqual(numberToLetters(four), ["g", "h", "i"]);
  });

  it("should convert 5", () => {
    var five = "5";

    assert.deepEqual(numberToLetters(five), ["j", "k", "l"]);
  });

  it("should convert 6", () => {
    var six = "6";

    assert.deepEqual(numberToLetters(six), ["m", "n", "o"]);
  });

  it("should convert 7", () => {
    var seven = "7";

    assert.deepEqual(numberToLetters(seven), ["p", "q", "r", "s"]);
  });

  it("should convert 8", () => {
    var eight = "8";

    assert.deepEqual(numberToLetters(eight), ["t", "u", "v"]);
  });

  it("should convert 9", () => {
    var nine = "9";

    assert.deepEqual(numberToLetters(nine), ["w", "x", "y", "z"]);
  });
});

function numberToLetters(numberAsText) {
  return map[numberAsText];
}

const map = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"]
};
