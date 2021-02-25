// Создать массив с дублями элементов. 
// На его основе создать новый массив уникальных элементов (удалить дубли). Вывести новый массив в консоль.

const arr = [1, 2, 2, 3, 'Яблоко', 'Груша'];

const noRepeatArr = arr.filter((elem, index) => arr.indexOf(elem) === index);

console.log(noRepeatArr);