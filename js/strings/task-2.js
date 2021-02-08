// Выведите в консоль пирамиду на 9 уровней как показано ниже.
// Используйте String.prototype.repeat().

for (let i = 1; i < 10; i++) { 
    let iCount = i + '';    
    console.log(iCount.repeat(i));   
}