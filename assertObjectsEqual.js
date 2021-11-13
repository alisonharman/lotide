//const { assertEqual } = require('.');
const eqObjects = require('./eqObjects');

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

module.exports = assertObjectsEqual;

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