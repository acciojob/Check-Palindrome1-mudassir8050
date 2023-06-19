// // complete the given function

// function palindrome(str){

// }
// module.exports = palindrome



function Palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
 // s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Check if the string is equal to its reverse
  return str === str.split('').reverse().join('');
}

// Example usage:
const input = "race a car";
const result = Palindrome(input);
console.log(result);

