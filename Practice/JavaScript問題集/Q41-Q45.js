// Q41
// const arr = ['a', 'b', 'c', 'd', 'e'];

// arr.splice(2, 0, "tamori");

// console.log(arr);

// // Q42
// var o = {};

// var obj = Object.create(o, Object.prototype);

// if (obj === o) {
//     console.log("onazi!!");
// }

// console.log(obj);

// var o = { a: 1, b: 2, c: 3 };

// var x = o;

// x.d = 4;

// console.log(o);

// Q43
//var obj = Object.create({}, { p: { value: 42 } });

// var obj = Object.create({});
// obj.p = 42;

//console.log(obj.p);

// Q44

// var num = 1234;
// var list = [];
// num.toString().split('').forEach(function (value) {
//     list.push(value);
// });

//  console.log(list);

// Q45
[0, 1, 2, 3, 4].some(function (val, i) {
    if (val === 2) {
        // how do we stop?
        return true;
    }
    console.log(val);
});
// 0, 1, 3, 4



