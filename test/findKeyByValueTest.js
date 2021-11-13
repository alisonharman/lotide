const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  it("returns scienceFiction if given object {scienceFiction: The Expanse, drama: The Wire } and value The Expanse", () => {
    const object = {
      scienceFiction: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.strictEqual(findKeyByValue(object, "The Expanse"), "scienceFiction");
  });

  it("returns undefined if given object {scienceFiction: The Expanse, drama: The Wire } and value Ted Lasso", () => {
    const object = {
      scienceFiction: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.strictEqual(findKeyByValue(object, "Ted Lasso"), undefined);
  });

  it("returns romance if given object {romance: Clueless, action: Rambo, comedy: Clueless} and value Clueless", () => {
    const object = {
      romance: "Clueless",
      action: "Rambo",
      comedy: "Clueless",
    };
    assert.strictEqual(findKeyByValue(object, "Clueless"), "romance");
  });

  it("returns undefined if given array as first parameter", () => {
    const array = [1,2,3];
    assert.strictEqual(findKeyByValue(array, "Clueless"), undefined);
  });

  it("returns oranges if given object {apples: 5, oranges: 3 } and value 3", () => {
    const object = {
      apples: 5,
      oranges: 3,
    };
    assert.strictEqual(findKeyByValue(object, 3), "oranges");
  });
  

});
