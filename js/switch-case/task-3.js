// Переменная lang может принимать 2 значения: 'ru' и 'en'.
// Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке,
// а если имеет значение 'en' – то на английском. Решите задачу через switch-case.

let lang = 'ru';
let arr;

switch (lang) {
    case 'ru':
        arr = [' Пн', ' Вт', ' Ср', ' Чт', ' Пт', ' Сб', ' Вс'];
        break;
    case 'en':
        arr = [' Mon', ' Tue', ' Wed', ' Thu', ' Fri', ' Sat', ' Sun'];
}

alert(array);