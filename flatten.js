// takes in array and flattens it so there are no nested array elements
// note: only assumes one level of nesting
// returns undefined if not an array
const flatten = function(array) {
  if (!Array.isArray(array)) {
    return;
  }
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
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

//TEST
console.log(flatten("string")); // should return undefined
assertArraysEqual((flatten([1, 2, [3, 4], 5, [6]])), [1, 2, 3, 4, 5, 6]); // should equal
assertArraysEqual((flatten(["pigs", ["ducks", "chickens"]])), ["pigs", "ducks", "sheep"]); //should not pass