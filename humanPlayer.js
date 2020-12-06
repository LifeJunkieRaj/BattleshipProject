const readline = require('readline');

class HumanPlayer {
  constructor() {
    // TODO: Create a new readline interface and store is as an instance
    // variable (this.rl). Remember to require the built-in node module,
    // 'readline'
    this.rl = readline.createInterface(process.stdin, process.stdout);

  }

  getMove(processMove) {
    this.rl.question("You can pick one, but I don't know why you'd even try:", (answer) => {
      const [row, col] = answer.split(', ');
      processMove([row, col]);

    });
    // TODO: Ask the user for their move and process the answer using the rl
    // interface.Invoke the callback function (processMove), passing in
    // the given answer in the form of an array representing [row, col]
  }

  processGameOver(isWon, turns) {
    if (isWon) {
      console.log(`I can't believe it took you ${turns} turns to win... SMDH!`)
    } else {
      console.log(`You SUCK!!! Try Again.`)
    }
    this.rl.close;
    // TODO: Display a different message depending on if the player won or lost
    // the game. Close the rl interface.
  }
}

module.exports = HumanPlayer;
