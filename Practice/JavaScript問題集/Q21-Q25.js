// Q.21
// let array = ['e', 'a', 'k', 'B', 'c'];
// array.sort();

// // 実行結果
// console.log(array.sort());

// 文字列に変換し、UTF16コード単位でソートされる。
// array1 = [9, 80];

// console.log(array1.sort());
// array1.sort(function (a, b) {
//     return a - b;
// });

// console.log(array1);

// 公式から引用
// function compare(a, b) {
//     if (ある順序の基準において a が b より小) {
//         return -1;
//     }
//     if (その順序の基準において a が b より大) {
//         return 1;
//     }
//     // a は b と等しいはず
//     return 0;
// }

// Q.22
// let array = ['e', 'a', 'k', 'B', 'c'];

// array.sort(function (a, b) {

//     var upA = a.toLowerCase();
//     var upB = b.toLowerCase();

//     if (upA < upB) {
//         return -1;
//     }
//     if (upA > upB) {
//         return 1;
//     }
//     return 0;
// });

// console.log(array);

// Q.23

// let array = [20, 100, 3, 35, 0];

// array.sort(function (a, b) {
//     return b - a;
// });

// // 降順
// console.log(array);

// Q.24

// var str = "10";
// var convertNum = Number(str);
// console.log(typeof str);
// console.log(typeof convertNum);
// console.log(typeof String(convertNum));

// Q.25
// var add = (a, b) => a + b;

// console.log(add(1, 2));

// // カーリー化
// // 共通化で仕様
// var add1 = a => b => a + b;

// console.log(add1(1)(2));

// var add2 = function (a, b) {
//     return function (a, b) {
//         return a + b;
//     }
// }

// var result = add2(1, 2);
// console.log(result(1, 2));

// function add4(a, b) {
//     if (b !== undefined) {
//         return a + b;
//     }
//     return function (b) {
//         return a + b;
//     };
// }

// console.log(add4(1, 2));
// console.log(add4(1)(2));

// var add5 = add4(1);
// console.log(add5(2));

function sum(x, y) {
    return x + y;
}

console.log(sum(1, 2));

function curried_sum(x) {
    return function (y) { return sum(x, y); }
}

console.log(curried_sum(1)(2));

function mean3(a, b, c) {
    return a + b + c;
}

function curried_mean3(a) {
    return function (b, c) { return mean3(a, b, c); }
}

console.log(mean3(1, 2, 3));
console.log(curried_mean3(1)(2, 3));

function greet(name) {
    return function (greet) { return `${name}さん${greet}`; }
}

// 第1引数共通化
console.log(greet("TOKU")("hello"));
console.log(greet("TOKU")("goodmornig"));
console.log(greet("TOKU")("goodafternoon"));

// sortArray

function sortArray(array){
    return function()
}