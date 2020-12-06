const HumanPlayer = require('./humanPlayer');
const BattleshipGame = require('./game');

const player1 = new HumanPlayer();
const game = new BattleshipGame(player1, 5, 5, 8);
console.log('Starting a new Battleship Game...');
game.playTurn();
