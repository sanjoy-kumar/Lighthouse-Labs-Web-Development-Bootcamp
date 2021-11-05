
const answer = Math.ceil(Math.random() * 100);
let guess;
let attemptsArr = [];

let prompt = require("prompt-sync")({sigint: true});

while (guess !== answer) {

  console.log('\nGuess a number between 1-100:');
  guess = Number(prompt('> '));

  if (attemptsArr.includes(guess)) {
    console.log('Already guessed.');
    continue;
    
  } else if (!isNaN(guess)) {
    attemptsArr.push(guess);
  }

  if (guess > answer) {
    console.log('That\'s too high!');
  
  } else if (guess < answer) {
    console.log('That\'s too low.');
  
  } else if (isNaN(guess)) {
    console.log('Not a number, try again!');

  } else {
    console.log('You got it! You took ' + attemptsArr.length + ' attempts.\n');
  }

}

