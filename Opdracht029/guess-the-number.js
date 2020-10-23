// waarden:
let answer = null;
let name;
let guess;
const min = 0;
const max = 25;


// Greeting part:

while (name === undefined || name === null || name.length === 0){
    name = prompt ("What is your name?");
}

alert (`Hello ${name}, welcome at Guess The Number!`);



// Guessing Game:

answer = math.floor (math.random() * (max - min)) + min;
console.log ("Number is:" + answer);


while (guess !== answer) {
    guess = parseInt(prompt("Pick a number between 0 and 25:"));
    alert ("Your guess is:" + guess);
    if (guess > answer) {
        alert ("Wrong guess, please pick a lower number");
    } else if (guess < answer) {
        alers ("wrong guess, please pick a higher number");
    } else {
        alert ("You are right!" + guess + "is the right answer!");
        alert ("This is the end of the game, thank you for playing!");
    }
}
