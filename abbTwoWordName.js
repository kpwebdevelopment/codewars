// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
  const sep = name.split(" ")
  let firstIn = sep[0][0]
  let secondIn = sep[1][0]
  
  return `${firstIn.toUpperCase()}.${secondIn.toUpperCase()}`
}

// Solution explanation:
// name.split(" ") seperates the string by " " and returns an array ["Kenneth", "Paige"];
// we then can use the array indexs to save the first letters of each name to a variable
// capitalize the first letters with toUpperCase and return with a "." in the middle
