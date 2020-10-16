var parentSquare = document.getElementById('parentSquare');
var rouletteStart = document.getElementById('rouletteStart');
var roulettReset = document.getElementById('roulettReset');
var rouletteResult = document.getElementById('rouletteResult');
var message = document.getElementById('message');
var numberOfRemaining = document.getElementById('numberOfRemaining');
var numbers = [];
var checkNumbers = [[], [], [], [], []];
var checker = 0;
var insertNums = [];

var count = 0;

// 初期表示
window.onload = function () {
    InsertRandomNumber();
    // 真ん中はFREEマス
    checkNumbers[2][2] = 1;
    // 初期値
    numberOfRemaining.innerHTML = '残り:' + 50;
};

// ビンゴカードに数値1-50をランダムに配置
function InsertRandomNumber() {
    while (count < 24) {
        var num01 = Math.round(Math.random() * 4);
        var num02 = Math.round(Math.random() * 4);
        if (parentSquare.children.item(num01).children.item(num02).textContent.length === 0) {
            if (insertNumber(num01, num02, count)) {
                count++;
            }
        }
    }
}

// 数値1-50をマスに追加
function insertNumber(num01, num02, count) {
    var randomNum = Math.round(Math.random() * 49) + 1;
    if (!insertNums.includes(randomNum)) {
        insertNums[count] = randomNum;
        parentSquare.children.item(num01).children.item(num02).textContent = randomNum;
        return true;
    }
    return false;
}

// ルーレット 25でstop
rouletteStart.addEventListener('click', function () {
    var countUp = 0;
    while (countUp === 0) {
        var num = Math.round(Math.random() * 49) + 1;
        if (numbers.includes(num)) {
            if (numbers.length >= 25) {
                break;
            }
            continue;
        } else {
            numbers.push(num);
            changeColor(numbers);
            countUp++;
        }
        numberOfRemaining.innerHTML = `残り:${50 - numbers.length}`;

        var span = document.createElement('span');
        span.innerHTML = numbers[numbers.length - 1];
        span.classList = 'circle';
        rouletteResult.appendChild(span);
    }
});

// 同じ数値のマスの色を変える
function changeColor(numbers) {
    for (var x = 0; x <= 4; x++) {
        for (var y = 0; y <= 4; y++) {
            if (numbers.includes(parseInt(parentSquare.children.item(x).children.item(y).textContent))) {
                parentSquare.children.item(x).children.item(y).style.color = 'red';
                checkBingo(x, y);
            }
        }
    }
}

// ルーレットを初期化
roulettReset.addEventListener('click', function () {
    location.reload();
});

// bingoかどうかを調べる
function checkBingo(x, y) {
    checkNumbers[x][y] = 1;
    checkSide();
    checkVertical();
    checkDiagonal();
}

// 横列
function checkSide() {
    for (var i = 0; i < 5; i++) {
        for (var n = 0; n < 5; n++) {
            checker += checkNumbers[i][n];
            resultProcess(checker);
        }
        checker = 0;
    }
    checker = 0;
}

// 縦列
function checkVertical() {
    for (var i = 0; i < 5; i++) {
        for (var n = 0; n < 5; n++) {
            checker += checkNumbers[n][i];
            resultProcess(checker);
        }
        checker = 0;
    }
    checker = 0;
}

// 斜め
function checkDiagonal() {
    for (var i = 0; i < 5; i++) {
        checker += checkNumbers[i][i];
    }
    resultProcess(checker);
    checker = 0;
    for (var i = 0; i < 5; i++) {
        checker += checkNumbers[i][4 - i];
    }
    resultProcess(checker);
    checker = 0;
}

// 結果処理
function resultProcess(checker) {
    if (checker === 5) {
        message.innerHTML = 'BINGO!!';
        rouletteStart.setAttribute('disabled', true);
        rouletteStart.innerHTML = 'BINGO!!';
    }
}

