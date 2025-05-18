// Qs1. Write a JavaScript function that returns array elements larger than a number.

let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

function getElements(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]>num) {
            console.log(arr[i]);
        }
    }
}

getElements(arr, num);



// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh”
// ans = “abcdefgh”

let str = "abcdabcdefgggh";

function getUnique(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        if (ans.indexOf(currChar) == -1) {      // if current character is not added, then add it in ans
            ans += currChar;
        }
    }
    console.log(ans);
}

getUnique(str);



// Qs3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America"

let country = ["Australia", "Gerany", "United States of America"];

function longestName(country) {
    let ansIdx = 0;
    for(let i=0; i<country.length; i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen > ansLen){
            ansIdx = i;
        }
    }
    console.log(country[ansIdx]);
}

longestName(country);



// Qs4. Write a JavaScript function to count the number of vowels in a String argument.

let string = "drishthareja";
function countVowels(string) {
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(
            string.charAt(i) == "a" ||
            string.charAt(i) == "e" ||
            string.charAt(i) == "i" ||
            string.charAt(i) == "o" ||
            string.charAt(i) == "u"
        ){
            count++;
        }
    }
    console.log(count);
}

countVowels(string);



// Qs5. Write a JavaScript function to generate a random number within a range (start, end)

let start = 100;
let end = 200;
function generateRandom(start, end){
    let diff = end - start;
    console.log(Math.floor(Math.random() * diff) + start);
}

generateRandom(start, end);

