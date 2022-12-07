
  function isPalindrome(word) {
    // 1
    word = word.toLowerCase();
  
    // 2
    const chars = word.split('');
  
    // 3
    const charstwo = chars.reverse();
  
    // 4
    const reversed = charstwo.join('');
  
    // 5
    return word == reversed;
  }

/* 
  Make a function that will make a reversed version of the inputed string then reverse it and compare it with the original string.
*/

/* Here are the steps;
  1.First, make the string lowercase so that it is not case-sensitive.
  2.Then, use the split() method to split the string into an array of characters.
    (This makes it easy to work with the individual characters)
  3.Next, we use the reverse() method to reverse the order of the characters in the array.
  4.Here, we use the join() method to convert the array of characters back into a string.
  5.Finally compare the values!!!
*/

console.log(isPalindrome('mom'));  // true
console.log(isPalindrome('racecar'));  // true
console.log(isPalindrome('hello'));  // false  

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
