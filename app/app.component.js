"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var game_1 = require('./game/game');
var AppComponent = (function () {
    function AppComponent() {
        this.x = 1200;
        this.y = 800;
        this._tileSize = 20;
    }
    Object.defineProperty(AppComponent.prototype, "tileSize", {
        get: function () {
            return this._tileSize;
        },
        set: function (value) {
            this._tileSize = value;
            this.loadGame();
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        this.loadGame();
    };
    AppComponent.prototype.ngOnChanges = function () {
        this.loadGame();
    };
    AppComponent.prototype.loadGame = function () {
        this.editMode = true;
        var context = this.gameCanvas.nativeElement.getContext("2d");
        this.game = new game_1.Game();
        this.game.init(this.x, this.y, this.tileSize, context);
        this.createEditor();
        this.game.stop();
    };
    AppComponent.prototype.start = function () {
        this.editMode = false;
        this.game.board.draw();
        this.game.start();
    };
    AppComponent.prototype.createEditor = function () {
        this.board = this.game.board;
    };
    __decorate([
        core_1.ViewChild("game"), 
        __metadata('design:type', core_1.ElementRef)
    ], AppComponent.prototype, "gameCanvas", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'app/app.html',
            styles: ["\n\n    \ttable {\n    \t\tmargin: 0;\n\t\t    padding: 0;\n\t\t    border: 0;\n\t\t    font-size: 100%;\n\t\t    font: inherit;\n\t\t    vertical-align: baseline;\n    \t}\n\n    \ttr {\n    \t\tmargin: 0;\n\t\t    padding: 0;\n\t\t    border: 0;\n\t\t    font-size: 100%;\n\t\t    font: inherit;\n\t\t    vertical-align: baseline;\n    \t}\n\n    \ttd {\n    \t\tmargin: 0;\n\t\t    padding: 0;\n\t\t    border: 0;\n\t\t    font-size: 100%;\n\t\t    font: inherit;\n\t\t    vertical-align: baseline;\n\t\t    border: 1px solid gray;\n\t\t    border-collapse:collapse;\n    \t}\n\n\t    .marked {\n\t      background: yellow !important\n\t    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map