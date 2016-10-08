import { Board } from './board'

var intervalId: any;

export class Game {
	
	public board: Board;

	constructor() {
			
	}

	public init(x: number, y: number, tileSize: number, context: CanvasRenderingContext2D)
	{
		this.CreateBoard(x, y, tileSize, context);
	}

	public start()
	{
		var board = this.board;

		var tick = function tick() {
			board.update();
			board.draw();
		}

		intervalId = window.setInterval(tick, 500);
	}

	public stop()
	{
		window.clearInterval(intervalId);
	}

	private CreateBoard(x:number, y: number, tileSize: number, context: CanvasRenderingContext2D){

		this.board = new Board();

		this.board.initBoard(x, y, tileSize, context);
	}
}
