// takes in an object and callback function
// scans object and return the first key for which the callback returns a truthy value
// if no key found, it should return undefined;
const findKey = function(object, callback) {
  for (const property in object) {
    let value = object[property];
    if (callback(value)) {
      return property;
    }
  }
};
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
// TEST CASE 1
const object1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};
assertEqual(findKey(object1, x => x.stars === 2), "noma");
// TEST CASE 2
const object2 = { "a": 1, "b": 2, "c": 3 };
assertEqual(findKey(object2, x => x === 1), "a");
// TEST CASE 3
assertEqual(findKey(object1, x => x.stars === 4), undefined);