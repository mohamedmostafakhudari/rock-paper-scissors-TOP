const CHOICES = ['rock', 'paper', 'scissors'];

function capitalize(word) {
  return word.at(0).toUpperCase() + word.slice(1).toLowerCase();
}

function random(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  return CHOICES[random(CHOICES.length)];  
}


function getHumanChoice() {
  let userInput;
  do {
    userInput = Number.parseInt(prompt("Type number 0 for Rock\nType number 1 for Paper\nType number 2 for Scissors\nYour choice?"));
  } while(Number.isNaN(userInput) || userInput < 0 || userInput >= CHOICES.length);
  
  return CHOICES[userInput];
}

function updateScores(roundResult) {
  // not used currently
  if (roundResult === "computer") {
    computerScore += 1;
  } else if (roundResult === "human") {
    humanScore += 1;
  }
}

function computeRoundResult(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    return 'tie';
  } else if (computerChoice === 'rock' && playerChoice === 'scissors' 
      || computerChoice === 'paper' && playerChoice === 'rock'
      || computerChoice === 'scissors' && playerChoice === 'paper') {
    return 'computer';
  } else {
    return 'human';
  }
}

function displayRoundResult(roundResult, computerChoice, humanChoice) {
  if (roundResult === "computer") {
    console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`);
  } else if (roundResult === "human") {
    console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`);
  } else {
    console.log(`It's a tie!`);
  }
}

function playRound(computerChoice, humanChoice) {
  const roundResult = computeRoundResult(computerChoice, humanChoice);
  return roundResult;
}


function playGame() {
  let currentRound = 1;
  let computerScore = 0;
  let humanScore = 0;

  const computerChoice = getComputerChoice();
  const humanChoice = getHumanChoice();
  const roundResult= playRound(computerChoice, humanChoice);

  displayRoundResult(roundResult, computerChoice, humanChoice);

  if (roundResult === "computer") {
    computerScore += 1;
  } else if (roundResult === "human") {
    humanScore += 1;
  }

  currentRound += 1; 
}

// playGame();