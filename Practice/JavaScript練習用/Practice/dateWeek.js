// 現在の週
let currentWeek = ["", "", "", "", "", "", ""];

// 現在の日時
let currentTime = new Date();

// 現在の年
let currentYear = currentTime.getFullYear();

// 現在の月
let currentMonth = currentTime.getMonth();

// 月初
let beginingOfTheMonth = new Date(currentYear, currentMonth, 1);

// 月末
let lastOfTheMonth = new Date(currentYear, currentMonth + 1, 0);

// 月初の曜日
let beginingOfTheMonthDays = beginingOfTheMonth.getDay();


for (var i = 1; i <= 7 - beginingOfTheMonthDays; i++) {
    currentWeek[beginingOfTheMonthDays - 1 + i] = i;
}
console.log(currentWeek);

