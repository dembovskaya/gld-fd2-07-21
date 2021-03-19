// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

const prom = new Promise((response, reject) => {
    console.log('Promise is created');
});

console.log(prom);