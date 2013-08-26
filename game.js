function makeGame() {
    /*
     * Conway's Game of Life
     * ----------------------------- 
     *  Any live cell with fewer than two live neighbours dies, as if caused by under-population.
     *  Any live cell with two or three live neighbours lives on to the next generation.
     *  Any live cell with more than three live neighbours dies, as if by overcrowding.
     *  Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
     *  
     */

    /*
     * Other rules specific to this activity are on the html page
     */

    /*
     * What to implement
     * ---------------------------------
     * The getGame function is to return an object that configures the game.
     * The keys the object should contain are: 
     *      width: - the width of the world as a number of cells, defaults to: 75 
     *      height: - the height of the world as a number of cells, defaults to: 40,
     *      init: - the initial state of the board, defaults to: [],
     *      transform - a function that takes the current state of the world and transforms it
     *                  to the next state, defaults to return random states.
     *                  This function is where Conway's rules should be implemented 
     *      wait - how long to wait, in ms, before in between calls to transform, default 250
     *
     * The "schema" for the state of the board.  An array of the of arrays where the inner array
     * is the x, y position of a live cell.  All other cells will be assumed to be dead.  The origin
     * of the world is at the upper left corner.  The x is the number of cells to the left.  The y
     * is the number of cells down.  The origin is at [0,0].
     *
     * Example:
     * [[23,33],[22,33],[22,34]] 
     * cells at [23,33], [22,33], [22,34] are alive.  all others are dead.
     *
     *
     */


    /*
     * A good test to see if you implemented it correctly would be to make a glider for the
     * initial state.
     */
    return {

    };
};
