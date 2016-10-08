import { Input, Component, ViewChild, ElementRef, OnInit, OnChanges } from '@angular/core';
import { Game } from './game/game';
import { Board } from './game/board'

@Component({
    selector: 'app',
    templateUrl: 'app/app.html',
    styles: [`

    	table {
    		margin: 0;
		    padding: 0;
		    border: 0;
		    font-size: 100%;
		    font: inherit;
		    vertical-align: baseline;
    	}

    	tr {
    		margin: 0;
		    padding: 0;
		    border: 0;
		    font-size: 100%;
		    font: inherit;
		    vertical-align: baseline;
    	}

    	td {
    		margin: 0;
		    padding: 0;
		    border: 0;
		    font-size: 100%;
		    font: inherit;
		    vertical-align: baseline;
		    border: 1px solid gray;
		    border-collapse:collapse;
    	}

	    .marked {
	      background: yellow !important
	    }
  `]
})
export class AppComponent implements OnChanges{

	@ViewChild("game") gameCanvas: ElementRef;

	private game:Game;
	public board: Board;
	public x: number = 1200;
	public y: number = 800;
	public editMode: boolean;
	_tileSize: number = 20;
	get tileSize(): number{
		return this._tileSize;
	}

	set tileSize(value: number){
		this._tileSize = value;
		this.loadGame();
	}

	constructor()
	{}

	ngOnInit()
	{
		this.loadGame();
	}

	ngOnChanges()
	{
		this.loadGame();
	}

	public loadGame()
	{
		this.editMode = true;

		let context: CanvasRenderingContext2D = this.gameCanvas.nativeElement.getContext("2d");
      
      	this.game = new Game();
      	this.game.init(this.x, this.y, this.tileSize, context);
      	this.createEditor()

      	this.game.stop();
	}

	public start()
	{
		this.editMode = false;
		this.game.board.draw();
		this.game.start();
	}

	private createEditor()
	{
		this.board = this.game.board;
	}
 }
