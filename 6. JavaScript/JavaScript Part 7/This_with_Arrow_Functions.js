const student = {
    name: "Drish",
    Marks: 95,
    prop: this, // global scope
    getName: function() {
        console.log(this);
        console.log(this.name);
    },
    getMarks: () => {
        console.log(this);  // parent scope
        console.log(this.Marks); // it will not work
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this);  // student
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this);  // window
        }, 2000);
    },
};

//const a = 5;    // global scope

student.getName();
student.getMarks();
student.getInfo1();
student.getInfo2();