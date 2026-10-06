import * as game from "./game.js";
import  * as ui from "./ui.js";

const playButtons = document.querySelector('.play-buttons').children;

Array.from(playButtons).forEach(button => {
  button.addEventListener("click", (e) => {
    const humanChoice = e.target.dataset.value;
    const roundResult = game.playRound(humanChoice);
    
    const currentState = game.getGameState();
    ui.updateUI(currentState, roundResult);
  })
});