// Создать массив. Получить последний элемент массива. 
// Без удаления этого элемента из массива. С удалением этого элемента из массива. Выведите массивы в консоль

const arr1 = [2, 4, 6, 8, 10];
const lastItem = arr1[arr1.length - 1];

console.log(lastItem);
console.log(arr1);

const arr2 = [1, 2, 3, 4, 5];
const lastItem2 = arr2.pop();

console.log(lastItem2);
console.log(arr2);