
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
// function to compare if two arrays are a perfect match
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(actual, expected) {
  let areEqual = false; // initializing boolean
  areEqual = eqArrays(actual, expected);
  if (areEqual) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
// TEST CODE
//const results1 = map(words, word => word[0]);
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


