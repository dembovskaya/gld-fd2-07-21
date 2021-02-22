// Подсчитать в строке "dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh" отдельно количество букв r, k, t и вывести в консоль


const numR = ('dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh'.split('r').length - 1);
const numK = ('dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh'.split('k').length - 1);
const numT = ('dskjdhfkjshdfkjhsdkjureyteiruyiqywehjkh'.split('t').length - 1);

console.log(numR, numK, numT);