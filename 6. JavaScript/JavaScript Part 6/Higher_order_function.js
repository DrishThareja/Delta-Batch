// Higher Order Function
// A function that does one or both:
//      --> takes one or multiple functions as arguments
//      --> returns a function

function multipleGreet(func, count) {
    for (let i = 1; i <= count; i++) {
        func();
    }
}

let greet = function(){
    console.log("hello");
}

multipleGreet(greet, 5);

