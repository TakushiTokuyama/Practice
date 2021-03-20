//var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var result = function () {
//     for (var number of numbers) {
//         if (number >= 5) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(result());

// var result1 = numbers.some(function (number) {
//     return number >= 5;
// });

// console.log(result1);

// var result = function () {
//     for (var number of numbers) {
//         if (number >= 5) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(result());

// var result1 = numbers.every(function (number) {
//     return number >= 5;
// });

// console.log(result1);

var names = [{ name1: 'A', name2: 'B' }, { name3: 'C', name4: 'D' }];

// names.forEach(function (name) {
//     console.log(name);
// });

var results = [];

names.forEach(function (name, index) {
    Object.keys(name).forEach(function (key) {
        results.push(name[key]);
    });
});

console.log(results);