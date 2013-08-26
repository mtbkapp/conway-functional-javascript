// implmentation adapted from Clojure Programming by Emerick, Grande, Craper
// Clojure source at: https://github.com/clojurebook/ClojureProgramming/blob/master/ch03-game-of-life/src/com/clojurebook/collections/life.clj

function makeGame() {
    var width = 75;
    var height = 40;

    var onEarth = function(cell) {
        return cell[0] >= 0 &&
               cell[0] < width &&
               cell[1] >= 0 &&
               cell[1] < height;
    };


    var crossProduct = function(x, y) {
        return _.flatten(_.map(y, function(yi) {
            return _.map(x, function(xi) {
                return [xi, yi];
            });
        }), true);
    };

    var addCell = function(cellX, cellY) {
        return [cellX[0] + cellY[0], cellX[1] + cellY[1]];
    };

    var neighbors = function(cell) {
        var d = [-1, 0, 1];
        return _.chain(crossProduct(d,d))
                    .reduce(function(neighbors, delta) {
                        if (delta[0] == 0 && delta[1] == 0) {
                            return neighbors;
                        }
                        
                        return neighbors.concat([addCell(delta, cell)]);
                    }, [])
                    .filter(onEarth)
                    .value();
    };

    var frequencyReducer = function(freqs, cell) {
        var id = cell.toString();
        if (_.has(freqs, id)) {
            freqs[id].n++;
        } else {
            freqs[id] = { cell: cell, n: 1 };
        }

        return freqs;
    };

    var isSameCell = function(cellX, cellY) {
        return cellX[0] == cellY[0] &&
               cellX[1] == cellY[1];
    };

    var step = function(state) {
        return _.chain(state)
                .map(neighbors)  //get all the neighbor cells, there may be multiples of each cell
                .flatten(true)
                .reduce(frequencyReducer, {})  // count how many duplicate cells there are 
                .filter(function(f) {
                    //base on the count I got in the previous step
                    //get rid of the cells that shouldn't live
                    return ((_.some(state, partial(isSameCell, f.cell))) ?
                                (f.n == 2 || f.n == 3) : 
                                (f.n == 3));
                })
                .map(function(f) {
                    return f.cell
                })
                .value();
    };

    return {
        height: height,
        width: width,
        wait: 100,
        init: [[1,3], [2,3], [3,3], [3,2], [2,1]], //it's a glider
        transform: step 
    };
};
