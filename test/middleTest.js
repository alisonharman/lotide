const middle = require('../middle');
const assert = require('chai').assert;

describe('#middle', () => {

  it('returns empty array if given array with one element (since there is no middle)', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('returns empty array if given array with two elements (since there still is no middle)', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('returns middle element of odd number of elements, numbered three or greater', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('returns two middle elements of even number of elements, numbered four or greater', () => {
    assert.deepEqual(middle([10, 12, 13, 15]), [12,13]);
  });

  it('returns undefined if not given Array input', () => {
    assert.strictEqual(middle('1234'), undefined);
  });

  it('returns empty array if given empty array', () => {
    assert.deepEqual(middle([]), []);
  });

});
