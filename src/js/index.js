import "core-js/stable";
import "regenerator-runtime/runtime";
import Gameboard from './game_board/game_board';
import Player from './player/player';
import Game from './game/game';

import '../css/index.scss';

// Get the UI connected
const playAgainstPc = document.getElementById('main__play-mode-0');
const playSimulated = document.getElementById('main__play-mode-1');
const resetGame = document.getElementById('main__reset-games-button');
const optionSelectElement = document.getElementById('main__choice-selector');
const scoreContainerP1 = document.getElementById('main__scores-score-1');
const scoreContainerP2 = document.getElementById('main__scores-score-2');
const scoreContainerDraw = document.getElementById('main__scores-score-draw');
const imageChoiceP1Container = document.getElementById('main__choices-player-1-image');
const imageChoiceP2Container = document.getElementById('main__choices-player-2-image');

// Start a new gameboard
let gameBoard = new Gameboard();
scoreContainerP1.innerText = gameBoard.score.player_1;
scoreContainerP2.innerText = gameBoard.score.player_2;
scoreContainerDraw.innerText = gameBoard.score.draw;
imageChoiceP1Container.src = `../../public/images/${optionSelectElement.value}.png`

playAgainstPc.addEventListener('click', (event) => {
  event.preventDefault();
  createNewGame(0);
});

playSimulated.addEventListener('click', (event) => {
  event.preventDefault();
  createNewGame(1);
});

resetGame.addEventListener('click', (event) => {
  event.preventDefault();
  // Flush previous instance
  gameBoard = null;
  gameBoard = new Gameboard();
  scoreContainerP1.innerText = gameBoard.score.player_1;
  scoreContainerP2.innerText = gameBoard.score.player_2;
  scoreContainerDraw.innerText = gameBoard.score.draw;
  imageChoiceP2Container.src='';
});

optionSelectElement.addEventListener('change', (event) => {
  // Update P1 UI image based on choice change
  imageChoiceP1Container.src = `../../public/images/${event.target.value}.png`;
  // and clean up P2 UI
  imageChoiceP2Container.src = '../public/images/player2-placeholder.png';
});

const createNewGame = (mode) => {
  gameBoard.setGameMode(mode);
  // Create two players based on mode
  let player_1 = new Player();
  let player_2 = new Player();
  mode == 0 ? player_1.setPlayerType('human') : player_1.setPlayerType('pc');
  // set player choice
  player_1.type == 'human' ? player_1.setPlayerChoice(optionSelectElement.value) : player_1.setPlayerChoice(player_1.generateRandomChoice());
  player_2.choice = player_2.generateRandomChoice();
  // Show choices in UI
  imageChoiceP1Container.src = `../../public/images/${player_1.choice}.png`
  optionSelectElement.value = player_1.choice;
  imageChoiceP2Container.src = `../../public/images/${player_2.choice}.png`;
  // create a game, compare choices
  let game = new Game();
  game.setPlayerChoice(1, player_1.choice);
  game.setPlayerChoice(2, player_2.choice);
  // set result of game
  game.compareChoices();
  gameBoard.setScore(game.winner);
  // Update UI with scores
  scoreContainerP1.innerText = gameBoard.score.player_1;
  scoreContainerP2.innerText = gameBoard.score.player_2;
  scoreContainerDraw.innerText = gameBoard.score.draw;
  // kill game instance and players
  game = null;
  player_1 = null;
  player_2 = null;
};

