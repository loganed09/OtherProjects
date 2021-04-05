const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }else {
    console.log('Please use rock, paper, or scissors.')
  }
};

const getComputerChoice = () => {
  let randomNum = Math.floor(Math.random()*3);
  switch (randomNum){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}


function determineWinner(userChoice, computerChoice){
  if (userChoice === computerChoice){
    return 'TIE!';
  } 
  if (userChoice === 'bomb'){
    return 'You won!';
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'Computer won!';
    } else if (computerChoice === 'scissors'){
      return 'You won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'rock'){
      return 'You won!';
    } else if (computerChoice === 'scissors') {
      return 'Computer won!';
    }
  if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'Computer won!';
    } else if (computerChoice === 'paper'){
      return 'You won!';
    }
  }
  }
}

function playGame() {
  const userChoice = getUserChoice('idk');
  const computerChoice = getComputerChoice();
  console.log(`User has chosen ${userChoice}! Computer has chosen ${computerChoice}!`);
  console.log(determineWinner(userChoice, computerChoice));
}

//console.log(getUserChoice('rock'));
//console.log(getComputerChoice());
playGame();
