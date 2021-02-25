// Создать массив с дублями. Найти первый элемент, который дублируется. 
// Заменить этот элемент и все его копии на символ '*'. Вывести массив в консоль.

const arr = [1, 2, 2, 3, 'Яблоко', 'Груша', 'Груша'];

const index = arr.findIndex((elem, index) => arr.slice(index + 1).some(elem2 => elem === elem2) );
const double = arr[index];
const newArr = arr.map(elem3 => elem3 === double ? '*' : elem3);

console.log(newArr);
