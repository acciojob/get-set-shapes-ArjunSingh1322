// //complete this code

class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    // Getter methods
    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    // Method to calculate area
    getArea() {
        return this._width * this._height;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side); // Both width and height are equal to side
    }

    // Method to calculate perimeter
    getPerimeter() {
        return 4 * this.width; // or this.height (both are same)
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;


















// class Rectangle {
// 	constructor(width,height){
// 		this.width = width
// 		this.height = height
// 		 get info() {
//         return `${this.width} ${this.height}`;
//     }
// 		getArea(){
// 			let area = this.width*this.height;
// 			return area
// 		}
		
// 	}
// }

// class Square extends Rectangle {
// 	constructor(width,height,side){
// 		super(width,height)
// 		this.side = side
// 	    getperimeter(){
// 			let side = 4*this.side
// 			return side
// 		}
// 	}
// }

// // Do not change the code below this line
// window.Rectangle = Rectangle;
// window.Square = Square;
