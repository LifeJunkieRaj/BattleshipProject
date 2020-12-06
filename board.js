
class Board {
  constructor(numRows, numCols, numShips) {
    this.numRows = numRows
    this.numCols = numCols
    this.numShips = numShips
    this.grid = this.populateGrid();
  }

  populateGrid() {
    let startGrid = [];
    for (let i = 0;i < this.numRows;i++) {
      startGrid.push([]);
      for (let j = 0;j < this.numCols;j++) {
        startGrid[i].push('');
      }
    }
    let count = this.numShips
   while (count > 0) {
    let randRow = Math.floor(Math.random() * (this.numRows));
    let randCol = Math.floor(Math.random() * (this.numCols));

    if (startGrid[randRow][randCol] === ''){
      startGrid[randRow][randCol] = 'S';
      count--;
    }
   }
   return startGrid
  }

  display() {
    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()
    const displayGrid = this.grid.map((row) => {
      return row.map((col) => (col === "S" || col === '' ? '' : col));
    });

      console.table(displayGrid)
  }

  count() {
    return this.numShips
  }

  isValidMove(pos) {
    let attackPos = this.grid[pos[0]][pos[1]];
    if (attackPos === '' || attackPos === 'S') {
      return true
    } else {
      return false
    }
  }

  isGameOver() {
    if (this.numShips === 0) {
      console.log('You might of Won now, but wait till SkyNet takes over pussy!!!');
      return true
    }
      return false
  }

  attack(pos) {
    let attackPos = this.grid[pos[0]][pos[1]];
    if (this.isValidMove(pos)) {
      if (attackPos === 'S') {
        this.grid[pos[0]][pos[1]] = "H";
        this.numShips--;
      } else if (attackPos === '') {
        this.grid[pos[0]][pos[1]] = "X";
      }
    }

  }

}


module.exports = Board;
