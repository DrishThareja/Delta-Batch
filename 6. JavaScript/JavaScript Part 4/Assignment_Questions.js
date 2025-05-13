// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array. 
// Example: if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2 
// Result should be arr = [1, 3, 4, 5, 6, 3]

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
for( let i = 0; i < arr.length; i++ ){
    if( arr[i] == num){
        arr.splice(i, 1);
    }
}
console.log(arr);


//Qs2.WriteaJSprogramtofindthenoofdigitsinanumber.Example:ifnumber=287152,count=6

let number = 287152;
let count = 0;
let copy = number;

while (copy>0){
    count++;
    copy = Math.floor(copy/10);
}

console.log(count);

// or

let digitCount = number.toString().length;
console.log("Number of digits:", digitCount);


// Qs3. Write a JS program to find the sum of digits in a number. 
// Example: if number = 287152, sum = 25

// let number = 287152;
let numbers = 287152;
let sum = 0;
// let copy = number;
let cop = numbers;

while(cop > 0){
    let digit = cop % 10;
    sum += digit;
    cop = Math.floor(cop/10);
}

console.log(`Sum of digits: ${sum}`);


// Qs4. Print the factorial of a number n.
// [ Factorial of a number n is the product of all positive integers less than or equalto a given positive integer and denoted by that integer. ] 
// Example: 
// 7! ( factorial of 7 ) = 1 x 2 x 3 x 4 x 5 x 6 x 7 = 5040
// 5! ( factorial of 5 ) = 1 x 2 x 3 x 4 x 5 = 120
// 3! ( factorial of 3 ) = 1 x 2 x 3 = 6
// 0! Is always 1

let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log(`factorial of ${n} is ${factorial}`);


// Qs5. Find the largest number in an array with only positive numbers.

let arrs = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = 0;

for (let i = 0; i <= arrs.length; i++) {
    if(largest < arrs[i]){
        largest = arrs[i];
    }
}

console.log(largest);
