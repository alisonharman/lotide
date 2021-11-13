const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  it("returns object of {pie: 2, cakes:1} if given [pie, cake, pudding, pie] and {pie: true, cake:true}", () => {
    const array = ["pie", "cake", "pudding", "pie"];
    const object = {pie: true, cake: true};
    assert.deepEqual(countOnly(array, object), {pie: 2, cake: 1});
  });

  it("returns object of {pie: 2, cakes:1} if given [pie, cake, pudding, pie] and {pie: true, cake:true, iceCream: true}", () => {
    const array = ["pie", "cake", "pudding", "pie"];
    const object = {pie: true, cake: true, iceCream: true};
    assert.deepEqual(countOnly(array, object), {pie: 2, cake: 1});
  });

  it("returns empty object {} if given [carrots, lettuce] and {pie: true, cake: true", () => {
    const array = ["carrots", "lettuce"];
    const object = {pie: true, cake: true};
    assert.deepEqual(countOnly(array, object), {});
  });

  it("returns undefined if given an array of number (not strings)", () => {
    const array = [1, 2, 3];
    const object = {pie: true, cake: true};
    assert.strictEqual(countOnly(array, object), undefined);
  });

  it("returns undefined if not given an object as second parameter", () => {
    const array = [1, 2, 3];
    assert.strictEqual(countOnly(array, array), undefined);
  });

});
