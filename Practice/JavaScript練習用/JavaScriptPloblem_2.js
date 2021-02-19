// Q12 1-10までの数値が存在する、配列を定義しましょう。
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Q12-1 配列から偶数と奇数を分けて表示させましょう。
// numbers.forEach(function (number) {
//     if (number % 2 == 0) {
//         console.log(`偶数:${number}`);
//     } else {
//         console.log(`奇数:${number}`);
//     }
// });

// Q12-2 配列に11-20を追加してみましょう。
// for (var i = 11; i <= 20; i++) {
//     numbers.push(i);
// }

// Q12-3 配列に格納した1-20の偶数を消去しましょう。
// var isNotEvenNumbers = numbers.filter(function (number) {
//     return number % 2 != 0
// });

// Q13 好きなお菓子の連想配列を定義しましょう。keyに名前、valueに金額。
// const sweets = { "ラムネ": 30, "飴": 20, "チョコ": 50 };

// Q14 金額を入れると消費税が返却される関数を定義しましょう。
//     消費税は定数定義。
// const tax = 0.10;
// function taxCalc(price) {
//     return price * tax;
// }

// Q15 30円のラムネを複数購入した場合の合計値を求めましょう。
//     20円の飴を複数購入した場合の合計値を求めましょう。
//     50円のチョコを複数購入した場合の合計値を求めましょう。
//     消費税は10%
// const sweets = { "ラムネ": 30, "飴": 20, "チョコ": 50 };

// var totalPrice = 0;
// var tax = 1.10;

// function getTotalPrice(sweetsName, num) {
//     return totalPrice = + sweets[sweetsName] * num * tax;
// }

// Q16 今日の日付を表示しましょう。
// Q16-1 日付のみ表示。　yyyy-mm-dd
// Q16-2 時刻のみ表示。  hh:mm:ss
var now = new Date();
// now.toLocaleString();
// now.toLocaleDateString();
// now.toLocaleTimeString();

// Q16-1 1週間後の今の日付を表示しましょう。
// now.getDate() + 7; 

// Q16-2 今日の曜日を表示させましょう。
var weekDay = { 0: "日", 1: "月", 2: "火", 3: "水", 4: "木", 5: "金", 6: "土" };
console.log(weekDay[now.getDay()]);

// Q16-3 今月の簡単なカレンダーを作成してみましょう。
Object.keys(weekDay).forEach(function (value) {
    process.stdout.write(weekDay[value] + "  ");
});

// 今月の末日
var lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).toLocaleDateString()
var index = lastDay.lastIndexOf('-') + 1;
var count = lastDay.substr(index);

// 初日の曜日
now.setDate(1);
var firstDay = now.getDay();

// 曜日に合わせて空白を格納
var days = [];
for (var i = 0; i < firstDay; i++) {
    days.push("  ");
}

// 配列に日にちを格納
for (var i = 1; i <= count; i++, firstDay++) {
    // 初回
    if (i === 1) {
        days[firstDay] = "0" + i;;
    } else if (i < 10) {
        // 二回目以降
        days[firstDay] = "0" + i;
    } else {
        days[firstDay] = i;
    }
}

// カレンダー表示
for (var i = 0; i <= count; i++) {
    if (i < 7) {
        if (i === 0) {
            console.log(" ");
        }
        process.stdout.write(days[i].toString() + "  ");
    } else if (7 <= i && i < 14) {
        if (i === 7) {
            console.log(" ");
        }
        process.stdout.write(days[i].toString() + "  ");
    } else if (14 <= i && i < 21) {
        if (i === 14) {
            console.log(" ");
        }
        process.stdout.write(days[i].toString() + "  ");
    } else if (21 <= i && i < 28) {
        if (i === 21) {
            console.log(" ");
        }
        process.stdout.write(days[i].toString() + "  ");
    } else if (28 <= i) {
        if (i === 28) {
            console.log(" ");
        }
        process.stdout.write(days[i].toString() + "  ");
    }
}
