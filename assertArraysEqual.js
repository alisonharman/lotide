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
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, '3']); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2, -3]); // => should FAIL
assertArraysEqual(['dog', 'boot', 'chew'], ['dog', 'boot', 'chew']); // => should PASS
