// Создать массив [3, 0, -1, 12, -2, -4, 0, 7, 2]. 
// На его основе создать новый массив [-1, -2, -4, 0, 0, 3, 12, 7, 2].

// первая часть - отрицательные числа в том же порядке
// вторая часть - нули
// третья часть - положительные числа в том же порядке

const arr = [3, 0, -1, 12, -2, -4, 0, 7, 2];
const newArr = arr.filter(elem => elem < 0);
const newArr2 = arr.filter(elem => elem === 0);
const newArr3 = arr.filter(elem => elem > 0);
const finalArr = (newArr.concat(newArr2, newArr3));

console.log(finalArr);