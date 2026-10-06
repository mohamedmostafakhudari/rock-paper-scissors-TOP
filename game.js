import { random } from "./utils.js";

/* I created this state object for 2 main reasons
- A single source of truth for all the game data
- To decouple State - Logic - UI so that UI components have only one job,
 display the current state, nothing else */

const CHOICES = ['rock', 'paper', 'scissors'];
const WIN_SCORE = 5;

const gameState = {
  humanScore: 0,
  computerScore: 0,
  currentRound: 0,
  isGameOver: false,
}

function getComputerChoice() {
  return CHOICES[random(CHOICES.length)];  
}

function computeWinner(computerChoice, playerChoice) {
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
  if (gameState.isGameOver) return { roundWinner, computerChoice, humanChoice };
  const computerChoice = getComputerChoice();
  const roundWinner = computeWinner(computerChoice, humanChoice);
  if (roundWinner === "computer") {
    gameState.computerScore += 1;
  }
  if (roundWinner === "human") {
    gameState.humanScore += 1;
  }

  if (gameState.computerScore === WIN_SCORE || gameState.humanScore === WIN_SCORE) {
    gameState.isGameOver = true;
  }

  gameState.currentRound += 1;

  return { roundWinner, computerChoice, humanChoice }
}

export function getGameState() {
  // I return a copy of the gameState because i don't want it to be changed
  // from outside game.js file

  return {...gameState};
}
export function playGame() {
  
}