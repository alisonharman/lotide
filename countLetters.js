const countLetters = function(string) {
  const results = {};

  for (let char of string) {
    // only add key and values to results if not a space
    if (char !== " ") {
      if (results[char]) {
        results[char] += 1;
      } else {
        results[char] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;

/*
//TEST
const assertEqual = require('./assertEqual');
const result1 = countLetters('lighthouse in the house');
assertEqual(result1[" "], undefined);
assertEqual(result1["h"], 4);
assertEqual(result1["i"], 2);
*/