// Actions that can be performed on an object

const calculator = {
    add : function (a, b){
        console.log( a + b );
    },
    sub : function (a, b){
        console.log( a - b );
    },
    mul : function (a, b){
        console.log( a * b );
    }
};

calculator.add(5,6);

// short hand

const calculate = {
    add(a, b){
        console.log(a+b);
    },
    sub(a, b){
        console.log(a-b);
    }
};

calculate.add(2, 3);
