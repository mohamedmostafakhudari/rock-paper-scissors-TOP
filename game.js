import { capitalize, random } from "./utils.js";
import * as scoreBoard from "./scoreboard.js";

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

export function playRound(humanChoice) {
  console.log(scoreBoard.getComputerScore(), scoreBoard.getHumanScore());
  const computerChoice = getComputerChoice();
  const roundResult = computeRoundResult(computerChoice, humanChoice);
  if (roundResult === "computer") {
    scoreBoard.setComputerScore(scoreBoard.getComputerScore() + 1);
  } else if (roundResult === "human") {
    scoreBoard.setHumanScore(scoreBoard.getHumanScore() + 1);
  }
}


export function playGame() {
  
}

const CHOICES = ['rock', 'paper', 'scissors'];

let currentRound = 1;
