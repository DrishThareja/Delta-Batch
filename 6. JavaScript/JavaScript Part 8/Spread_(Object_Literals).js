let data = {
    email: "drishthareja@gmail.com",
    password: "abcd",
};

let dataCopy = {...data, id: 123, country: "India"};  // adding other elements also

console.log(dataCopy);

let obj1 = {..."Drish Thareja"};
console.log(obj1);
