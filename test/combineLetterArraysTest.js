const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");

chai.use(deepEqualInAnyOrder);

const { expect } = chai;

describe("combines varying number of arrays", () => {
  it("combines two arrays both of length 3", () => {
    var array1 = ["a", "b", "c"];
    var array2 = ["d", "e", "f"];

    expect(combineAllElements(array1, array2)).to.deep.equalInAnyOrder([
      "ad",
      "ae",
      "af",
      "bd",
      "be",
      "bf",
      "cd",
      "ce",
      "cf"
    ]);
  });

  it("combines three arrays all of length 3", () => {
    var array1 = ["a", "b", "c"];
    var array2 = ["d", "e", "f"];
    var array3 = ["g", "h", "i"];

    expect(combineAllElements(array1, array2, array3)).to.deep.equalInAnyOrder([
      "adg",
      "adh",
      "adi",
      "aeg",
      "aeh",
      "aei",
      "afg",
      "afh",
      "afi",
      "bdg",
      "bdh",
      "bdi",
      "beg",
      "beh",
      "bei",
      "bfg",
      "bfh",
      "bfi",
      "cdg",
      "cdh",
      "cdi",
      "ceg",
      "ceh",
      "cei",
      "cfg",
      "cfh",
      "cfi"
    ]);
  });
});

const combineAllElements = (...arrays) => {
  return arrays.reduce((accumulator, currentValue) => {
    let newArray = [];
    accumulator.map(elementToCombine => {
      currentValue.map(otherElementToCombine => {
        newArray.push(elementToCombine + otherElementToCombine)
        });
      });
      return newArray;
   })
};
