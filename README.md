Game of Life

The aim of this exercise is to write a simple application in JavaScript that will show an interactive animation based on one of the first and best known examples of the cellular automaton, invented in 1970 by British mathematician John Conway. We will write in pure JavaScript, based on the assumptions of object oriented programming.

→ you can read about Game Of Life here: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

→ watch a few minutes video here: https://www.youtube.com/watch?v=C2vgICfQawE

## Let us recall the basic assumptions:

    Game of Life is a so-called zero-player game that develops based on its original state.
    Cells arise and die on a two-dimensional board, and their condition depends on their environment (eight cells being their neighbors):
        every living cell with less than two living neighbors dies because of too little population,
        every living cell with two or three living neighbors lives on,
        every living cell with more than three living neighbors dies because of overcrowding,
        every dead cell comes alive when it has exactly three living neighbors.

The user should declare on which board he wants to watch the animation (giving it the width and height). It should display a board with the start animation (eg a single glider), on which he can turn on and off individual fields with the click of a mouse. Below the board should be a PLAY and PAUSE button, which will start or stop the animation in a given state, so that at any time the user can stop the animation, change its status and turn it on again.
