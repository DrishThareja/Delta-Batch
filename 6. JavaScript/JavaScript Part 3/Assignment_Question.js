// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number ]. For example: for array [ 7, 9, 0, -2 ] and n = 3. Print, [ 7, 9, 0 ]
const prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter a positive no : "));
let arr = [7, 9, 0, -2];
let ans = arr.slice(0, n);
console.log(ans);


// Qs2. Write a JavaScript program to get the last n elements of an array. [ n can be any positive number ]. For example : for array [ 7, 9, 0, -2 ] and n = 3. Print [ 9, 0, -2 ]

// let arr = [7, 9, 0, -2];
let answer = arr.slice(arr.length-n);
console.log(answer);


// Qs3. Write a JavaScript program to check whether a string is blank or not.
let str = prompt("please enter something : ");

if (str.length == 0){
    console.log("string is empty");
} else{
    console.log("string is not empty");
}


// Qs4. Write a JavaScript program to test whether the character at the given ( character ) index is lower case.

// let str = prompt("please enter something : ");
let idx = prompt("please enter a no : ");

if(str[idx] == str[idx].toLowerCase()){
    console.log("character is lower case.");
} else {
    console.log("character is not lower case.");
}


// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

// let str = prompt("please enter something : ");
console.log(`original string: ${str}`);
console.log(`new string: ${str.trim()}`);


// Qs6. Write a JavaScript program to check if an element exists in an array or not.

let arrays = [23, 64, 99, -6];
let item = parseInt(prompt("please enter a no: "));
if(arrays.indexOf(item) != -1){
    console.log("element exists in array");
} else{
    console.log("element does n't exists in array");
}
