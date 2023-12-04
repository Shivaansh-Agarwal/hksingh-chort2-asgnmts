/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const finalStr = str.toLowerCase().split(' ').join('');
  let start = 0;
  let end = finalStr.length - 1;
  while (start < end && start < finalStr.length && end > 0) {
    if (!finalStr.charAt(start).match(/[a-z]/i)) {start++; continue;}
    if (!finalStr.charAt(end).match(/[a-z]/i)) {end--; continue;}
    if (finalStr.charAt(start++) === finalStr.charAt(end--)) continue;
    else return false;
  }
  return true;
}

module.exports = isPalindrome;
