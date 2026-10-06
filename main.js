import * as game from "./game.js";
import  * as ui from "./ui.js";

const playButtons = document.querySelector('.play-buttons').children;

Array.from(playButtons).forEach(button => {
  button.addEventListener("click", (e) => {
    const humanChoice = e.target.dataset.value;
    game.playRound(humanChoice);
    
    const currentState = game.getGameState();
    ui.updateUI(currentState);
  })
});

const resetButton = document.querySelector(".reset-button");

resetButton.addEventListener("click", () => {
  game.resetGame();
  
  const currentState = game.getGameState();
  ui.updateUI(currentState);
})