// Rest : Allows a function to take an indefinite number of arguments and bundle them in an array.

function sum(...args) {
    for(let i = 0; i < args.length; i++){
        console.log("You gave us : ", args[i]);
    }
}

sum(1,2);


function min(msg, ...args){
    console.log(msg);
    return args.reduce((min, el) => {
        if(min > el){
            console.log(el);
            return el;
        } else{
            console.log(min);
            return min;
        }
    });
}

console.log(min("Hello", 1, 2, 3, 0, 5, 7, 9));