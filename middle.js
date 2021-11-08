// outputs middle values of an array
// if array has even number of elements, then output should be the two middle
// if array has odd number of elements, then output should be one value in the middle
// HOWEVER, if array has one or two elements then ouput empty array
const middle = function(array) {
  if (!(Array.isArray(array))) {
    return;
  }
  const returnedArray = [];
  if (array.length <= 2) {
    return returnedArray;
  }
  if (array.length % 2 === 0) {
    // array is even length
    const middleIndex = array.length / 2;
    returnedArray.push(array[middleIndex - 1]);
    returnedArray.push(array[middleIndex]);
  } else {
    // array should be odd
    const middleIndex = Math.trunc(array.length / 2);
    returnedArray.push(array[middleIndex]);
  }
  return returnedArray;
};
module.exports = middle;