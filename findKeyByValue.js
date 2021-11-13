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