class Board {
  constructor(numRos, numCols, numShips) {
    this.numRos = numRos
    this.numCols = numCols
    this.numShips = numShips
    this.grid = populateGrid()
    // TODO: Set up constructor that sets the numRos, numCols, and numShips.
    // TODO: Set this.grid equal to the return value of the instance method
    // populateGrid().
  }

  populateGrid() {
    let outerArr = [];
    for (let i = 0; i < this.numRos; i++) {
      let rowArr = [];
      for (let j = 0; j < this.numCols; j++) {
        rowArr.push(null)
      }
      outerArr.push(rowArr)
    }
    let k = 0;
    while (k < this.numShips) {
      let shipRow = Math.floor(Math.random() * this.numRos)
      let shipCol = Math.floor(Math.random() * this.numCols)
      if (outerArr[shipRow][shipCol] === null) {
        outerArr[shipRow][shipCol] = "S"
        k++
      }
    }
    return outerArr;
    // TODO: Using the instance variables numRows, numCols, and numShips, return
    // a 2D array representing the state of the board.
  }

  display() {
    let anotherGrid = [...this.grid]

    for (let i = 0; i < this.numRos; i++) {
      for (let j = 0; j < this.numCols; j++) {
        if (anotherGrid[i][j] === "null" || anotherGrid[i][j] === "S") {
          anotherGrid[i][j] = "~";
        }
        // TODO: Print the game board with marks on any spaces that have been fired
        // upon. Be sure not to display the unhit ships to the user! Hint: you might
        // be able to use console.table()
      }
    }
    console.table(anotherGrid);
  }

  count() {
    let validTarget = 0;
    for (let i = 0; i < this.numRos; i++) {
      for (let j = 0; j < this.numCols; j++) {
        if (this.grid[i][j] === "S") {
          validTarget++;
        }
      }
    }

    // TODO: Return the number of valid targets (ships) remaining.
  }

  isValidMove(pos) {
    for (let i = 0; i < this.numRos; i++) {
      for (let j = 0; j < this.numCols; j++) {
        return (this.grid[i][j] === "null" || this.grid[i][j] === "S");
      }
    }
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
  }

  isGameOver() {
    return (this.count() === 0)
    // TODO: Return true if the game is over (when all ships are hit).
  }

  attack([row, col]) {
    if (this.grid[row][col] === "S") {
      this.grid[row][col] = "H";
    } else {
      this.grid[row][col] = "X";
    }
    // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.
  }
}

module.exports = Board;
