// Решать как для браузера. Создайте функцию-конструктор Calculator, который создаёт объекты с четырьмя методами:
// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму введённых свойств.
// multiply() возвращает произведение введённых свойств.
// history() возвращает историю вызванных функций при работе с объектом начиная с момента его создания.

// function Calculator() {
//     const property = [];

//     this.read = function read() {
//         this.val1 = +prompt('1st value');
//         this.val2 = +prompt('2d value');
//         property.push(this.read.name);
//     };

//     this.read();

//     this.sum = function sum() {
//         property.push(this.sum.name);
//         return this.val1 + this.val2;
//     };

//     this.multiply = function multiply() {
//         property.push(this.multiply.name);
//         return this.val1 * this.val2;
//     };
    
//     this.history = function history() {
//         property.push(this.history.name);
//         return property;
//     };

// }

// const calc = new Calculator();
// console.log(read(), calc.sum(), calc.multiply(), calc.history());
