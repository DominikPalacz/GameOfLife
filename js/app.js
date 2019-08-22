document.addEventListener('DOMContentLoaded', () => {

  let playBtn = document.getElementById('play');
  let pauseBtn = document.getElementById('pause');

  /** Creating a game start object */

  let isCreateBoard = false;
  const createBoardButton = document.getElementById('start');
  const resetButton = document.getElementById('reset');
  const startBox = document.getElementById('start-box');

  createBoardButton.addEventListener('click', () => {
    isCreateBoard = true;
    let boardWidth = document.getElementById('size').value;

    if (isCreateBoard) {
      let game = new GameOfLife(boardWidth, boardWidth);
      game.createBoard();
      game.firstGlider();
      startBox.classList.add('hidden');
    }

    [playBtn, resetButton].forEach(e => e.classList.remove('hidden'));
  })

  resetButton.addEventListener('click', () => {
    location.reload();
  });

  /**  Creating a game management object */

  function GameOfLife(boardWidth, boardHeight) {

    this.width = boardWidth;
    this.height = boardHeight;

    /** Building a board */
    this.board = document.getElementById('board');
    this.cells = [];

    this.createBoard = function () {

      this.board.style.width = (this.width * 10) + 'px';
      this.board.style.height = (this.height * 10) + 'px';

      let nrAllDiv = this.width * this.height;

      for (let i = nrAllDiv; i > 0; i--) {
        let div = document.createElement('div');
        board.append(div);
        this.cells.push(div);
      }

      /**Reviving and killing cells*/

      for (let i = 0; i < this.cells.length; i++) {
        this.cells[i].addEventListener('click', function () {
          this.classList.toggle('live')
        })
      }

    };

    /** Pointing a given cell with the x and y coordinates */

    this.position = function (x, y) {
      let index = x + y * this.width;
      return this.cells[index];
    };

    /** Defining the initial state */

    this.setCellState = function (x, y, state) {

      if (state === 'live') {
        this.position(x, y).classList.add(state);
      } else {
        this.position(x, y).classList.remove('live');
      }

    };

    this.firstGlider = function () {
      this.setCellState(3, 1, 'live');
      this.setCellState(3, 2, 'live');
      this.setCellState(3, 3, 'live');
      this.setCellState(2, 3, 'live');
      this.setCellState(1, 2, 'live');
    };

    /** Generating the future state of the cell */

    this.computeCellNextState = function (x, y) {

      let live = 0;

      if (this.position(x - 1, y + 1).classList.contains('live')) {
        live++;
      }
      if (this.position(x, y - 1).classList.contains('live')) {
        live++;
      }
      if (this.position(x + 1, y + 1).classList.contains('live')) {
        live++;
      }

      if (this.position(x - 1, y).classList.contains('live')) {
        live++;
      }
      if (this.position(x + 1, y).classList.contains('live')) {
        live++;
      }

      if (this.position(x - 1, y - 1).classList.contains('live')) {
        live++;
      }
      if (this.position(x, y + 1).classList.contains('live')) {
        live++;
      }
      if (this.position(x + 1, y - 1).classList.contains('live')) {
        live++;
      }



      if (this.position(x, y).classList.contains('live')) {

        if (live === 2 || live === 3) {
          return 1
        } else {
          return 0
        }

      } else {

        if (live === 3) {
          return 1
        } else {
          return 0
        }

      }

    };

    /** Generating the future appearance of our board */

    this.computeNextGeneration = function () {

      let stateFutureBoard = [];

      for (let i = 0; i < boardHeight; i++) {

        for (let j = 0; j < boardWidth; j++) {

          if (i !== 0 && j !== 0 && i !== this.width - 1 && j !== this.height - 1) {
            let newState = this.computeCellNextState(j, i);
            stateFutureBoard.push(newState)
          } else {
            stateFutureBoard.push(0)
          }

        }

      }

      return stateFutureBoard;

    };

    /** Displaying the new state of the table */

    this.printNextGeneration = function () {

      let nextDisplay = this.computeNextGeneration();

      for (let i = 0; i < nextDisplay.length; i++) {

        if (nextDisplay[i] === 0) {
          this.cells[i].classList.remove('live');
        } else {
          this.cells[i].classList.add('live');
        }

      }

    };

    /** play and pause buttons */
    let self = this;

    playBtn.addEventListener('click', function () {
      intervalId = setInterval(() => {
        self.printNextGeneration();
      }, 500)
      playBtn.classList.add('hidden');
      pauseBtn.classList.remove('hidden');
    });

    pauseBtn.addEventListener('click', function () {
      clearInterval(intervalId);
      pauseBtn.classList.add('hidden');
      playBtn.classList.remove('hidden');
    })
  }

});