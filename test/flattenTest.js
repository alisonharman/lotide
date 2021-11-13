const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', () => {
  it("return undefined if given string input", () => {
    assert.strictEqual(flatten("string"), undefined);
  });

  it("return [1,2,3,5] if given a nested array of [1,[2,3,4],5]", () => {
    const nestedArray = [1,[2,3,4],5];
    assert.deepEqual(flatten(nestedArray), [1,2,3,4,5]);
  });

  it("return [ducks, pigs, chickens] if given a nested array of [[ducks, pigs, chickens]]", () => {
    const nestedArray = [["ducks","pigs","chickens"]];
    assert.deepEqual(flatten(nestedArray), ["ducks", "pigs", "chickens"]);
  });
});