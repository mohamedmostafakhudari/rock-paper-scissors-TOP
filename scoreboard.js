function updateScores(roundResult) {
  // not used currently
  if (roundResult === "computer") {
    computerScore += 1;
  } else if (roundResult === "human") {
    humanScore += 1;
  }
}