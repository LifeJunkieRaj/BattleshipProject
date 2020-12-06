
const Board = require("./board.js")
class BattleshipGame {
  constructor(player1, numRos, numCols, numShips) {
    this.player1 = player1
    this.currentPlayer = player1
    this.board = new Board(numRos, numCols, numShips)
    this.numberOfTurns = 0
    // TODO: Set up constructor to store reference to the humanPlayer and
    // instantiate a new instance of the Board class and set it to this.board.
    // Remember to import your Board class.
  }

  playTurn() {
    this.displayStatus()
    // getMove(processMove)
    // processMove
    this.currentPlayer.getMove((pos) => this.processMove(pos))
    // TODO: Display the state of the game and ask for the users input.
  }

  displayStatus() {
    console.log("\n*******************************");
    console.log("'H' means you got lucky, 'X' means try again noob\n");
    this.board.display()
    // TODO: Display the current state of the game to the player.
  }

  processMove(pos) {
    console.clear();
    if (this.board.isValidMove(pos)) {
      this.board.attack(pos)
      this.numberOfTurns++
      if (this.board.isGameOver()) {
        this.displayStatus()
        this.currentPlayer.processGameOver(true, this.numberOfTurns)
      } else {
        this.playTurn()
      }
    } else {
      console.log("Honestly, why are you wasting our air? Try again!")
      this.playTurn()
    }
    // TODO: Detemerine if the move is valid. If so, invoke the attack method on
    //     the board instance and increment this.turns by 1. If the game is over,
    //     display the final status of the game and end the game. If not, play
    //     another turn. If the move is invalid, ask the player to input a valid
    //     position and play another turn.
  }
}

module.exports = BattleshipGame;
