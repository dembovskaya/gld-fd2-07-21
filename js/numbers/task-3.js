// Дан массив numbers. Найдите среднее арифметическое его элементов. 
// Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

let numbers = [12, 15, 20, 25, 59, 79];

let sum = numbers.reduce((a, b) => a + b, 0);

console.log(sum / numbers.length);

