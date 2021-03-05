// Создайте функции toConsoleLog, toConsoleError, toConsoleTrace, toConsoleTable с одним параметром.
// Функции должна выводить значение параметра в консоль в соответствующем режиме.
// Создайте функцию splitToWords с двумя параметрами: msg и callback.
// Функция должна разделять строку на слова и использовать колбек для отображения слов.
// Если второй параметр не задан, функция должна возвращать массив слов.

function toConsoleLog(value) {
    console.log(value);
}

toConsoleLog('firstfunction');


function toConsoleError(value) {
    console.error(value);
}

toConsoleError('secondfunction');


function toConsoleTrace(value) {
    console.trace(value);
}

toConsoleTrace('thirdfunction');


function toConsoleTable(value) {
    console.table(value);
}

toConsoleTable(['apples', 'oranges', 'bananas']);


function splitToWords(msg, callback) {
    if (callback) {
        return msg.split(' ').forEach(callback);
    } else {
        return msg.split(' ');
    }
}


splitToWords('one two three four five', toConsoleLog);
console.log(splitToWords('one two three four five'));