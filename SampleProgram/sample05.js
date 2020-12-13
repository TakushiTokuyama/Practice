// 個人情報をname,mail,ageに分けて表示する。

var persons = [
    { name: 'Tanaka', mail: 'acb@co.jp', age: '22', countryCode: '1' },
    { name: 'Yamada', mail: 'goh@ccc.jp', age: '23', countryCode: '1' },
    { name: 'Satou', mail: 'gkg@do.kp', age: '24', countryCode: '3' }
];

var countrys = [
    { countryCode: '1', countryName: 'Japan' },
    { countryCode: '2', countryName: 'America' },
    { countryCode: '3', countryName: 'China' }
];

var names = [];
var mails = [];
var ages = [];

var nameList = persons.map(function (names) {
    return names.name;
});

names.push(nameList);

var namesShow = document.getElementById('names');
namesShow.innerHTML = names;

var mailList = persons.map(function (mails) {
    return mails.mail
});

mails.push(mailList);

var mailShow = document.getElementById('mails');
mailShow.innerHTML = mails;

var ageList = persons.map(function (ages) {
    return ages.age;
});

ages.push(ageList);

var ageShow = document.getElementById('ages');
ageShow.innerHTML = ages;


// チェックした数値を削除
function deleteBtn() {
    var numbers = document.getElementsByName('numbers');

    var result = document.getElementById('result');

    var text = "";

    numbers.forEach(function (number) {
        if (!number.checked) {
            text += number.value + " ";
        }
    });

    result.innerHTML = text;
}

//在庫テーブル

var fruits = [
    { id: '01', frutsName: 'りんご', total: '10', origin: '青森' },
    { id: '02', frutsName: 'みかん', total: '5', origin: '山形' },
    { id: '03', frutsName: 'さくらんぼ', total: '8', origin: '愛媛' },
    { id: '04', frutsName: 'マスカット', total: '3', origin: '石川' },
    { id: '05', frutsName: 'バナナ', total: '8', origin: '東京' },
    { id: '06', frutsName: 'いちご', total: '4', origin: '青森' }
];

var fruitsOrigin = [
    { originId: '01', origin: '青森' },
    { originId: '02', origin: '山形' },
    { originId: '03', origin: '愛媛' },
    { originId: '04', origin: '北海道' },
    { originId: '05', origin: '沖縄' }
];

function fruitsForFruitsInfo(fruits, fruitsOrigin) {
    return fruits.find(function (fruit) {
        return fruit.origin === fruitsOrigin[0].origin;
    });
}

var fruitsFindResult = fruitsForFruitsInfo(fruits, fruitsOrigin);
console.log(fruitsFindResult);

// CarSpec
var carSpecs = [
    { FuelEconomy: 20, Displacement: 1500 },
    { FuelEconomy: 15, Displacement: 1200 },
    { FuelEconomy: 25, Displacement: 2000 }
];

// 20over
var targetAllFuelEconomy = false;

// 20over
var targetSomeFuelEconomy = false;

// 全て20over
targetAllFuelEconomy = carSpecs.every(function (carSpec) {
    return carSpec.FuelEconomy >= 20;
});

// どれか
targetSomeFuelEconomy = carSpecs.some(function (carSpec) {
    return carSpec.FuelEconomy >= 20;
});

var carSpecResult = document.getElementById('carSpecs');
carSpecResult.innerHTML += "すべて20以上" + targetAllFuelEconomy;
carSpecResult.innerHTML += " " + "どれかが20以上" + targetSomeFuelEconomy;

// Miliage
var miliageList = [
    { day: 1, minutes: 15, distance: 10 },
    { day: 2, minutes: 25, distance: 15 },
    { day: 3, minutes: 30, distance: 20 }
];

var totalDistance;
var days;

// 合計距離
totalDistance = miliageList.reduce(function (sums, miliage) {
    return sums + miliage.distance;
}, 0);

// 合計日数
days = miliageList.reduce(function (days, miliage) {
    days.push(miliage.day);
    return days
}, []);

var miliagesResult = document.getElementById('miliages');
miliagesResult.innerHTML = days.length + '日間の合計距離は' + totalDistance;
console.log(totalDistance);





