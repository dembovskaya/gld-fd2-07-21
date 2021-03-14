// Для браузера. Создайте литерал объекта handlePromise со следующими свойствами: promise, resolve, reject, onSuccess, onError.
// Проинициализируйте первые три свойства null, а последние два функциями, которые принимают один параметр и выводят в консоль сообщения:
// первая - Promise is resolved with data: ${paramName}
// вторая - Promise is rejected with error: ${paramName}
// Создайте три кнопки и три обработчика события click для этих кнопок.
// Первый обработчик, создает промис, заполняет первые три свойства, описаного выше объекта:
// свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции resolve и reject.
// Следующие два обработчика запускают методы resolve и reject.

const handlePromise = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess(paramName) {
        console.log(`Promise is resolved with data: ${paramName}`);
    },
    onError(paramName) {
        console.log(`Promise is rejected with error: ${paramName}`);
    },
};

const createButton = document.querySelector('.first-button');
const resolveButton = document.querySelector('.sec-button');
const rejectButton = document.querySelector('.third-button');

function promButtonCreate() {
    const promise = new Promise((resolve, reject) => {
        handlePromise.resolve = resolve;
        handlePromise.reject = reject;
})

handlePromise.promise = promise;
console.log(promise);

promise.then(handlePromise.onSuccess)
promise.catch(handlePromise.onError)
}

function promButtonResolve() {
    return handlePromise.resolve('Resolve');
}

function promButtonReject() {
    return handlePromise.reject('Reject');
}

createButton.addEventListener('click', promButtonCreate);
resolveButton.addEventListener('click', promButtonResolve);
rejectButton.addEventListener('click', promButtonReject);