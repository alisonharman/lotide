const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TEST CODE
assertArraysEqual(middle([1]), [1]); // SHOULD FAIL
assertArraysEqual(middle([1, 2]), []); // SHOULD PASS
assertArraysEqual(middle([1, 2, 3]), [2]); // SHOULD PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]); // SHOULD PASS
