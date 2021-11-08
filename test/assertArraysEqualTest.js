const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, '3']); // => should FAIL
assertArraysEqual([1, 2, 3], [1, 2, -3]); // => should FAIL
assertArraysEqual(['dog', 'boot', 'chew'], ['dog', 'boot', 'chew']); // => should PASS
