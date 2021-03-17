// Реализовать две оставшиеся иерархии в виде классов (которые вы не делали в классе). Придумать для каждого класса по 1-2 уникальных свойств, 1-2 методов
// (методы можно не сильно реализовывать, а просто выводить что-то в консоль-лог внутри, 
// чтобы знать, что он вызвался в какой-то момент) 

class Vehicle {
    constructor(wheels) {
        this.wheels = wheels;
    }

    checkWheels() {
        console.log(`${this.wheels + 1} one more for safe`);
    }
}

class Truck extends Vehicle{
    constructor(wheels, capacity) {
        super(wheels);
        this.capacity = capacity;
    }

    checkTruck() {
        console.log(`${this.wheels} with ${this.capacity} power kilo tons`);
    }
}

class Car extends Vehicle {
    constructor(brand, maxSpeed) {
        super(4);
        this.brand = brand;
        this.maxSpeed = maxSpeed;
    }

    checkCar() {
        console.log(`${this.wheels} in ${this.brand} type of car`);
    }
}

class Vaz extends Car {
    constructor(brand) {
        super(brand, 120);
    }

    getMaxSpeed() {
        console.log(`${this.brand} max speed is ${this.maxSpeed}, haha`);
    }
}

class Ford extends Car {
    constructor (brand) {
        super(brand, 160);
    }

    getMaxSpeed() {
        console.log(`${this.brand} max speed is ${this.maxSpeed}`);
    }
}

class Vaz03 extends Vaz {
    constructor(model) {
        super('vaz');
        this.model = model;
    }

    checkBrand() {
        console.log(`${this.brand}: ${this.model} model`);
    }
}

class FordMondeo extends Ford {
    constructor(model, luxury) {
        super('ford');
        this.model = model;
        this.luxury = luxury;
    }

    isLuxuryLife() {
        console.log(`this ${this.brand} is ${this.luxury}`);
    }
}
const car = new FordMondeo('Ford', true);
car.checkWheels();
car.checkCar();
car.isLuxuryLife();