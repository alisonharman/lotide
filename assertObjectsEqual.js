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
// objects are equal if they have the same number of keys
// also: if value in corresponding keys is the same value as the other key
const eqObjects = function(object1, object2) {
  const keysFirstObject = Object.keys(object1);
  const keysSecondObject = Object.keys(object2);

  if (keysFirstObject.length !== keysSecondObject.length) {
    return false;
  }
  for (let i = 0; i < keysFirstObject.length; i++) {
    const value1 = object1[keysFirstObject[i]];
    const value2 = object2[keysFirstObject[i]];

    // need conditional to eval if the values are both arrays and apply special function to see if they are equal
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
      // else values are primitives and conditional with !== operator
    } else {
      if (value1 !== value2) {
        return false;
      }
    }
  }
  return true;
  //assertEqual(object1, object2)
};
const assertObjectsEqual = function(actual, expected) {
  let areEqual = false; // initializing boolean
  const inspect = require('util').inspect;
  areEqual = eqObjects(actual, expected);
  if (areEqual) {
    console.log(`👍👍👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
// TEST
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // --> TRUE

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // --> FALSE

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true
assertObjectsEqual(cd, dc); // --> TRUE

const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false
assertObjectsEqual(cd, cd2); // --> FALSE