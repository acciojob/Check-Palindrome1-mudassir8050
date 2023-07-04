function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const formattedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // Reverse the formatted string
  const reversedStr = formattedStr.split("").reverse().join("");

  // Compare the formatted string with its reverse
  return formattedStr === reversedStr;
}
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("RaceCar")); // Output: true
console.log(isPalindrome("raceCAR")); // Output: true
console.log(isPalindrome("hello")); // Output: false
