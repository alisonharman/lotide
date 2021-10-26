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
// outputs middle values of an array
// if array has even number of elements, then output should be the two middle
// if array has odd number of elements, then output should be one value in the middle
// HOWEVER, if array has one or two elements then ouput empty array
const middle = function(array) {
  const returnedArray = [];
  if (array.length <= 2) {
    return returnedArray;
  }
  if (array.length % 2 === 0) {
    // array is even length
    const middleIndex = array.length / 2;
    returnedArray.push(array[middleIndex - 1]);
    returnedArray.push(array[middleIndex]);
  } else {
    // array should be odd
    const middleIndex = Math.trunc(array.length / 2);
    returnedArray.push(array[middleIndex]);
  }
  return returnedArray;
};
// TEST CODE
assertArraysEqual(middle([1]), [1]); // SHOULD FAIL
assertArraysEqual(middle([1, 2]), []); // SHOULD PASS
assertArraysEqual(middle([1, 2, 3]), [2]); // SHOULD PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); // SHOULD PASS
