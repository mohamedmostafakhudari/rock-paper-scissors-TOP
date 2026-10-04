const CHOICES = ['rock', 'paper', 'scissors'];

function capitalize(word) {
  return word.at(0).toUpperCase() + word.slice(1).toLowerCase();
}

function random(max) {
  return Math.floor(Math.random() * max);
}

/**
 * Sub-Problem: How to get computer choice?
 * Input: A list of choices
 * Desired Output: computer choice
 * Steps:
 * COMPUTE random integer between 0 and 2 inclusively
 * INITIALIZE variable computerChoice and SET its value to the item at the random index  
 */
function getComputerChoice() {
  return CHOICES[random(CHOICES.length)];  
}

/**
 * Sub-Problem: How to get player choice?
 * Input: User input through the prompt popup
 * Desired Output: player choice
 * Steps:
 * Ask player to enter their choice in integer form
 * INITIALIZE playerChoice variable and SET its value to one choice of CHOICES list with index equals to inputted data  
 */
/**
 * Sub-Problem: How to handle invalid player inputted value?
 * Input: User invalid input through the prompt popup
 * Steps:
 * REPEAT
 *  Ask player to enter their choice in integer form
 * UNTIL player enters valid value 
 * INITIALIZE playerChoice variable and SET its value to one choice of CHOICES list with index equals to inputted data  
 */
function getHumanChoice() {
  let userInput;
  do {
    userInput = Number.parseInt(prompt("Type number 0 for Rock\nType number 1 for Paper\nType number 2 for Scissors\nYour choice?"));
  } while(Number.isNaN(userInput) || userInput < 0 || userInput >= CHOICES.length);
  
  return CHOICES[userInput];
}

/**
 * Sub-Problem: How to keep track of players scores?
 * Input: winner
 * Desired Output: Updated state of the score board
 * Steps:
 * INIT variable computerScore and SET its value to 0
 * INIT variable humanScore and SET its value to 0
 * IF winner == human
 *  Increment humanScore by 1
 * ELSE IF winner == computer
 *  Increment computerScore by 1
 */
let computerScore = 0;
let humanScore = 0;

function updateScores(roundResult) {
  if (roundResult === "computer") {
    computerScore += 1;
  } else if (roundResult === "human") {
    humanScore += 1;
  }
}

/**
 * Sub-Problem: How to determine the round winner?
 * Input: Computer Choice and Human Choice
 * Desired Output: "computer" or "player" or "tie"
 * Steps:
 * IF Computer Choice == Human Choice
 *  Return 'tie'
 * ELSE IF Computer Choice == 'rock' and Human Choice == 'scissors'
 *  or Computer Choice == 'paper' and Human Choice == 'rock'
 *  or Computer Choice == 'scissors' and Human Choice == 'paper'
 *  Return 'computer'
 * ELSE
 *  Return 'human'
 */
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
  displayRoundResult(roundResult, computerChoice, humanChoice);
  updateScores(roundResult);
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();
playRound(computerChoice, humanChoice);