// Создать массив любых элементов. Добавить элемент в конец массива. 
// Модифицировать текущий массив. Создать новый массив. Выведите массивы в консоль

const arr = [1, 2, 3, 'Яблоко', 'Груша'];
const addElem = arr.push(6);
const modif = arr.reverse();
const newArr = arr.slice();

console.log(arr);
console.log(newArr);