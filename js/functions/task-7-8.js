// Объявите массив arr = [1, 8, 3, 5, 12, 7, 9, 11]. 
// Используя стрелочные функции создайте новый массив из элементов elem * elem,
// которые меньше 100 и отсортируйте его по возрастанию. Выведите результат в консоль.

(function() {
    
    const arr = [1, 8, 3, 5, 12, 7, 9, 11];
    const arr2 = [];

    let arrIncr = arr => {
        for (let i = 0; i < arr.length; i++) {
            let a = arr[i] * arr[i];
                if (a < 100) {
                    arr2.push(a);
            }
        }
        return arr2.sort((a, b) => a - b);
    } 
        
    console.log(arrIncr(arr));
    
})();