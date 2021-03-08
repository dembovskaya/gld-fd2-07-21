// Создать виртуальную рыбку, которая имеет свои координаты (например, в аквариуме) по x, y и z, 
// у нее есть цвет, размер, она двигается, кушает, может размножаться.
// У неё должно быть приватное поле содержащее многообразие еды которое она ест. +
// При попытке скормить рыбке что-то, она должна выбрать только то, что она может скушать. +
// Создать вторую рыбку используя существующий класс (без наследования от первой рыбки), которая кушает на один продукт больше, чем оригинальная рыбка.
// Продумать дополнительные методы и их реализацию (тут надо всё сделать чтоб работало, а не просто консоль-логи), 
// которые позволят управлять такой рыбкой.

class Shark {
    #ration = ['fishes', 'sharks', 'molluscs', 'marine mammals'];
    constructor(color, size, name, x, y, z) {
        this.color = color;
        this.size = size;
        this.name = name;
        this.x = x;
        this.y = y;
        this.z = z;
    }

    move() {
        console.log(`preying on you`);
        return [this.x++, this.y++, this.z++];
    }

    eat(food) {

        if(this.#ration.includes(food)) {
            this.size++;
            return 'nice one';
        } else {
            return 'ugh, crazy? no way';
        }
    }

    spawn() {
        let littleName = `just little copy of ${this.name}`;
        let Littlesize = --this.size;
        const miniCopy = new Shark(this.color, Littlesize, littleName,  1, 3, 2);
        return miniCopy;
    }
}

const shark = new Shark('grey', 10, 'Sharky', 2, 4, 3);
const miniShark = new Shark('white', 7, 'LittleShark');

console.log(shark.spawn())
