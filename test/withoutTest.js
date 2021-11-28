const without = require('../without');
const assert = require('chai').assert;

describe("#without", () => {

  it('returns [2,3] for source =[1,2,3,3,1,2] and itemToRemove = [1, "2"]', () => {
    assert.deepEqual(without([1, 2, 3, 3, 1, 2], [1, "2"]), [2, 3, 3, 2]);
  });

  it("returns [\"a\", \"b\"] for source = [\"a\",\"b\", \"c\"] and items to remove = [\"c\"]", () => {
    assert.deepEqual(without(["a", "b", "c"], ["c"]), ["a", "b"]);
  });

  it('returns empty array if all itemsToRemove match source array', () => {
    const source = [1, 2];
    const itemsToRemove = [1, 2];
    assert.deepEqual(without(source, itemsToRemove), []);
  });

  it('returns undefined if input items are not arrays', () => {
    assert.deepEqual(without(1, 2), undefined);
  });

  it('does not modify original array', () => {
    const numbers = [2, 3, 5, 6];
    without(numbers, [2]);
    assert.deepEqual(numbers, [2, 3, 5, 6]);
  });

});
