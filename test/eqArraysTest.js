const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1, 2, -3]), true); // => should FAIL
assertEqual(eqArrays(['dog', 2, 3], ['dog', 2, 3]), true); // => should PASS