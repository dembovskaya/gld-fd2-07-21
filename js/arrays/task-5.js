// Создать массив чисел в диапазоне от 0 до 100. Подсчитать и вывети сумму тех элементов, которые больше 50

const arr = [];

for (let i = 0; i <= 100; i++) {
    arr.push(i);
}

console.log(arr.filter(elem => elem > 50).reduce((a, b) => a + b));
