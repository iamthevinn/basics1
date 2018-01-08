
var x = [];
console.log("Array x: " + x);
x.push("coding","dojo","rocks");
console.log("Array x: " + x);
x.pop();
console.log("Array x: " + x);

const y = [];
console.log("Array y: " + y);
y.push(88);
console.log("Array y: " + y);

var z = [9,10,6,5,-1,20,13,2];

console.log("Array z: " + z);

var zWithoutLast = z;
zWithoutLast.pop();

console.log("zWithoutLast: " + zWithoutLast);

var names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];

var nameLengths = [];
for (i = 0; i < names.length; i++) { 
  nameLengths.push(names[i].length);
}

console.log("nameLengths: " + nameLengths);

var fiveNames = [];
for (i = 0; i < names.length; i++) { 
  if (names[i].length === 5)
    fiveNames.push(names[i])
}


console.log("fiveNames: " + fiveNames);

function yell(string) {
    return string.toUpperCase();
}

console.log("yell at me Bro: " + yell("test"));
