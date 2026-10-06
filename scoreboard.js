let computerScore = 0;
let humanScore = 0;

export function setHumanScore(newScore) {
  humanScore = newScore;
}

export function setComputerScore(newScore) {
  computerScore = newScore;
}

export function getHumanScore() {
  return humanScore;
}

export function getComputerScore() {
  return computerScore;
}