// JS automatically converts objects keys to strings
// Even if we made the number as a key the number will be converted to string

const objects = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e"
};

// objects[1]
// 'a'
// objects[2]
// 'b'
// objects[true]
// 'c'
// objects[null]
// 'd'
// objects[undefined]
// 'e'
