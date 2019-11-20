'use strict';
const findLongestWord = function(sentence) {
  const arrayOfWords = sentence.split(' ');
  let longestWord;
  let quantityOfLettersInLongestWord = 0;
  for (const word of arrayOfWords) {
    const currentWord = word.split('');
    if (currentWord.length > quantityOfLettersInLongestWord) {
      longestWord = currentWord;
      quantityOfLettersInLongestWord = currentWord.length;
    }
  }
  return longestWord.join('');
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
