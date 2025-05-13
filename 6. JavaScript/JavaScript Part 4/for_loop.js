// loops : used to iterate a piece of code
const prompt = require('prompt-sync')();

// 1 to 5
for(let i = 1; i <= 5; i++){
    console.log(i);
}

// 5 to 1
for(let i = 5; i>=1; i--){
    console.log(i);
}

// odd no from 1 to 15
for(let i = 1; i<=15; i++){
    if (i % 2 != 0){
        console.log(i);
    }
}

// even no 2 to 10
for(let i = 2; i<=10; i++){
    if(i%2 == 0){
        console.log(i);
    }
}

// multiplication table of 5
for(let i = 1; i<=50; i++){
    if(i%5 == 0){
        console.log(i);
    }
}

let n = parseInt(prompt("enter a no.: "));

for(let i = n; i<=n*10; i=i+n){
    console.log(i);
}

