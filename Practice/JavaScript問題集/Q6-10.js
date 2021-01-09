// Q.6
// if (typeof x === 'undefined') {

// }
// typeof x の型はundefined

// if (x === undefined) {

// }
// xは存在しないためerror

// Q.7
// let x;
// if (x === void 0) {

// }

// void 0でundefinedとなる。
// void (0);
// void "別の書き方";

// if (y === void 0) {

// }
// yを宣言していないため、こちらはエラー

// Q.8
// const obj = {
//     key: 'aa',
//     key2: 'bb'
// }

// for (const [key, value] of Object.entries(obj)) {
//     console.log(`${key}`, `${value}`);
// }

// Q.9
// const array = ['a', 'b', 'c'];
// console.log(array.join(""));

// Q.10
// x = 43;
// let y = 3;

// console.log(delete x);
// console.log(delete y);

// var array = [1, 2];
// console.log(delete array[0]);
// console.log(array);

// 明示的に宣言した値はdeleteできない。
// 配列の場合は該当する要素を削除、index番号は繰り上がったりしない。
// Objectの中身を削除できる。Objectを削除できない。