const prompt = require('prompt-sync')();

console.log("Write 'quit' to quit the game");

const favMovie = "The Dark Knight";

let guess = prompt("Guess my favourite movie : ");

while (guess.toLowerCase() !== favMovie.toLowerCase() && guess.toLowerCase() !== "quit") {
    guess = prompt("Wrong Guess. Please try again : ");
}

if (guess.toLowerCase() === favMovie.toLowerCase()) {
    console.log(`Your guess is correct. My favourite movie is ${guess}`);
} else if (guess.toLowerCase() === "quit") {
    console.log("You have quit the game.");
}
