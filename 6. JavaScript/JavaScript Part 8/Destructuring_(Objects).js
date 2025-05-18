// Destructuring Objects:

const student = {
    name: "Drish",
    year: 2,
    age: 19,
    subjects: ["DBMS", "COD", "GCCF", "LS"],
    username: "Drish_Thareja",
    password: 1234,
};

// let username = student.username;
// console.log(username);

// let password = student.password;
// console.log(password);

const { username: user, password: pass, city = "ABC" } = student;

console.log(user);
console.log(pass);
console.log(city);

