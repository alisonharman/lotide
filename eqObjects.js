const eqArrays = require('./eqArrays');

// objects are equal if they have the same number of keys
// also: if value in corresponding keys is the same value as the other key
const eqObjects = function (object1, object2) {
  let returnValue = true;
  const keysFirstObject = Object.keys(object1);
  const keysSecondObject = Object.keys(object2);

  if (keysFirstObject.length !== keysSecondObject.length) {
    returnValue = false;
  }
  for (let i = 0; i < keysFirstObject.length; i++) {
    const value1 = object1[keysFirstObject[i]];
    const value2 = object2[keysFirstObject[i]];

    if ((typeof value1 === 'object') && (typeof value2 === 'object')) {
      if (Array.isArray(value1) && Array.isArray(value2)) {
        if (!eqArrays(value1, value2)) {
          returnValue = false;
        }
      }
      else {
        // they are real objects!
        returnValue = eqObjects(value1, value2)
      }
    }
    else {
      // they are primitives
      if (value1 !== value2) {
        returnValue = false;
      }
    }
  }
  return returnValue;
};

module.exports = eqObjects;
