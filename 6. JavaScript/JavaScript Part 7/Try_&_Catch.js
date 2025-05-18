// the try statement allows you to define a block of code to be tested for errors while it is being executed.

// the catch statement allows you to define a block of code to be executed, if an error occurs in the try block.

console.log("hello");
console.log("hello");
try{
    console.log(a);
} catch{
    console.log("caught an error... a is not defined.");
}
console.log("hello2");
console.log("hello2");
console.log("hello2");


console.log("hello");
console.log("hello");
try{
    console.log(a);
} catch(err){
    console.log("caught an error... a is not defined.");
    console.log(err);
}
console.log("hello2");
console.log("hello2");
console.log("hello2");

