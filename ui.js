import { capitalize } from "./utils.js";

export function showCurrentRound(currentRound) {
  const gameRound = document.querySelector(".game-round");
  gameRound.textContent = currentRound;
}

export function updateUI(currentState, roundResult) {
  document.querySelector(".game-round").textContent = currentState.currentRound;
  document.querySelector(".player1-choice").textContent = capitalize(roundResult.humanChoice);
  document.querySelector(".player2-choice").textContent = capitalize(roundResult.computerChoice);

  let resultText = "";
  if (roundResult.roundWinner === "computer") {
    resultText = `${capitalize(roundResult.computerChoice)} Beats ${capitalize(roundResult.humanChoice)}. You Lose!`;
  } else if (roundResult.roundWinner === "human") {
    resultText = `${capitalize(roundResult.humanChoice)} Beats ${capitalize(roundResult.computerChoice)}. You Win!`;
  } else {
    resultText = `It's A Tie!`;
  }

  document.querySelector(".round-results-text").textContent = resultText;
}