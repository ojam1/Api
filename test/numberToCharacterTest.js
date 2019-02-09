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
