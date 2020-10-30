'use strict'

// var numbers = [1, 2, 3, 4, 5];
// var doubleNumbers = [];

// for (var i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// numbers.forEach(function (number) {
//     console.log(number);
// });

// var roomNumbers = [[100, 101, 102], [201, 202, 203], [301, 302, 303]];

// for (var x = 0; x < roomNumbers.length; x++) {
//     for (var y = 0; y < roomNumbers.length; y++) {
//         console.log(roomNumbers[x][y]);
//     }
// }

// roomNumbers.forEach(function (roomNumber) {
//     roomNumber.forEach(function (number) {
//         console.log(number);
//     });
// });



// for (var i = 0; i < 5; i++) {
//     doubleNumbers.push(numbers[i] * 2);
// }

// doubleNumbers.forEach(function (doubleNumber) {
//     console.log(doubleNumber);
// });

// var douubled = numbers.map(function (number) {
//     return number * 2;
// });

// douubled.forEach(function (number) {
//     console.log(number);
// });

// var foods = [
//     { name: 'りんご', price: 100 },
//     { name: 'みかん', price: 50 },
//     { name: 'いちご', price: 120 }
// ];

// var names = foods.map(function (food) {
//     return { name: food.name, priceDouble: food.price * 2 };
// });

// console.log(names);

// var drinks = [
//     { name: 'りんご', prices: 100, producer: 'A' },
//     { name: 'みかん', prices: 50, producer: 'A' },
//     { name: 'いちご', prices: 100, producer: 'A' },
//     { name: 'りんご', prices: 120, producer: 'B' },
//     { name: 'みかん', prices: 30, producer: 'B' },
//     { name: 'いちご', prices: 120, producer: 'B' },
// ];

// var filterDrinks = drinks.filter(function (drink) {
//     return drink.producer === 'A' && drink.name === 'いちご';
// });

// console.log(filterDrinks);

// var numbers = [10, 20, 30];

// var reject = numbers.filter(function (number) {
//     return !(number > 15);
// });

// console.log(reject);

// var school = [
//     { set: 1, name: 'A' },
//     { set: 2, name: 'B' },
//     { set: 3, name: 'A' }
// ];

// var name = school.find(function (school) {
//     return school.name === 'A' && school.set === 3;
// });

// console.log(name);

// var users = [
//     { id: 1, name: 'A', email: 'AAA@co.jp' },
//     { id: 2, name: 'B', email: 'BBB@co.jp' },
//     { id: 3, name: 'C', email: 'CCC@co.jp' }
// ];

// var posts = [
//     { post_id: 1, contetnt: 'こんにちは！' },
//     { post_id: 2, contetnt: 'こんばんは！' },
//     { post_id: 3, contetnt: 'おはよう！' },
//     { post_id: 2, contetnt: 'こんにちは！' },
//     { post_id: 3, contetnt: 'こんばんは！' },
//     { post_id: 4, contetnt: 'おはよう！' },
// ];

// function findPostsId(posts, id) {
//     return posts.find(function (post) {
//         return post.post_id === id;
//     })
// }

// console.log(findPostsId(posts, 3));

// var drinks = [
//     { name: 'りんご', prices: 100, producer: 'A' },
//     { name: 'みかん', prices: 50, producer: 'A' },
//     { name: 'いちご', prices: 100, producer: 'A' },
//     { name: 'りんご', prices: 120, producer: 'B' },
//     { name: 'みかん', prices: 30, producer: 'B' },
//     { name: 'いちご', prices: 120, producer: 'B' },
// ];

// var FindAllPriceOverHundred = drinks.every(function (drink) {
//     return drink.prices > 100;
// });

// console.log(FindAllPriceOverHundred);

// var FindAllPriceSomeOverHundred = drinks.some(function (drink) {
//     return drink.prices;
// });

// console.log(FindAllPriceSomeOverHundred);

// function getNowYear() {
//     const year = new Date().getFullYear();
//     return `今年は${year}`;
// }

// console.log(getNowYear());

function User(id) {
    this.id = id;
}

console.log(new User(1));