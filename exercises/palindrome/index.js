// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // Solution 1 -
  // let reversedArray = [];

  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversedArray.push(str[i]);
  // }

  // let reverse = reversedArray.join('');
  // if (reverse !== str) {
  //   return false;
  // }

  // return true;  

  // Time Complexity - O(n)
  // Space Complexity - O(n)

  // Solution 2 -

  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });

  // Time Complexity - O(n)
  // Space Complexity - O(n)
}

module.exports = palindrome;
