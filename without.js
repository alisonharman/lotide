const assertArraysEqual = require('./assertArraysEqual');

// function takes in two arrays
// first is the source array and second should be 'items to remove array'
// returns new array of [source] - [second array]
const without = function(source, itemsToRemove) {
  let arrayWithRemovedElements = [...source];
  for (let i = 0; i < source.length; i++) {
    // need to loop through second array and compare each value to testValue
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (arrayWithRemovedElements[i] === itemsToRemove[j]) {
        arrayWithRemovedElements.splice(i, 1);
      }
    }
  }
  return arrayWithRemovedElements;
};

module.exports = without;

//TEST CODE
//console.log(without([1, 2, 3], [1, 1])) // => [2, 3]
//console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// TEST that original array not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);