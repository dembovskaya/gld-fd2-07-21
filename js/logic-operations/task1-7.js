// Объявите три переменных: a, b, c. Присвойте им следующие значения: 10, 2, 5.
// Объявите переменную result1 и вычислите сумму значений переменных a, b, c.
// Объявите переменную min и вычислите минимальное значение переменных a, b, c.
// Выведите результат в консоль.
(function() {

    let a = 10;
    let b = 2;
    let c = 5;
    let result1 = a + b + c;
    let min;

    console.log(result1);

    if ((a < b) & (a < c)) {
        min = a;
    } else if ((b < a) & (b < c)) {
        min = b;
    } else {
        min = c;
    }
    console.log(min);

})();

// Объявите переменную a. Если значение переменной равно 0, выведите в консоль true, иначе false.
// Проверьте, что будет появляться в консоли для значений 1, 0, -3.
(function() {

    let a = 1;

    if (a == 0) {
        console.log(true);
    } else {
        console.log(false);
    }

})();

// Объявите две переменных: a, b. Вычислите их сумму и присвойте переменной result.
// Если результат больше 5, выведите его в консоль, иначе умножьте его на 10 и выведите в консоль.
// Данные для тестирования: 2, 5 и 3, 1.
(function() {

    let a = 2;
    let b = 5;
    let result = a + b;

    if (result > 5) {
        console.log(result);
    } else {
        console.log(result * 10);
    }

})();

// Объявите переменную month и проинициализируйте ее числом от 1 до 12.
// Вычислите время года и выведите его в консоль.
(function() {

    let month = 12;

    if((month >= 1) && (month < 3) || (month == 12)) {
    console.log('Winter');
    } else if (month >= 3 && month < 6) {
    console.log('Spring');
    } else if (month >= 6 && month < 9) {
        console.log('Summer');
    } else if (month >= 9 && month < 12) {
        console.log('Fall');
    }

})();

// Перепишите if используя тернарный опертор
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }
(function() {

    let result = (a + b < 4) ? 'Мало' : 'Много';

})(); 

// Перепишите if..else используя несколько тернарных операторов.
// let message;

// if (login == 'Вася') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

(function() {

    let login = 'Вася';

    let message = (login == 'Вася') ? 'Привет':
        (login == 'Директор') ? 'Здравствуйте':
            (login == '') ? 'Нет логина':
                '';

    console.log(message);

})(); 

// Требуется спросить у пользователя (в браузере): фамилию, имя, отчество раздельно (prompt), возраст в годах (prompt), пол (confirm).
// Вывести оператором alert анкету пользователя по примеру:
// ваше ФИО: Иванов Иван Иванович
// ваш возраст в годах: 20
// ваш возраст в днях: 7300
// через 5 лет вам будет: 25
// ваш пол: мужской
// вы на пенсии: нет

(function() {

    let name = prompt('Имя');
    let surname = prompt('Фамилия');
    let patronymic = prompt('Отчество');
    let age = prompt('Возраст');
    let retired;

    let gender = confirm('Ваш пол - мужской?');

    if (gender === true) {
    gender = 'Мужской';
    } else {
    gender = 'Женский';
    }

    if (age > 60) {
    retired = 'Да';
    } else {
    retired = 'Нет';
    }

    alert(`Ваше ФИО: ${name} ${surname} ${patronymic}
        Ваш возраст в годах: ${age}
        Ваш возраст в днях: ${age * 365}
        Через 5 лет вам будет: ${+age + 5}
        Ваш пол: ${gender}
        Вы на пенсии: ${retired}`);

})();