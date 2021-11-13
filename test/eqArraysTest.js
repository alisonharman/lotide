const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
describe('#eqArrays', () => {
  it("returns true if comparing the same array", () => {
    const array = [1,2,3]
    assert.isTrue(eqArrays(array, array));
  });

  it("returns false if one value is a string versus the equivalent number", () => {
    const array1 = [1,2,3]
    const array2 = ["1",2,3]
    assert.isFalse(eqArrays(array1, array2));
  });

  it("returns false if one array has fewer elements", () => {
    const array1 = [1,2,3]
    const array2 = [1,2]
    assert.isFalse(eqArrays(array1, array2));
  });

  it("returns true if arrays are identical and contain different types of primitive values", () => {
    const array1 = [1,2,"doggy"]
    const array2 = [1,2,"doggy"]
    assert.isTrue(eqArrays(array1, array2));
  });

});

/*
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, -3]), true); // => should FAIL
assertEqual(eqArrays(['dog', 2, 3], ['dog', 2, 3]), true); // => should PASS
*/