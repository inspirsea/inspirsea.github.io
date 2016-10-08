"use strict";
var tile_1 = require('./tile');
var Board = (function () {
    function Board() {
    }
    Board.prototype.initBoard = function (x, y, tileSize, context) {
        this.context = context;
        this.board = [];
        this.xTiles = (x / tileSize);
        this.yTiles = (y / tileSize);
        for (var i = 0; i < this.xTiles; i++) {
            this.board[i] = [];
        }
        for (var i = 0; i < this.xTiles; i++) {
            for (var j = 0; j < this.yTiles; j++) {
                this.addTile(i, j, tileSize, context);
            }
        }
        context.fillStyle = 'black';
        context.fillRect(0, 0, x, y);
    };
    Board.prototype.draw = function () {
        for (var i = 0; i < this.xTiles; i++) {
            for (var j = 0; j < this.yTiles; j++) {
                this.board[i][j].draw();
            }
        }
    };
    Board.prototype.update = function () {
        this.candidates = [];
        for (var i = 0; i < this.xTiles; i++) {
            for (var j = 0; j < this.yTiles; j++) {
                var tile = this.board[i][j];
                tile.checked = false;
                if (tile.alive) {
                    this.checkIfAlive(i, j, false);
                }
            }
        }
        for (var i = 0; i < this.candidates.length; i++) {
            this.checkIfAlive(this.candidates[i].x, this.candidates[i].y, true);
        }
        for (var i = 0; i < this.xTiles; i++) {
            for (var j = 0; j < this.yTiles; j++) {
                var tile = this.board[i][j];
                tile.currentFrameAlive = tile.alive;
            }
        }
    };
    Board.prototype.addTile = function (x, y, tileSize, context) {
        this.board[x][y] = new tile_1.Tile((x * tileSize), (y * tileSize), tileSize, context);
    };
    Board.prototype.checkIfAlive = function (x, y, candidate) {
        var tile;
        if (this.board[x] != undefined) {
            tile = this.board[x][y];
        }
        if (tile != undefined) {
            if (!tile.checked) {
                var neighbours = 0;
                neighbours += this.check(x - 1, y - 1, candidate);
                neighbours += this.check(x, y - 1, candidate);
                neighbours += this.check(x + 1, y - 1, candidate);
                neighbours += this.check(x - 1, y, candidate);
                neighbours += this.check(x + 1, y, candidate);
                neighbours += this.check(x - 1, y + 1, candidate);
                neighbours += this.check(x, y + 1, candidate);
                neighbours += this.check(x + 1, y + 1, candidate);
                if (neighbours <= 1 || neighbours >= 4) {
                    tile.alive = false;
                }
                else if (neighbours == 2) {
                    tile.alive = tile.alive ? true : false;
                }
                else {
                    tile.alive = true;
                }
                tile.checked = true;
            }
        }
    };
    Board.prototype.check = function (x, y, candidate) {
        if (!candidate) {
            var cordinates = { x: x, y: y };
            this.candidates.push(cordinates);
        }
        if (this.board[x] == undefined) {
            return 0;
        }
        if (this.board[x][y] == undefined) {
            return 0;
        }
        return this.board[x][y].currentFrameAlive ? 1 : 0;
    };
    return Board;
}());
exports.Board = Board;
//# sourceMappingURL=board.js.map