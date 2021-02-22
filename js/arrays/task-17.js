// Создать массив целых чисел. На его основе создать массивы – представления этих же чисел в бинарном, 
// восьмеричном и шестнадцатеричном виде. Вывести эти массивы в консоль.

const arr = [2, 4, 6, 8, 10];
const arr2 = arr.map(elem => elem.toString(2));
const arr3 = arr.map(elem => elem.toString(8));
const arr4 = arr.map(elem => elem.toString(16));

console.log(arr2, arr3, arr4);