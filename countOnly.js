// function takes in a collection of items, i.e. an array of strings
// AND takes in an object of which specific subset of items to count
// items are limited to strings
const countOnly = function(allItems, itemsToCount) {

  if (!Array.isArray(allItems)) {
    return;
  }
  const results = {};
  // only add key:value pair to results object if included in itemsToCount object
  for (const item of allItems) {
    if (typeof(item) !== "string") {
      return;
    }
    if (itemsToCount[item]) {
      //   set a property with that string key to:
      //     the value that was already there (or zero if nothing there) with 1 added to it.
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;
