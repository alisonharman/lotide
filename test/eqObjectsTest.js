const assert = require('chai').assert;
const eqObject = require('../eqObjects');

describe('#eqObjects', () => {
  it("returns true with two object with primitive value and reversed-order keys", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.isTrue(eqObject(ab, ba), 'ab = ba');
  });

  it("returns false with two object with primitive values and different combo of key-value pairs", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.isFalse(eqObject(ab, abc), 'ab != abc');
  });

  it("returns true with two object with values as array but same key-value pairs", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.isTrue(eqObject(cd, dc));
  });

  it("returns false with one object with primitive value and other with same value in an array", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: ["1"], d: ["2", 3] };
    assert.isFalse(eqObject(cd, cd2));
  });

  it("returns true when comparing the same object holding other objects", () => {
    const obj1 = { a: { z: 1 }, b: 2 };
    assert.isTrue(eqObject(obj1, obj1));
  });

  it("returns false with the two objects holding different objects", () => {
    const obj1 = { a: { y: 0, z: 1 }, b: 2 };
    const obj2 = { a: { z: 1 }, b: 2 };
    assert.isFalse(eqObject(obj1, obj2));
  });

  it("returns false with the one object holding an object as a value and the other hold primitive values", () => {
    const obj1 = { a: { y: 0, z: 1 }, b: 2 };
    const obj2 = { a: 1, b: 2 };
    assert.isFalse(eqObject(obj1, obj2));
  });


});


/*
//console.log(eqObjects(ab, ba)); // => true
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
//eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false);
*/