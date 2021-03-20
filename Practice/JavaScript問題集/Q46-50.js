// Q47
// array = [
//     { name: 'kenji', mail: 'fafa@eee.com' },
//     { name: 'morita', mail: 'kkk@fat.com' }
// ];

// arr = [];

// array.forEach(function (item) {
//     Object.keys(item).forEach(function (value) {
//         if (value === 'mail') {
//             arr.push(value);
//             arr.push(item[value]);
//         }
//     });
// });

// keyとname値を配列に格納

// console.log(arr);

// Q48
// var passed = [12, 5, 8, 130, 44]

// 一つでも10以上の場合、true
// passed.some(function (value) {
//     if (value >= 10) {
//         console.log(value);
//         return true;
//     }
// });

// 全てが10以上の場合、trues
// var isMoreThanTen = passed.every(function (value) {
//     return value >= 10;
// });

// console.log(isMoreThanTen);

// Q49
var fafa = [['one', 'info@fa'], ['two', 'send@fafa'], ['three', 'hoso@fafa']];

// var str;
// fafa.forEach(function (value) {
//     value.forEach(function (val) {
//         if (val === 'two') {
//             str = val;
//         }
//     });
// });

// console.log(str);

// const map = new Map(fafa);
// map.get('two');
// console.log(map);

// map.forEach(function (val) {
//     console.log(val);
// });

// Q50
// インデックス3番目の要素として['four', fafa@eee]追加

// fafa.push(['four', 'fafa@eee']);
// console.log(fafa);

// const map = new Map(fafa);
// map.set('four', 'fafa@eee');
// console.log(map);

