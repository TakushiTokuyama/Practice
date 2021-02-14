let tsuyahime = {
    name: 'つや姫',
    color: 'white',
    origin: '山形',
    water: 10
}

console.log(Object.getOwnPropertyDescriptor(tsuyahime, 'origin'));

Object.defineProperty(tsuyahime, 'water', {
    value: 20,
    writable: false,
    enumerable: false,
    configurable: false,
});

// 書き込み
tsuyahime.water = 30;

// 非列挙
console.log(Object.keys(tsuyahime));

// 削除
delete tsuyahime.water;

console.log(tsuyahime.water);

const nums = [1, 2, 3, 4, 5];

var newNums = nums.map(function (num, index, arr) {
    console.log(index);
    console.log(arr);
    return num;
});
