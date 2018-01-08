// Author: Vince Carini

// Basic 1

// Create a variable x as an empty array []. Log this array to your console.
var x = [];
console.log("Array Empty Array x: " + x);

// Use .push() to add three strings to your array: 'coding', 'dojo', 'rocks'.
x.push("coding","dojo","rocks");
//console.log("Array x: " + x);

// Use .pop() to remove the final element of your array.
// Log the final value of x, what is it?
x.pop();
console.log("Array Final Value x: " + x);

// Basic 2

// Create a const called y, and store an empty array there. Log this to your console.
const y = [];
console.log("Empty Const Array y: " + y);

// Use .push() to add the number 88 to array y.
y.push(88);
console.log("Array y: " + y); // Value for y in the console is 88

// Basic 3

// Create a variable z that contains the array [9, 10, 6, 5, -1, 20, 13, 2].
var z = [9,10,6,5,-1,20,13,2];

// Print every element to the console.
console.log("Array z: " + z);

// Now print every element except the final number.
var zWithoutLastElement = z.slice();
zWithoutLastElement.pop();
console.log("zWithoutLastElement: " + zWithoutLastElement);

// Basic 4

// Create a variable names and store the array ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso']
var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];

// Print the length of all names to the console.
var nameLengths = [];
for (i = 0; i < names.length; i++) { 
  nameLengths.push(names[i].length);
}

console.log("nameLengths: " + nameLengths);

// Now modify your code so only names with a length of 5 print.
var namesWith5Characters = [];
for (i = 0; i < names.length; i++) { 
  if (names[i].length === 5)
  namesWith5Characters.push(names[i])
}

console.log("namesWith5Characters: " + namesWith5Characters);

// Basic 5

// Create a function yell that takes one parameter called string.
function yell(string) {
    return string.toUpperCase();
}

// Make yell return that string in all uppercase.
console.log("yell at me Bro: " + yell("test"));

// Where could you look to find out more about uppercasing strings in JavaScript?
// Google it.