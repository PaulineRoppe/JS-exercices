class circle {
	constructor(xPos, yPos, radius){
		this.xPos = 2;
		this.yPos = 4;
		this.radius = 3;
		this.move(xOffset, yOffset);
	} get surface() {
		return this.xPos*this.yPos;
	}
}
console.log(this.move);