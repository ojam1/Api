const numberToLetters = number => {
  return mapForNumbersToLetters[number] ? mapForNumbersToLetters[number] : "";
};

const combineAllElements = (...arrays) => {
  return arrays[0].reduce((accumulator, currentValue) => {
    let newArray = [];
    accumulator.map(elementToCombine => {
      currentValue.map(otherElementToCombine => {
        newArray.push(elementToCombine + otherElementToCombine);
      });
    });
    return newArray;
  });
};

const mapForNumbersToLetters = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"]
};

const get_all_words = (req, res) => {
  const numberAsStringToConvert = req.body.numbers;
  var arrayOfLettersArray = [];

  for (var i = 0; i < numberAsStringToConvert.length; i++) {
    if (numberAsStringToConvert[i].match(/[2-9]/))
      arrayOfLettersArray.push(numberToLetters(numberAsStringToConvert[i]));
  }

  var wordsArray = combineAllElements(arrayOfLettersArray);

  res.send(wordsArray);
};

module.exports = {
  numberToLetters,
  combineAllElements,
  get_all_words
};
