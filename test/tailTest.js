const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {

  it('returns [2,3] for [1,2,3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [\"meow\", \"food\"] for [\"cat\",\"meow\", \"food\"]", () => {
    assert.deepEqual(tail(["cat", "meow", "food"]), ["meow", "food"]);
  });

  it('returns empty array if given array with one element', () => {
    assert.deepEqual(tail([1]), []);
  });

  it('returns empty array if given empty array', () => {
    assert.deepEqual(tail([]), []);
  });

  it('does not modify original array', () => {
    const numbers = [2, 3, 5, 6];
    tail(numbers);
    assert.deepEqual(numbers, [2, 3, 5, 6]);
  });

});
