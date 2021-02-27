// Q31
// const obj = { x: 2 };

// console.log(Object.getOwnPropertyDescriptor(obj, 'x'));

// Q31
// var obj2 = { x: 2 };

// Object.defineProperty(obj2, 'y', {
//     value: 2,
//     writable: true,
//     enumerable: true,
//     configurable: true
// });

// console.log(Object.getOwnPropertyDescriptor(obj2, 'y'));

// Q32 可変長引数
// var f = function () {
//     console.log(arguments[0]);
// }

// f(1);
// f(2);

// Q33
// let arr = ['2', '23', '0', '16'];

// arr.sort(function (a, b) {
//     return a - b;
// });

// Object.freeze(arr);

// console.log(arr);

// Q34
// let arr = [3, 4, 5];

// var arr2 = arr.map(function (ar) {
//     return ar;
// });

// arr2.push(123);
// console.log(arr)
// console.log(arr2);

// Q35
// const getSum = (a, b) => {
//     if (a === undefined || b === undefined) {
//         throw 'parameter is not number';
//     }
//     return a + b;
// }

// console.log(getSum(1));

// const isNotNumErr = function (message) {
//     throw new Error(message);
// }

// const getSum = (a = isNotNumErr('a is not number'), b = isNotNumErr('b is not number')) => a + b;

// console.log(getSum());

