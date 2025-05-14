// Scope: scope determines the accessibility of variables, objects and functions from different parts of the code.
//      --> Function
//      --> Block
//      --> Lexical


// Function Scope : Variables defined inside a function are not accessible (visible) from outside the function.

let sum = 54;               // Global Scope

function calSum(a, b){
    let sum = a + b;        // Function Scope
    console.log(sum);
}

calSum(1, 2);
console.log(sum);




// Block Scope : Variables declared inside a {} block can not be accessed from outside the block.

for(let i=1; i<=5; i++){
    console.log(i);
}



// Lexical Scope : a variable defined outside a function can be accessible inside another function defined after the variable declaration. 
// The opposite is not true.

function outerFunction() {
    let x = 5;
    let y = 6;

    function innerFunction() {  // function scope
        // let a = 10;          
        console.log(x);
        console.log(y);
    }
//    console.log(a);
    innerFunction();
}

outerFunction();

