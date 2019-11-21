'use strict';
const findLongestWord = function(sentence) {
  const arrayOfWords = sentence.split(' ');
  let longestWord;
  let quantityOfLettersInLongestWord = 0;
  for (const word of arrayOfWords) {
    if (word.length > quantityOfLettersInLongestWord) {
      longestWord = word;
      quantityOfLettersInLongestWord = word.length;
    }
  }
  return longestWord.join('');
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
