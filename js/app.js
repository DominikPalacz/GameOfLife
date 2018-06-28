document.addEventListener('DOMContentLoaded', () => {
//console.log('DOM fully loaded and parsed');

    function GameOfLife(boardWidth, boardHeight) {

        this.width = boardWidth;
        this.height = boardHeight;

        this.board = document.getElementById('board');
        //console.log(board);

        this.createBoard = function () {
            this.board.style.width = (this.width * 10) + 'px';
            this.board.style.height = (this.height * 10) + 'px';

            let nrAllDiv = this.width * this.height;
            //console.log(nrAllDiv);

            for (let i = nrAllDiv; i > 0; i--) {
                let div = document.createElement('div');
                board.append(div);
            }

        }

    }

    let game = new GameOfLife(10, 10);

    game.createBoard();


});