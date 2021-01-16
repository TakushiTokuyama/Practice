'use strict'
// Q.11
// let arry = [{ id: 1, name: 'morita' }, { id: 2, name: 'kenji' }, { id: 4, name: 'uro' }, { id: 3, name: 'ken' }];

// var sortByArry = arry.sort(function (a, b) {
//     return a.id - b.id;
// });

// console.log(sortByArry);

// var sortByArry = arry.sort(function (a, b) {
//     if (a.id < b.id) {
//         return -1;
//     }
//     if (a.id > b.id) {
//         return 1;
//     }
//     return 0;
// });

// console.log(sortByArry);

// Q.12
// function def(a = 5, b = 7) {
//     return a + b;
// }

// console.log(def(1));

// function def(a = 5, b = 0) {
//     console.log(typeof b);
//     return a + b;
// }

// console.log(def());

// const array = [a = 5, b = 7];

// console.log(array[0] = 1, array[1]);

// Q.13
// var count = 0;
// function next() {
//     return ++count;
// }

// const setUp = function () {
//     let count = 0;
//     return ++count;
// };

// const setUp = function () {
//     let count = 0;
//     return function () {
//         return ++count;
//     }
// };

// const setUp = function () {
//     let count = 0;
//     return function () {
//         return function () {
//             return ++count;
//         }
//     }
// };

// console.log(setUp());

// const next = setUp();
// const next1 = next();

//  console.log(next());
//  console.log(next());

// console.log(next1());
// console.log(next1());

// Q.14

// function fun(a, b, c) {
//     var array = [a, b, c]
//     return array;
// }

// console.log(fun(1, 2, 3));

// function fun() {
//     console.log(arguments);
//     return Array.from(arguments);
// }

// console.log(Array.from('abc'));

// Array.from()
// 配列のようなObjectもしくは反復可能Objectから新しいArrayインスタンスを生成

// console.log(fun(1, 2, 3, 4));

// Q.15
// const array = ['a1', 'a2', 'a3', 'a4', 'a5']

// var list = [];
// array.forEach(function (arr, index) {
//     if (index === 0) {
//         arr = 'red';
//     }
//     if (index === 1) {
//         arr = 'green';
//     }
//     if (index === 2) {
//         arr = 'yello';
//     }
//     list.push(arr);
// });

// console.log(list);