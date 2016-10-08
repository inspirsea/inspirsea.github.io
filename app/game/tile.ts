export class Tile
{

	private context:CanvasRenderingContext2D;
	private x: number;
	private y: number;
	private tileSize: number;
	public alive: boolean = false;
	public currentFrameAlive: boolean = false;
	public checked: boolean = true;

	constructor(x:number, y:number, tileSize: number, context:CanvasRenderingContext2D)
	{
		this.x = x;
		this.y = y;
		this.context = context;
		this.tileSize = tileSize;
	}

	public draw()
	{
		if(this.alive)
			{
				this.context.fillStyle = 'yellow';
	      		this.context.fillRect(this.x, this.y, this.tileSize, this.tileSize);
			} else
			{
				this.context.fillStyle = 'black';
	      		this.context.fillRect(this.x, this.y, this.tileSize, this.tileSize);
			}
	}

	public update(alive: boolean)
	{
		this.alive = alive;
	}

	public updateEdit(alive: boolean)
	{
		this.alive = alive;
		this.currentFrameAlive = alive;
	}
}