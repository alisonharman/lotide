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