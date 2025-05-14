function hello() {
    console.log("This is a function");
}

hello();

// function can be use for loop , if else, 

// Practice Question
// Create a function to roll a dice & always display the value of the dice 1 to 6

function roll() {
    let random = Math.floor(Math.random() * 6 ) + 1;
    console.log(random);
}

roll();



// Function with Arguments

function printName(name) {
    console.log(name);
}

printName("Drish Thareja");

// -------------------------------------

function printInfo(name, age) {
    console.log(`My name is ${name} and I am ${age} years old.`);
}

printInfo("Drish Thareja", 19);

