// Создайте функцию getObjThis(), которая возвращает this. 
// Создайте несколько объектов city1 и city2 по примеру предыдущего задания с методом getCityName.
// Разве что в этом случае метод getCityName должен ссылаться на функцию getObjThis. Проверьте работу метода у обоих объектов.

function getObjThis() {
    return this;
}

const city1 = {
    name: 'Minsk',
    population: '1 mil',
    getCityName: getObjThis,
};

const city2 = {
    name: 'Gomel',
    population: '500 th',
    getCityName: getObjThis,
};

console.log(city1.getCityName());
console.log(city2.getCityName());

