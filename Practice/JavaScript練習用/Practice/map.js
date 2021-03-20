// Mapオブジェクト
var fafa = [['one', 'info@fa'], ['two', 'send@fafa'], ['three', 'hoso@fafa']];

// var str;
// fafa.forEach(function (value) {
//     value.forEach(function (val) {
//         if (val === 'send@fafa') {
//             str = val;
//         }
//     });
// });

// console.log(str);

// var map = new Map(fafa);
// console.log(map.get('two'));

var fafa2 = [['four', 'deo@fafa']];

var map = new Map([...fafa, ...fafa2]);
console.log(...fafa);