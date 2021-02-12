// Создать функцию, которая выводит в консоль строчку в формате 'символ - код' для кодов в диапазоне 78000 - 78030 (все пары в диапазоне).
// Используйте String.prototype.fromCodePoint().

function indicatorOutput(code) {
    while (code >= 78000 & code <= 78030) {
        console.log(`${String.fromCodePoint(code)} - ${code}`);
        
        code++;
    }
}

indicatorOutput(78000);
