const arr = [1, 2, 3];
console.log(arr);

arr.push(4);
console.log(arr);

arr.pop();
console.log(arr);

arr = [4, 5, 6];    // error because we can perform operations on constant array but can't change it fully
console.log(arr);
