const checkWord = require('check-word');
const words = checkWord('en');

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

const getAllWords = (req, res) => {
  const numberAsStringToConvert = req.body.numbers;
  let arrayOfLettersArray = [];

  for (let i = 0; i < numberAsStringToConvert.length; i++) {
    if (numberAsStringToConvert[i].match(/[2-9]/))
      arrayOfLettersArray.push(numberToLetters(numberAsStringToConvert[i]));
  }

  let wordsArray = combineAllElements(arrayOfLettersArray);

  const actualWordsArray = wordsArray.filter(word => words.check(word));

  res.send(actualWordsArray);
};

module.exports = {
  numberToLetters,
  combineAllElements,
  getAllWords
};
