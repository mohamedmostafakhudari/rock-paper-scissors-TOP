import { capitalize, random } from "./utils.js";

function getComputerChoice() {
  return CHOICES[random(CHOICES.length)];  
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

function playRound(computerChoice, humanChoice) {
  const roundResult = computeRoundResult(computerChoice, humanChoice);
  return roundResult;
}


export function playGame() {
  
}

const CHOICES = ['rock', 'paper', 'scissors'];

let currentRound = 1;
let computerScore = 0;
let humanScore = 0;

// const computerChoice = getComputerChoice();
// const humanChoice = getHumanChoice();
// const roundResult= playRound(computerChoice, humanChoice);

// displayRoundResult(roundResult, computerChoice, humanChoice);

if (roundResult === "computer") {
  computerScore += 1;
} else if (roundResult === "human") {
  humanScore += 1;
}

currentRound += 1;