// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example (Input => Output):
// 35231 => [1,3,2,5,3]
// 0     => [0]

// Solution:
function digitize(n) {
  //code here
  let numArray = []
  let strNums = n.toString();
  numArray = strNums.split('').reverse().map(Number)
  
  return numArray
}

// Explanation
// 1. Create an array to store the numbers 'let numArray = []'
// 2. We need to use.split('') but the numbers are ints and not strings, so we use toString() method on numbers
// 3. Use .split() to create array of numbers, .reverse() to reverse the array, and .map() to perform a function on each number in the array
// return the result
