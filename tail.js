// the tail is every element except the head (first element) of the array
const tail = function(array) {

  const isArray = Array.isArray(array);
  if (!isArray) {
    return;
  } else if (array.length === 0) {
    return [];
  } else if (array.length >= 1) {
    return array.slice(1);
  } else {
    return;
  }
};

module.exports = tail;