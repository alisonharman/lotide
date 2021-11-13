const assertEqual = require('./assertEqual');

// outputs first key matching the value found in object
// return undefined if no match
const findKeyByValue = function(object, value) {
  for (const property in object) {
    if (object[property] === value) {
      return property;
    }
  }
};

module.exports = findKeyByValue;

// TEST CODE
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, 1234), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");