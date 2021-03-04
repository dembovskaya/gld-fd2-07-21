// Memoization. Создать функцию fiboMemo для вычисления чисел Фибоначчи по формуле F0 = 0, F1 = 1, Fn = Fn-1 + Fn-2.
// Функция должна хранить те значения, которые она уже вычисляла.
// Используя методы console.time(), console.timeEnd() или performance.now() определите время вычисления функции fibo и функции fiboMemo.

function fibonacci() {
    const memory = {};

    return function fibo(num) {
        if (num in memory) {
            return memory[num];
        } else if (num === 0) {
            return 0;
        } else if (num === 1) {
            return 1;
        }

        const result = fibo(num - 1) + fibo(num - 2);
        memory[num] = result;

        return result;
    };
}

const fiboMemo = fibonacci();

console.time('time');
console.log(fiboMemo(10));
console.timeEnd('time');