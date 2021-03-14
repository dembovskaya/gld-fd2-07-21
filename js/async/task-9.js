// Создайте два промиса. Первый промис возвращает объект { name: "Anna" } через 2с, а второй промис возвращает объект {age: 16} через 3 с.
// Получите результаты работы двух промисов, объедините свойства объектов и выведите в консоль. Используйте Promise.all.

const objName = new Promise( (resolve, reject) => setTimeout(() => resolve( {name: 'Anna'} ), 2000) );
const objAge = new Promise( (resolve, reject) => setTimeout(() => resolve( {age: 16} ), 3000));

Promise.all([objName, objAge]).then((array) => {
    const result = Object.assign(array[0], array[1]);
    console.log(result);
});