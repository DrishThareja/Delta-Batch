let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits[0]);

fruits[0] = "Kivi";
console.log(fruits[0]);

fruits[1][0] = "T";

console.log(fruits[1]);         // Will not be changes because strings are immutable
// fruits is an array of strings, and this is to replace a character inside one of those strings, not a whole element of the array

console.log(fruits[1] = "T" + fruits[1].slice(1));  // Tango

fruits[10] = "Lichi";
console.log(fruits);
console.log(fruits.length);