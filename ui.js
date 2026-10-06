import { capitalize } from "./utils.js";

export function updateUI(currentState) {
  const lastRound = currentState.lastRound;

  const view = {
    p1Choice : lastRound ? capitalize(lastRound.humanChoice) : "",
    p2Choice: lastRound ? capitalize(lastRound.computerChoice) : "",
    result: getResultText(currentState),
    p1Score: currentState.humanScore,
    p2Score: currentState.computerScore,
    round: currentState.currentRound,
  }

  document.querySelector("#player1-info-card .player-score").textContent = view.p1Score;
  document.querySelector("#player2-info-card .player-score").textContent = view.p2Score;

  document.querySelector(".game-round").textContent = view.round;
  document.querySelector("#player1-choice > .player-choice").textContent = view.p1Choice;
  document.querySelector("#player2-choice > .player-choice").textContent = view.p2Choice;
  document.querySelector(".round-results-text").textContent = view.result;
  
  // show/hide play buttons or options buttons based on isGameOver value
  document.querySelector(".play-buttons").hidden = currentState.isGameOver;
  document.querySelector(".options-buttons").hidden = !currentState.isGameOver;
}

function getResultText(currentState) {
  const { lastRound, isGameOver } = currentState;
  if (!lastRound) return "";
  if (isGameOver) return `The Game Is Over, You ${currentState.gameWinner === "computer" ? "Lost" : "Won"} The Game!`;
  
  const humanChoice = capitalize(lastRound.humanChoice);
  const computerChoice = capitalize(lastRound.computerChoice);
  if (lastRound.roundWinner === "computer") return `${computerChoice} Beats ${humanChoice}. You Lose!`;
  if (lastRound.roundWinner === "human") return `${humanChoice} Beats ${computerChoice}. You Win!`;
  return "It's A Tie!";
}