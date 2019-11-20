'use strict';

const checkForSpam = function(str) {
  const formatedString = str.toLowerCase();
  return formatedString.includes('spam') || formatedString.includes('sale');
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
