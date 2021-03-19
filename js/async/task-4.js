// Создайте промис, который переходит в состояние resolved через 3с. (Используйте setTimeout) и возвращает строку 'Promise Data'.
// Получите данные промиса и выведите их в консоль

const prom = new Promise(resolve => setTimeout(resolve('Promise Data'), 3000));
prom.then(console.log);
