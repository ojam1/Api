var assert = require("chai").assert;

describe("combines varying number of arrays", () => {
  it("combines two arrays both of length 3", () => {
    var array1 = ["a", "b", "c"];
    var array2 = ["d", "e", "f"];

    assert.deepEqual(combineAllElements(array1, array2), [
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

    assert.deepEqual(combineAllElements(array1, array2, array3), [
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

  it("combines 4 arrays with different lengths", () => {
    var array1 = ["m", "n", "o"];
    var array2 = ["p", "q", "r", "s"];
    var array3 = ["t", "u", "v"];
    var array4 = ["w", "x", "y", "z"];

    assert.deepEqual(combineAllElements(array1, array2, array3, array4), [
      "mptw",
      "mptx",
      "mpty",
      "mptz",
      "mpuw",
      "mpux",
      "mpuy",
      "mpuz",
      "mpvw",
      "mpvx",
      "mpvy",
      "mpvz",
      "mqtw",
      "mqtx",
      "mqty",
      "mqtz",
      "mquw",
      "mqux",
      "mquy",
      "mquz",
      "mqvw",
      "mqvx",
      "mqvy",
      "mqvz",
      "mrtw",
      "mrtx",
      "mrty",
      "mrtz",
      "mruw",
      "mrux",
      "mruy",
      "mruz",
      "mrvw",
      "mrvx",
      "mrvy",
      "mrvz",
      "mstw",
      "mstx",
      "msty",
      "mstz",
      "msuw",
      "msux",
      "msuy",
      "msuz",
      "msvw",
      "msvx",
      "msvy",
      "msvz",
      "nptw",
      "nptx",
      "npty",
      "nptz",
      "npuw",
      "npux",
      "npuy",
      "npuz",
      "npvw",
      "npvx",
      "npvy",
      "npvz",
      "nqtw",
      "nqtx",
      "nqty",
      "nqtz",
      "nquw",
      "nqux",
      "nquy",
      "nquz",
      "nqvw",
      "nqvx",
      "nqvy",
      "nqvz",
      "nrtw",
      "nrtx",
      "nrty",
      "nrtz",
      "nruw",
      "nrux",
      "nruy",
      "nruz",
      "nrvw",
      "nrvx",
      "nrvy",
      "nrvz",
      "nstw",
      "nstx",
      "nsty",
      "nstz",
      "nsuw",
      "nsux",
      "nsuy",
      "nsuz",
      "nsvw",
      "nsvx",
      "nsvy",
      "nsvz",
      "optw",
      "optx",
      "opty",
      "optz",
      "opuw",
      "opux",
      "opuy",
      "opuz",
      "opvw",
      "opvx",
      "opvy",
      "opvz",
      "oqtw",
      "oqtx",
      "oqty",
      "oqtz",
      "oquw",
      "oqux",
      "oquy",
      "oquz",
      "oqvw",
      "oqvx",
      "oqvy",
      "oqvz",
      "ortw",
      "ortx",
      "orty",
      "ortz",
      "oruw",
      "orux",
      "oruy",
      "oruz",
      "orvw",
      "orvx",
      "orvy",
      "orvz",
      "ostw",
      "ostx",
      "osty",
      "ostz",
      "osuw",
      "osux",
      "osuy",
      "osuz",
      "osvw",
      "osvx",
      "osvy",
      "osvz"
    ]);
  });
});

const combineAllElements = (...arrays) => {
  return arrays.reduce((accumulator, currentValue) => {
    let newArray = [];
    accumulator.map(elementToCombine => {
      currentValue.map(otherElementToCombine => {
        newArray.push(elementToCombine + otherElementToCombine);
      });
    });
    return newArray;
  });
};
