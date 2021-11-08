// the tail is every element except the head (first element) of the array
const tail = function(array) {
  if (array.length >= 1) {
    return array.slice(1);
  } else {
    return;
  }
};

module.exports = tail;