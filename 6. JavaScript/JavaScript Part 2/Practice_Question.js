// Qs 1. Create a number variable num with some value. Now, print “good” if the number is divisible by 10 and print “bad” if it is not

let num = 20;
if(num % 10 == 0){
    console.log("good");
}
else {
    console.log("bad");
}


// Qs2. Take the user's name & age as input using prompts. Then return back the following statement to the user as an alert ( by substituting their name & age ) : name is age years old.
// [ Use template Literals to print this sentence ]

let Name = prompt("please enter your name: ");
let Age = prompt("please enter your age: ");
alert(`${Name} is ${Age} years old.`);


// Qs3. Write a switch statement to print the months in a quarter. 
// Months in Quarter 1 : January, February, March 
// Months in Quarter 2 : April, May, June
// Months in Quarter 3 : July, August, September
// Months in Quarter 4 : October, November, December
// [ Use the number as the case value in switch ]

let quater = parseInt(prompt("please enter no. between 1 to 4"));
let months;

switch(quater){
    case 1:
        months = "January, February, March";
        break;
    
    case 2:
        months = "April, May, June";
        break;

    case 3:
        months = "July, August, September";
        break;
    
    case 4:
        months = "October, November, December";
        break;

    default:
        months = "Enter no. between 1 to 4";
}

console.log(months);
alert(months);


// Qs4. A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total length greater than 5. For a given string print if it is golden or not.

let str = "Apples";
if((str[0] == 'a' || str[0] == 'A') && (str.length > 5)) {
    console.log("golden string");
} else{
    console.log("not a golden string");
}


// Qs5. Write a program to find the largest of 3 numbers.

let a = 5;
let b = 18;
let c = 13;

if (a > b){
    if(a > c){
        console.log(a, "is largest");
    } else {
        console.log(c, "is largest");
    }
} else{
    if(b > c){
        console.log(b, "is largest");
    } else{
        console.log(c, "is largest");
    }
}


// Qs6. (Bonus). Write a program to check if 2 numbers have the same last digit.
// Eg: 32 and 47852 have the same last digit i.e. 2

let num1 = 32;
let num2 = 47852;

if((num1 % 10) == (num2 % 10)){
    console.log("numbers have the same last digit which is", num1 % 10);
} else{
    console.log("numbers don't have the same last digit");
}
