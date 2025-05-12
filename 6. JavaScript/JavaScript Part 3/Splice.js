// splice : removes / replace / add elements in place
// do change in orignal array
// splice(start, deleteCount, item0 ... itemN)
// deleteCount is optional

let colors = ["red", "yellow", "blue", "pink", "green", "white"];

a = colors.splice(4);
console.log(a);         // give the array from where it is cut

console.log(colors);    // give the orignal array that is left after cut


b = colors.splice(0,1);
console.log(b);         // start from index 0 and delete 1 element

console.log(colors);


c = colors.splice(0, 1, "black", "grey");   // start from index 0 and delete 1 element and then add black and grey from index 0
console.log(c);

console.log(colors);
