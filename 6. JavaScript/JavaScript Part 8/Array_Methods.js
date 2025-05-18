
// -> forEach

let arr = [1, 2, 3, 4, 5];

function print(el){
    console.log(el);
}

arr.forEach(print);

// or

arr.forEach(function(el){
    console.log(el);
});

// or

let array = [
    {
        name: "Drish",
        marks: 92,
    },
    {
        name: "Chirag",
        marks: 97,
    },
    {
        name: "Ishan",
        marks: 91,
    },
];

array.forEach((student) => {
    console.log(student);
    console.log(student.marks);
});






// -> map

// let newArr = arr.map(some function definition or name);

let num = [1, 2, 3, 4];

let double = num.map((el) => {
    console.log(el*2);
});






// -> filter

let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];

let ans = nums.filter((el) => {
    console.log(el % 2 == 0);
});






// -> some : returns true if some elements of array give true for some function. Else returns false.
// it is like logical false.

console.log("some:");
let some1 = [1, 2, 3, 4].some((el) => (el % 2 == 0)); 
console.log(some1);

let some2 = [1, 3].some((el) => (el % 2 == 0));
console.log(some2);






// -> every : returns true if every element of array gives true for some function. Else returns false.
// it is like logical and.

console.log("every:");

let eve1 = [1, 2, 3, 4].every((el) => (el % 2 == 0));
console.log(eve1);

let eve2 = [2, 4].every((el) => (el % 2 == 0));
console.log(eve2);






// -> reduce : reduce the array to give the single value

console.log("reduce:");
reduce1 = [1, 2, 3, 4].reduce((res, el) => (res + el));
                            // Accumulator , element
console.log(reduce1);

