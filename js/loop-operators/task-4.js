// Нарисуйте в консоле пирамиду на 10 уровней как показано ниже
//         x 9 отст
//        xxx 8
//       xxxxx 7
//      xxxxxxx
//     xxxxxxxxx
//        ...

let i = 1;
const tree = 'x';
const space = ' ';

for (let n = 10; n > 0;) { 
    console.log(space.repeat(n) + tree.repeat(i));
    i+=2;
    n--;
}
