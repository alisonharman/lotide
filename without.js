// function takes in two arrays
// first is the source array and second should be 'items to remove array'
// returns new array of [source] - [second array]

const without = function(source, itemsToRemove) {

  if (!Array.isArray(source) && !Array.isArray(itemsToRemove)) {
    return;
  }
  
  const newArray = [];
  let check;

  for (let i = 0; i < source.length; i++) {
    check = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === source[i]) {
        check = true;
        break;
      }
    }
    if (!check) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

module.exports = without;

