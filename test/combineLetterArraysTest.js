const deepEqualInAnyOrder = require("deep-equal-in-any-order");
const chai = require("chai");

chai.use(deepEqualInAnyOrder);

const { expect } = chai;

describe("combines varying number of arrays", () => {
  it("combines two arrays both of length 3", () => {
    var array1 = ["a", "b", "c"];
    var array2 = ["d", "e", "f"];

    expect(combine(array1, array2)).to.deep.equalInAnyOrder([
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
});

const combine = (...arrays) => {
  var arr = arrays[0].map(element => element + arrays[1][0]);
  var arr2 = arrays[0].map(element => element + arrays[1][1]);
  var arr3 = arrays[0].map(element => element + arrays[1][2]);
  return arr.concat(arr2, arr3);
};
