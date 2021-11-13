const assertArraysEqual = require('./assertArraysEqual');

// takes in a string and returns an object that gives all the idices in the string where each character is found
const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence.charAt(i);
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};
module.exports = letterPositions;

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);