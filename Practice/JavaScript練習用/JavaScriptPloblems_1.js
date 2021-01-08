// Q.1 朝の挨拶を表示させましょう。
console.log("GoodMorning!!");

// Q.2 りんご3個とみかん2個の合計金額を表示しましょう。
// りんごは1個80円、みかんは1個40円
var applePrice = 80;
var orangePrice = 40;
console.log(applePrice * 3 + orangePrice * 2);

// Q.3 if文を使って、今日朝ごはんを食べた場合は何を食べたかを表示させましょう。
//     食べてない場合は「何も食べていない」と表示させましょう。
//     var flag; 食べた場合はtrue,食べてない場合はfalse

var flag = true;
if (flag) {
    console.log("パン");
} else {
    console.log("何も食べていない。");
}

// Q.4 1~10までの数値をfor文を使って表示させましょう。
// Q.5 偶数の時は「偶数です。」奇数の時は「奇数です。」と表示させましょう
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i}:偶数です。`)
    } else {
        console.log(`${i}:奇数です。`);
    }
}

// Q.6 1-3までを配列で宣言してみましょう。
// Q.7 for文を使って配列の値を表示させてみましょう
// Q.8 4を配列に格納してみましょう。その後に表示させてみましょう。
var array = [1, 2, 3];

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

array[3] = 4;
console.log(array[3]);

// Q.9 typeof を使用して以下のデータ型を表示させてみましょう。
//     数値　文字列　真偽値　オブジェクト
var num = 0;
console.log(typeof num);

var str = "a";
console.log(typeof str);

var bool = true;
console.log(typeof bool);

var obj = [];
console.log(typeof obj);

// Q.10　好きな食べ物表示させる関数を定義してみましょう。
// Q.11  引数に「肉」を入れて「肉」だったら好き、野菜だと「嫌い」、それ以外だと「どちらでもない」と表示させましょう。

function showFavoriteFood(food) {
    if (food === "肉") {
        console.log("好き");
    } else if (food === "野菜") {
        console.log("嫌い");
    } else {
        console.log("どちらでもない");
    }
}

showFavoriteFood("肉");
showFavoriteFood("野菜");
showFavoriteFood("パン");
