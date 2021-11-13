const eqArrays = require('./eqArrays');

// objects are equal if they have the same number of keys
// also: if value in corresponding keys is the same value as the other key
const eqObjects = function(object1, object2) {
  const keysFirstObject = Object.keys(object1);
  const keysSecondObject = Object.keys(object2);

  if (keysFirstObject.length !== keysSecondObject.length) {
    return false;
  }
  for (let i = 0; i < keysFirstObject.length; i++) {
    const value1 = object1[keysFirstObject[i]];
    const value2 = object2[keysFirstObject[i]];

    // need conditional to eval if the values are both arrays and apply special function to see if they are equal
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
      // else values are primitives and conditional with !== operator
    } else {
      if (value1 !== value2) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;
