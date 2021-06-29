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

// 月末の日
let lastOfTheMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

// 月初の曜日
let beginingOfTheMonthDays = beginingOfTheMonth.getDay();

// 1か月分の日にち
let weeks = ["", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", "",
    "", "", "", "", "", "", ""];

// 日数を格納
for (var i = 1; i < lastOfTheMonth + 1; i++) {
    weeks[beginingOfTheMonthDays - 1 + i] = i;
}

let weekly = [];
let week = [];

// 6weekに分割
for (var x = 0; x < 42; x++) {
    week.push(weeks[x]);
    if (week.length % 7 === 0) {
        weekly.push(week);
        week = [];
    }
}

