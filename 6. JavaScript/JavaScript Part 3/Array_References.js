let arr = ['a', 'b'];
console.log(arr);

let arrCopy = arr;
console.log(arrCopy);

arrCopy.push('c');
console.log(arr);
console.log(arrCopy);

console.log(arr == arrCopy);
console.log(arr === arrCopy);