// Создать массив любых элементов. Получить случайный элемент из массива и вывести его в консоль.

const arr = [1, 2, 3, 'Яблоко', 'Груша'];

const elem = arr[Math.floor(Math.random()*arr.length)];

console.log(elem);