// this keyword: refers to an object that is executing the current piece of code

// const student = {
//     name: "Drish",
//     age: 23,
//     eng: 93,
//     math: 95,
//     phy: 97,
//     getAvg(){
//         let avg = (eng + math + phy) / 3;
//         console.log(avg);
//     }
// }
// this will not work

const student = {
    name: "Drish",
    age: 23,
    eng: 93,
    math: 95,
    phy: 97,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

student.getAvg();
