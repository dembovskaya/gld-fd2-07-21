// Используйте предыдущий код. Добавьте в функции onSuccess генерацию исключения. Обработайте даное исключение, используя catch.
// Обратите внимание, что метод print при этом не выполняется.

const prom = new Promise(resolve => setTimeout(resolve('My name is '), 1000));

function onSuccess(param) {
    throw new Error('Error');
}

function print(param) {
    console.log(param);
}

prom.then(onSuccess).then(print).catch(console.log)