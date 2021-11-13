const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it("if given string \'hello\' returns object { h: [0], e: [1], l:[2,3], 0: [4]}", () => {
    const string = "hello";
    assert.deepEqual(letterPositions(string), { h: [0], e: [1], l: [2, 3], o: [4] });
  });

  it("if given string \'hello you\' returns object { h: [0], e: [1], l: [2, 3], o: [4, 7], y: [6], u: [8] }", () => {
    const string = "hello you";
    assert.deepEqual(letterPositions(string), { h: [0], e: [1], l: [2, 3], o: [4, 7], y: [6], u: [8] });
  });

  it("returns undefined if given number as input", () => {
    const number = 1234;
    assert.strictEqual(letterPositions(number), undefined);
  });

  it("returns empty object is given empty string", () => {
    assert.deepEqual(letterPositions(""), {});
  });

});
