$(function() {
    var randomTransform = function(state) {
        return repeatedly(100, function() {
            return [_.random(0, game.width), 
                    _.random(0, game.height)];
        });
    };

    //get a team's implmentation of the game;
    var game = _.defaults(makeGame(), {
        wait: 250,
        width: 75,
        height: 40,
        init: [],
        transform: randomTransform
    });

    var iterate = function(state) {
        var newState = game.transform(_.clone(state));
        
        _.each(state, die); //set previous cells to 
        _.each(newState, live);
        setTimeout(partial(iterate, newState), game.wait);
    };

    var cellId = function(cell) {
        return ['cell-', cell[0], '-', cell[1]].join('');
    };

    var gridHtml = function(width, height) {
        return _.flatten(repeatedly(height, function(y) {
            var cells = repeatedly(width, function(x) {
                return ['<td class="dead" id="', cellId([x, y]) , '"></td>'];
            });

            return ['<tr>', cells, '</tr>'];
        })).join('');
    };

    var drawGrid = function(width, height) {
        $(gridHtml(width, height)).appendTo($('#world'));
    };

    var cellSwitchFun = function(from, to) {
        return function(cell) {
            $('#' + cellId(cell))
                .removeClass(from)
                .addClass(to);
        };
    };

    var die = cellSwitchFun('alive', 'dead');
    var live = cellSwitchFun('dead', 'alive');
    
    drawGrid(game.width, game.height);
    $('#go').on('click', _.once(partial(iterate, game.init)));
});
