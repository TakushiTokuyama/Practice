// Q36

// 書き換え不可能なグローバルへの代入
// 書き換え不可能なプロパティへの代入
// ゲッター専用プロパティへの代入
// 拡張不可能なオブジェクトの新しいプロパティへの代入

// Q37

// 指定の回数
// 1.初期化　2.ループ制御条件式　3.増減式
var numbers = [1, 2, 3, 4, 5, 3];

// for (var i = 0; i < numbers.length; i++) {
//     console.log(i);
// }

// // 要素を順に処理
// // 1.仮変数 2.連想配列
numbers[0] = 1;

for (key in numbers) {
    console.log(numbers[key]);
}

// 配列では利用しない
// 1.処理の順序が保証されない
// 2.仮変数にはインデックス番号が格納されるだけなので、コードがあまりシンプルにならない。
// 3.keyが列挙

// var data = ['apple', 'orange', 'banana'];

// Array.prototype.hoge = function () { }

// for (var key in data) {
//     console.log(key);
// }

// 1.value値が列挙

// var data = ['apple', 'orange', 'banana'];

// Array.prototype.hoge = function () { }

// for (var value of data) {
//     console.log(value);
// }

// Q.38

// Q.39
// var arr = ['f', 'o', 'x', 'k'];

// for (var value of arr) {
//     console.log(value);
// }

// Q.40
// var arr = ['f', 'o', 'x', 'k'];
// var ar = arr[Symbol.iterator]();
// console.log(ar.next().value);
// console.log(ar.next().value);
// console.log(ar.next().value);
// console.log(ar.next());

// function makeRangeIterator(start = 0, end = Infinity, step = 1) {
//     let nextIndex = start;
//     let iterationCount = 0;

//     const rangeIterator = {
//         next: function () {
//             let result;
//             if (nextIndex < end) {
//                 result = { value: nextIndex, done: false }
//                 nextIndex += step;
//                 iterationCount++;
//                 return result;
//             }
//             return { value: iterationCount, done: true }
//         }
//     };
//     return rangeIterator;
// }

// const it = makeRangeIterator(1, 10, 5);

// let result = it.next();

// while (!result.done) {
//     console.log(result.value); // 1 3 5 7 9
//     result = it.next();
// }

