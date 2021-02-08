// Проверить, содержит ли строка второе вхождение подстроки, вернуть true или false. 
// Используйте String.prototype.includes(), String.prototype.indexOf()

const str = 'Hello world';
let substr = 'l';

function test(str, substr) {
    if (str.includes(substr)) {
        const index = str.indexOf(substr);
        return str.includes(substr, index + substr.length);
    } 

    return false;
}

console.log(test(str, substr));