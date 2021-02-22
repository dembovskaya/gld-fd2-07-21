// Получить из строки 'a big brown fox jumps over the lazy dog' массив слов, 
// который содержит элементы, длина которых не больше 3 символа. Вывести массив в консоль.

const string = 'a big brown fox jumps over the lazy dog';
const arr = string.split(' ');
const arr2 = arr.filter(elem => elem.length < 4);

console.log(arr2);