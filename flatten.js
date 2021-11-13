const assertArraysEqual = require('./assertArraysEqual');

// takes in array and flattens it so there are no nested array elements
// note: only assumes one level of nesting
// returns undefined if not an array
const flatten = function(array) {
  if (!Array.isArray(array)) {
    return;
  }
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
};

module.exports = flatten;
//TEST
console.log(flatten("string")); // should return undefined
assertArraysEqual((flatten([1, 2, [3, 4], 5, [6]])), [1, 2, 3, 4, 5, 6]); // should equal
assertArraysEqual((flatten(["pigs", ["ducks", "chickens"]])), ["pigs", "ducks", "sheep"]); //should not pass