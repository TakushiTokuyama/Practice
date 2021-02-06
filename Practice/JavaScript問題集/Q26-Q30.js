// Q26
// ファクトリ関数とは・・一つのオブジェクトを返す関数

// function factory(name) {
//     return new class person {
//         name = name;
//         introduce() {
//             console.log(`${this.name}の紹介`);
//         }
//     }
// }

// var toku = factory('toku');
// toku.introduce();

// Q27

// function sayHi(name) {
//     if (name === 'toku') {
//         console.log(`hello!${name}`);
//     } else {
//         console.log("hello!");
//     }
// }

// const array = ['toku'];

// sayHi.apply(null, array);
// sayHi.apply(this, array);

// Q28
// freeze
// プロパティの追加削除変更　×

// seal
// プロパティの追加削除×　既存の変更〇

// preventExtensions
// プロパティの追加×
// let obj = { x: 2, y: 3 };

// Object.preventExtensions(obj);

// obj.x = 3;
// delete obj.y;
// obj.o = 1;

// console.log(Object.isExtensible(obj));

// console.log(obj.x);
// console.log(obj);

// Q.29
// let obj = {};

// var newObj = Object.create(obj);

// console.log(newObj);

// Q30
// let obj = { x: 2, y: 3 }

// var newObj = Object.create(Object.prototype, {
//     x: { writable: true, configurable: true, enumerable: true, value: 2 },
//     y: { writable: true, configurable: true, enumerable: true, value: 3 }
// });

function Juice(name, con) {
    this.name = name;
    this.con = con;
    this.concentration = function () {
        console.log(con + name + 'juice');
    }
}

var appleJuice = new Juice('apple', '100%');
appleJuice.concentration();