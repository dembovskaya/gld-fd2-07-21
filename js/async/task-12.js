// Создайте асинхронную функцию myFirstAsyncFunction, используя FD (Function Declaration). 
// Функция должна принимать два параметра a и b и возвращать сумму a+b.
// Выведите значение, которое вернет функция в консоль. Обработаете промис и выведите значение в консоль.

const myFirstAsyncFunction = async function(a, b) {
    return a + b;
};

console.log(myFirstAsyncFunction(4, 8));
myFirstAsyncFunction(4, 8).then(console.log);