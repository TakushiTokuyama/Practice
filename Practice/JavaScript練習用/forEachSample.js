'use strict'
const array = ["A", "B", "C"];

for (var i = 0; i < array.length; i++) {
    console.log(`index:${i + 1}`, array[i]);
}

array.forEach(function (value, index, currentValue) {
    console.log(`index:${index}`, `value:${value}`, `currentValue:${currentValue}`);
});

const school = {
    first_grade: [
        "丈太郎", "丈二郎", "常三郎"
    ],
    second_grade: [
        "NARUTO", "SASUKE", "SAKURA"
    ],
    third_grade: [
        "三男", "次男", "長男"
    ]
};

Object.keys(school).forEach(function (key, index) {
    var grade = index + 1;
    school[key].forEach(function (value, index) {
        console.log(`学年:${grade}`, `出席番号:${index + 1}`, `名前:${value}`);
    });
});