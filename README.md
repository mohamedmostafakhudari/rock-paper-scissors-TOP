# rock-paper-scissors-TOP

## Architecture & Design Pattern

This project follows a strict **Separation of Concerns** using a simplified **Model-View-Controller (MVC)** architectural pattern.

### Module Responsibilities

1. **`game.js` (Model Layer)**
   - Manages internal, private `gameState` (scores, current round).
   - Contains pure business logic (`playRound()`, `computeWinner()`).
   - Exposes read-only state via a getter function (`getGameState()`).
   - *Constraint:* Zero DOM references (`document.querySelector` is strictly forbidden here).

2. **`ui.js` (View Layer)**
   - Takes state and round data as parameters and updates HTML elements.
   - Handles text changes, score counter updates, and UI messages.
   - *Constraint:* Never calculates game rules or modifies state directly.

3. **`main.js` (Controller / Application Layer)**
   - Acts as the entry point connecting HTML buttons to application logic.
   - Listens for DOM events, delegates actions to `game.js`, and triggers `ui.js` renders.

## Problem Rewording
- We want to create a "Rock Paper Scissors" game. The game would be played against the Computer.
 The rules is as the following:
 - Same choices => tie
 - Rock beats Scissors
 - Paper beats Rock
 - Scissors beats Paper

 ## Subproblems involved
 - How to get computer choice?
 - How to get player choice?
 - How to determine the round winner?
 - How to keep track of players scores?
 - When the game ends?

 ## Game Main Flow
1. Player makes a choice
2. System makes a choice
3. System determines round winner
4. System updates scores