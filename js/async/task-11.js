// Для браузера. Создайте промис, который перейдет в состояние resolve через 5с и вернет строку 'Promise Data'. 
// Создайте второй промис, который перейдет в состояние rejected по клику на кнопку. 
// Добавьте обработчик для кнопки. Используя метод race организуйте отмену промиса.

const prom1 = new Promise(resolve => {
    setTimeout(() => resolve('Promise Data'), 5000);
});

let rejectP2;

const prom2 = new Promise((reject) => (rejectP2 = reject));

const rejectButton2 = document.querySelector('.fourth-button');
rejectButton2.addEventListener('click', () => rejectP2('Promise Error'));

Promise.race([prom1, prom2]).then(console.log).catch(console.warn);