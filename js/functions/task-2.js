// Создайте тег-функцию currency, которая форматирует числа до двух знаков после запятой 
// и добавляет знак доллара перед числом в шаблонном литерале.

const num = 23.4534;

function currency(stringArr, num) {
    return stringArr[0] + '$' + num.toFixed(2);
}

console.log(currency `It costs ${num}`);
