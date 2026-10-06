function displayRoundResult(roundResult, computerChoice, humanChoice) {
  if (roundResult === "computer") {
    console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`);
  } else if (roundResult === "human") {
    console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`);
  } else {
    console.log(`It's a tie!`);
  }
}