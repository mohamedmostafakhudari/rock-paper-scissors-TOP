import * as game from "./game.js";

const playButtons = document.querySelector('.play-buttons').children;

Array.from(playButtons).forEach(button => {
  button.addEventListener("click", (e) => {
    const humanChoice = e.target.dataset.value;
    game.playRound(humanChoice);
  })
});