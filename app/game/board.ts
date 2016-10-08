import { Tile } from './tile'

export interface Cordinate
{
	x: number;
	y: number;
}

export class Board
{
	private board: Tile[][];
	private candidates: Cordinate[];
	public xTiles: number;
	public yTiles: number;
	private context: CanvasRenderingContext2D;
	constructor()
	{}

	public initBoard(x: number, y: number, tileSize: number, context: CanvasRenderingContext2D)
	{
		this.context = context;
		this.board = [];

		this.xTiles = (x/tileSize);
		this.yTiles = (y/tileSize);

		for(var i = 0; i < this.xTiles; i++)
		{
			this.board[i] = [];
		}

		for(var i = 0; i < this.xTiles; i++)
		{
			for(var j = 0; j < this.yTiles; j++)
			{
				this.addTile(i, j, tileSize, context);
			}
		}

		context.fillStyle = 'black';
      	context.fillRect(0, 0, x, y);
	}

	public draw()
	{
		for(var i = 0; i < this.xTiles; i++)
		{
			for(var j = 0; j < this.yTiles; j++)
			{
				this.board[i][j].draw();
			}
		}
	}

	public update()
	{
		this.candidates = [];

		for(var i = 0; i < this.xTiles; i++)
		{
			for(var j = 0; j < this.yTiles; j++)
			{
				var tile = this.board[i][j];
				tile.checked = false;
				if(tile.alive)
				{
					this.checkIfAlive(i, j, false);
				}
			}
		}

		for(var i = 0; i < this.candidates.length; i++)
		{
			this.checkIfAlive(this.candidates[i].x, this.candidates[i].y, true);
		}

		for(var i = 0; i < this.xTiles; i++)
		{
			for(var j = 0; j < this.yTiles; j++)
			{
				var tile = this.board[i][j];
				tile.currentFrameAlive = tile.alive;
			}
		}

		
	}

	private addTile(x: number, y: number, tileSize:number, context: CanvasRenderingContext2D)
	{
		this.board[x][y] = new Tile((x * tileSize), (y * tileSize), tileSize, context);
	}

	private checkIfAlive(x: number, y: number, candidate: boolean)
	{
		var tile: Tile;

		if(this.board[x] != undefined)
		{
			tile = this.board[x][y];
		}

		if(tile != undefined)
		{
			if(!tile.checked)
			{
				var neighbours = 0;
				neighbours += this.check(x-1, y-1, candidate);
				neighbours += this.check(x, y-1, candidate);
				neighbours += this.check(x+1, y-1, candidate);
				neighbours += this.check(x-1, y, candidate);
				neighbours += this.check(x+1, y, candidate);
				neighbours += this.check(x-1, y+1, candidate);
				neighbours += this.check(x, y+1, candidate);
				neighbours += this.check(x+1, y+1, candidate);

				if(neighbours <= 1 || neighbours >= 4){
					tile.alive = false;
				} else if(neighbours == 2){
					tile.alive = tile.alive ? true : false;
				} else
				{
					tile.alive = true;
				}

				tile.checked = true;	
			}
		}
	}

	private check(x: number, y: number, candidate: boolean)
	{
		if(!candidate)
		{
			var cordinates: Cordinate = {x: x, y: y};

			this.candidates.push(cordinates);
		}
		if(this.board[x] == undefined)
		{
			return 0;
		}
		if(this.board[x][y] == undefined)
		{
			return 0;
		}

		return this.board[x][y].currentFrameAlive ? 1 : 0;
	}
}