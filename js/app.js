document.addEventListener('DOMContentLoaded', (event) => {
console.log('DOM fully loaded and parsed')

function GameOfLife(boardWidth, boardHeight) {

    this.width = boardWidth;
    this.height =boardHeight;

}

let game = new GameOfLife(10,10);
console.log(game);




















});