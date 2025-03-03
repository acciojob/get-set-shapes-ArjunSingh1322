//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width
		this.height = height
		 get info() {
        return `${this.width} ${this.height}`;
    }
		getArea(){
			let area = this.width*this.height;
			return area
		}
		
	}
}

class Square extends Rectangle {
	constructor(width,height,side){
		super(width,height)
		this.side = side
	    getperimeter(){
			let side = 4*this.side
			return side
		}
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
