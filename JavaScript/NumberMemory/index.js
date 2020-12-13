var countDown = document.getElementById('countDown');
var randomNumber = document.getElementById('randomNumber');
var count = 3;
var timer;

// 2000ミリ秒ごとに繰り返す
var countDownTimer = () => {
    timer = setInterval(function () { NumberLow() }, 2000);
}

// countを1ずつ減らして表示
function NumberLow() {
    countDown.innerHTML = count;
    --count;
    if (count < -1) {
        clearInterval(timer);
        countDown.innerHTML = "";
        addRandomNumber();
    }
}

// 数値をrandom表示
var addRandomNumber = () => {
    randomNumber.innerHTML = Math.ceil(Math.random() * 99);
}

countDownTimer();

