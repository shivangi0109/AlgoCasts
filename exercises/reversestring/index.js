// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Solution 1 -

  // return str.split('').reverse().join('');

  // Time Complexity: O(n)
  // Space Complexity: O(n)

  // Solution 2 -

  // let reversed = "";

  // for (let i = str.length - 1; i >= 0; i--) {
  //   reversed += str[i];
  // }
  // OR
  // for (let character of str) {
  //   reversed = character + reversed;
  // }
  // return reversed;

  // The concatenation operation itself takes O(k) time, where k is the current length of the reversed string.
  // However, in JavaScript, string concatenation inside a loop is generally O(n) because it creates a new string each time.
  // Time Complexity: O(n^2)
  // Space Complexity: O(n)

  // Solution 3 -
  // return str.split('').reduce((reversed, character) => {
  //   return character + reversed;
  // }, '');

  // Time Complexity: O(n^2)
  // Space Complexity: O(n)

  // Solution 4 - 

  let reversedArray = [];
  
  // Iterate over the string from the end to the beginning
  for (let i = str.length - 1; i >= 0; i--) {
    reversedArray.push(str[i]);
  }
  
  // Join the array into a string
  return reversedArray.join('');

  // Time Complexity: O(n)
  // Space Complexity: O(n)
}

module.exports = reverse;
