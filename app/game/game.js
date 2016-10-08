"use strict";
var board_1 = require('./board');
var intervalId;
var Game = (function () {
    function Game() {
    }
    Game.prototype.init = function (x, y, tileSize, context) {
        this.CreateBoard(x, y, tileSize, context);
    };
    Game.prototype.start = function () {
        var board = this.board;
        var tick = function tick() {
            board.update();
            board.draw();
        };
        intervalId = window.setInterval(tick, 500);
    };
    Game.prototype.stop = function () {
        window.clearInterval(intervalId);
    };
    Game.prototype.CreateBoard = function (x, y, tileSize, context) {
        this.board = new board_1.Board();
        this.board.initBoard(x, y, tileSize, context);
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map