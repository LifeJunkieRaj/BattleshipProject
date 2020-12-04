const HumanPlayer = require('./humanPlayer');
const BattleshipGame = require('./game');

const player1 = new HumanPlayer();
const game = new BattleshipGame(player1, 7, 7, 4);
console.log('Starting a new Battleship Game...');
game.playTurn();
