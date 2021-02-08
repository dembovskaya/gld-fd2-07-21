// Проверить, содержит ли строка второе вхождение подстроки, вернуть true или false. 
// Используйте String.prototype.includes(), String.prototype.indexOf()

const str = 'Hello world';
let substr = 'l';

console.log(str.includes(substr));

if (substr >= 2) {
    console.log(true);
} else {
    console.log(false);
}
