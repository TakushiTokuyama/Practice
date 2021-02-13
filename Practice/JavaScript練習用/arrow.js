const colors = [
    'red',
    'yello',
    'blue',
];

// function getColor(num) {
//     if (num >= colors.length || 0 > num) {
//         throw 'parameter is out of bounds!!';
//     }
//     return colors[num];
// }

// // 例外
// try {
//     console.log(getColor(5));
// } catch (error) {
//     console.log(error);
// }

// アロー関数にリファクタリング
// let getColor = (num) => {
//     if (num >= colors.length || 0 > num || num === undefined) {
//         throw 'parameter is out of bounds!!';
//     }
//     return colors[num]
// };

// try {
//     console.log(getColor(2));
// } catch (error) {
//     console.log(error);
// }

// 引数の合計値を返却
// function sum() {
//     var total = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return console.log(total);
// }

// sum(1, 2);

// アロ―関数にリファクタリング

// var sum = () => {
//     var total = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         total += arguments[i];
//     }
//     return console.log(total);
// }

// sum(1, 2, 3);