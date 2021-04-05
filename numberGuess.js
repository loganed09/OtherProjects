let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
  return Math.floor(Math.random()*9);
}

let getAbsoluteDistance = (num1, num2) => { 
  return Math.abs(num1 - num2);
}

let compareGuesses = (humGuess, compGuess, secret) => {
  if (humGuess > 9 || humGuess < 0) {
    alert("You must choose a number between 0 and 9!");
  }
  let humanGuess = getAbsoluteDistance(secret, humGuess);
  let computerGuess = getAbsoluteDistance(secret, compGuess)
  if (humanGuess > computerGuess) {
    return false;
  } else if (humanGuess < computerGuess){
    return true;
  }else if (humanGuess === computerGuess){
    return true;
  }
}

let updateScore = score => {
  if (score === 'human') {
    return humanScore+=1;
  }else if (score === 'computer'){
    return computerScore+=1;
  }
}

let advanceRound = () => {
  return currentRoundNumber+=1;
}

updateScore('human');
console.log(humanScore);
