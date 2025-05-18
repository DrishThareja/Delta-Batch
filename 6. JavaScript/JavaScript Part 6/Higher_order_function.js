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



// Higher Order Function (Returns):
function oddEvenTest(request) {
    if(request == "odd"){
        return function(n){
            console.log(!(n % 2 == 0));
        }
    } else if(request == "even"){
        return function(n){
            console.log(n % 2 == 0);
        }
    } else {
        return function(){
            console.log("wrong request");
        }
    }
}

let func = oddEvenTest("odd");
func(3);  // true
