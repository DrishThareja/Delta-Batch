// concat : merge 2 arrays
// reverse : reverse an array   = changes are done in orignal array

let cars = ["bmw", "xuv", "maruti"];
let color = ["green", "blue", "white"];
let fruits = ["orange", "apple", "pear"];

c1 = cars.concat(color);
console.log(c1);

c2 = cars.concat(color).concat(fruits);
console.log(c2);

r1 = cars.reverse();
console.log(r1);

r2 = c2.reverse();
console.log(r2);

console.log(c2);