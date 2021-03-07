class Shape {
    constructor(figureType) {
        this.type = figureType;
    }

    description() {
        return `This is a ${this.type}`;
    }
}

class Polygon extends Shape {
    constructor(angles) {
        super('Polygon');
        this.angles = angles;
    }

    getAnglesCount() {
        console.log(`Count of angles in polygon: ${this.angles}`);
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super('Rectangle');
        this.height = height;
        this.width = width;
    }

    getArea() {
        console.log(this.height * this.width);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }

    getDiameter() {
        console.log(this.radius * 2);
    }
}

class Square extends Polygon {
    constructor(sideLength) {
        super(4);
        this.sideLength = sideLength;
        this.type = 'Square';
    }

    getArea() {
        console.log(Math.pow(sideLength, 2));
    }
}

class FilledPolygon extends Polygon {
    constructor(color, angles) {
        super(angles);
        this.color = color;
    }

    testFilledPol() {
        console.log(`${this.angles} in ${this.color} filled polygon`);
    }
}

class FilledCircle extends Circle {
    constructor(color, radius) {
        super(radius);
        this.color = color;
    }

    testFilledCircle() {
        console.log(`${this.radius} in ${this.color} filled ${this.type}`);
    }
}

class Dot extends FilledCircle {
    constructor(color, radius) {
        super(color, radius);
    }

    testDot() {
        console.log('This is just dot');
    }
}

const dot = new Dot('black', 10);
const filledCircle = new FilledCircle(5, 8);
const circle = new Circle(2);

const rectangle = new Rectangle(2,7);

const polygon = new Polygon(11);
const square = new Square(14);
const filledPolygon = new FilledPolygon('red', 13);

console.log(circle, filledCircle, dot);
console.log(rectangle);
console.log(polygon, square, filledPolygon, rectangle.getArea());

