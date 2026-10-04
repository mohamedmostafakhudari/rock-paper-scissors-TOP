/**
 * Sub-Problem: How to get computer choice?
 * Input: A list of choices
 * Desired Output: computer choice
 * Steps:
 * COMPUTE random integer between 0 and 2 inclusively
 * INITIALIZE variable computerChoice and SET its value to the item at the random index  
 */
const CHOICES = ['rock', 'paper', 'scissors'];

function random(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  return CHOICES[random(CHOICES.length)];  
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());