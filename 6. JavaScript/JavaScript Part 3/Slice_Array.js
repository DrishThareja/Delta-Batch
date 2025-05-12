// slice : gives the portion of an array

let colors = ["red", "yellow", "blue", "pink", "green", "white"];

a = colors.slice();     // gives full array
console.log(a);

b = colors.slice(2);    // gives array from index 2 as there is no ending index given
console.log(b);

c = colors.slice(2,3);  // gives array from index 2 to end index - 1
console.log(c);

d = colors.slice(-2);   // gives array from last like it is -2 so from 2nd last
console.log(d);
