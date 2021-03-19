// Используйте предыдущее задание. Пусть теперь второй промис переходит в состояние rejected со значением "Promise Error".
// Измените код, чтобы обработать эту ситуацию. Используйте Promise.allSettled

const objName = new Promise( (resolve, reject) => setTimeout(() => resolve( {name: 'Anna'} ), 2000) );
const objAge = new Promise( (resolve, reject) => setTimeout(() => reject('Promise Error'), 3000));

Promise.allSettled([objName, objAge]).then((array) => {
    console.log(array);
});