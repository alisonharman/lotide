// takes in a string and returns an object that gives all the idices in the string where each character is found
const letterPositions = function(sentence) {

  if (typeof(sentence) !== 'string') {
    return;
  }
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence.charAt(i);
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;
