// Напишите функцию randomInRange которая принимает два параметра - 
// начало и конец промежутка, в котором искать случайное значение.
// Функция должна каждый раз возвращать новое случайное число.

function randomInRange(min, max) {
    console.log(Math.random() * (max - min) + min);
}

randomInRange(1, 100);
