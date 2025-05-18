// Finding Maximum in array

let nums = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];

let result = nums.reduce((result, el) => {
    if(el > result){
        console.log(el);
        return el;
    } else{
        console.log(result);
        return result;
    }
});

console.log(`Maximum result is ${result}`);