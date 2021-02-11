// Объявите три переменных: hour, minute, second. Присвойте им следующие значения: 4, 35, 5.
// Выведите в консоль время в формате 04:35:05.
// Используйте String.prototype.padStart().


const hour = 4;
const minute = 35;
const second = 5;

const hourP = ('' + hour).padStart(2, '0');
const minuteP = ('' + minute).padStart(3, ':');
const secP = (('' + second).padStart(2, '0')).padStart(3, ':');

console.log( `${hourP}${minuteP}${secP}` );