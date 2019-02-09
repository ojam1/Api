exports.get_all_words = (req, res) => {
    res.send(req.body);
};

exports.numberToLetters = (number) => {
  return mapForNumbersToLetters[number] ? mapForNumbersToLetters[number] : "";
}

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