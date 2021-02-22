// Создайте массив styles с элементами "Jazz", "Blues".

// Добавьте в конец значение "Rock-n-Roll"
// Замените предпоследнее значение с конца на "Classics". Удалите первый элемент из массива и выведите его в консоль
// Добавьте в начало два элемента со значениями "Rap" и "Reggae"
// Выведите массив в консоль.

const styles = ['Jazz', 'Blues'];

styles.push('Rock-n-Roll');

const classicElem = styles.length -2;

styles[classicElem] = 'Classics';

console.log(styles.shift());

styles.unshift('Rap', 'Reggae');

console.log(styles);