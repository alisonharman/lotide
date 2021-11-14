const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

/*
// TEST CODE
const assertArraysEqual = require('./assertArraysEqual');
//TEST CODE #1
const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
//TEST CODE #2
const numbers = [1, 2, 3, 4, 10];
assertArraysEqual(map(numbers, num => num * 2), [2, 4, 6, 8, 20]);
// TEST CODE #3
// test that original array is not modified
const original = ["the", "word", "is", "true"];
map(original, word => word.charAt(word.length - 1));
assertArraysEqual(original, ["the", "word", "is", "true"]); // should be pass
*/


