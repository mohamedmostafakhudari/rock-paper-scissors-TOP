```
/**
 * Sub-Problem: How to get computer choice?
 * Input: A list of choices
 * Desired Output: computer choice
 * Steps:
 * COMPUTE random integer between 0 and 2 inclusively
 * INITIALIZE variable computerChoice and SET its value to the item at the random index  
 */
 ```

 ```
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
```

```
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
```

```
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
```

## How to get human selection from the UI?
### Context
- we have a set of buttons, for each we would register an event handler for the
click event.
- each button holds a custom data attribute to the selection
- currently playRound(computerChoice, humanChoice) -> roundResult
### Desired Result
- call the playRound() function with the correct player selection
### Steps
When human clicks a button call the playRound function with player selection
passed as argument playRound(humanSelection)

playRound(humanSelection)
INIT variable computerSelection and compute then store the result in it
COMPUTE the round winner by making comparision btw the two selections
INCREMENT the current score of the winner by 1
CHECK win condition
SET round to be currentRound + 1

---
When one player reaches the target points count (score) that determines the winner

EXPAND [CHECK win condition]
IF winner
  SET gameRunning to false
  DISPLAY a window showing the winner name, scoreboard and contains a button
  offering "PLAY AGAIN"

---
checkWinner(computerScore, humanScore, targetScore) -> 'human' | 'computer'
IF computerScore === targetScore
  return 'computer'
ELSE IF humanScore === targetScore
  return 'human'
ELSE
  return false