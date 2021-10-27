const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(string) {
  const results = {};

  for (let char of string) {
    // only add key and values to results if not a space
    if (char !== " ") {
      if (results[char]) {
        results[char] += 1;
      } else {
        results[char] = 1;
      }
    }
  }
  return results;
};
//TEST
const result1 = countLetters('lighthouse in the house');
assertEqual(result1[" "], undefined);
assertEqual(result1["h"], 4);
assertEqual(result1["i"], 2);