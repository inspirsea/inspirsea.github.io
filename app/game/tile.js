"use strict";
var Tile = (function () {
    function Tile(x, y, tileSize, context) {
        this.alive = false;
        this.currentFrameAlive = false;
        this.checked = true;
        this.x = x;
        this.y = y;
        this.context = context;
        this.tileSize = tileSize;
    }
    Tile.prototype.draw = function () {
        if (this.alive) {
            this.context.fillStyle = 'yellow';
            this.context.fillRect(this.x, this.y, this.tileSize, this.tileSize);
        }
        else {
            this.context.fillStyle = 'black';
            this.context.fillRect(this.x, this.y, this.tileSize, this.tileSize);
        }
    };
    Tile.prototype.update = function (alive) {
        this.alive = alive;
    };
    Tile.prototype.updateEdit = function (alive) {
        this.alive = alive;
        this.currentFrameAlive = alive;
    };
    return Tile;
}());
exports.Tile = Tile;
//# sourceMappingURL=tile.js.map