document.addEventListener('DOMContentLoaded', () => {
//console.log('DOM fully loaded and parsed');

    /** Creating a game management object */

    function GameOfLife(boardWidth, boardHeight) {

        this.width = boardWidth;
        this.height = boardHeight;

        /** Building a board */

        this.board = document.getElementById('board');
        //console.log(board);
        this.cells = [];

        this.createBoard = function () {

            this.board.style.width = (this.width * 10) + 'px';
            this.board.style.height = (this.height * 10) + 'px';

            let nrAllDiv = this.width * this.height;
            //console.log(nrAllDiv);

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
        //console.log(this.cells)

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
                //console.log('1');
                live++;
            }
            if (this.position(x, y - 1).classList.contains('live')) {
                //console.log('2');
                live++;
            }
            if (this.position(x + 1, y + 1).classList.contains('live')) {
                //console.log('3');
                live++;
            }

            if (this.position(x - 1, y).classList.contains('live')) {
                //console.log('4');
                live++;
            }
            if (this.position(x + 1, y).classList.contains('live')) {
                //console.log('5');
                live++;
            }

            if (this.position(x - 1, y - 1).classList.contains('live')) {
                //console.log('6');
                live++;
            }
            if (this.position(x, y + 1).classList.contains('live')) {
                //console.log('7');
                live++;
            }
            if (this.position(x + 1, y - 1).classList.contains('live')) {
                //console.log('8');
                live++;
            }

            //console.warn(live);

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

            //console.log(nextDisplay)

        };

        // test ;) Don't Worry, Be Happy

        // let playTest = document.getElementById('play');
        //
        // playTest.addEventListener('click', function () {
        //     //e.preventDefault();
        //     console.log('click');
        //     game.printNextGeneration()
        // });


        /** play and pause buttons */

        let playBtn = document.getElementById('play');
        let pauseBtn = document.getElementById('pause');




        playBtn.addEventListener('click', function () {
            intervalId = setInterval(() => {
                game.printNextGeneration()
            }, 500)
        });

        pauseBtn.addEventListener('click',function () {
            clearInterval(intervalId);
        })
    }

    let game = new GameOfLife(10, 10);
    game.createBoard();
    //console.log(game.position(1,1));
    game.firstGlider();
    //game.computeCellNextState(2, 2);
    //console.log(game.computeCellNextState(1,1));
    //console.log(game.computeCellNextState(2, 2)); //dead
    //console.log(game.computeCellNextState(3, 3)); //live
    //console.log(game.computeNextGeneration());
    //console.warn(game.printNextGeneration());

});