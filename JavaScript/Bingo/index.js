var parentSquare = document.getElementById('parentSquare');
var rouletteStart = document.getElementById('rouletteStart');
var roulettReset = document.getElementById('roulettReset');
var rouletteResult = document.getElementById('rouletteResult');
var message = document.getElementById('message');
var numbers = [];

var count = 1;

// 初期表示
window.onload = function () {
    InsertRandomNumber();
};

// ビンゴカードに数値をランダムに配置
function InsertRandomNumber() {
    while (count <= 24) {
        var num01 = Math.round(Math.random() * 4);
        var num02 = Math.round(Math.random() * 4);
        if (parentSquare.children.item(num01).children.item(num02).textContent.length === 0) {
            insertNumber(num01, num02, count);
            count++;
        }
    }
}

// 数値をマスに追加
function insertNumber(num01, num02, count) {
    parentSquare.children.item(num01).children.item(num02).textContent = count;
}

// ルーレット
rouletteStart.addEventListener('click', function () {
    var countUp = 0;
    while (countUp === 0) {
        var num = Math.round(Math.random() * 23) + 1;
        if (numbers.includes(num)) {
            if (numbers.length >= 24) {
                break;
            }
            continue;
        } else {
            numbers.push(num);
            rouletteResult.innerHTML = numbers;
            changeColor(numbers);
            countUp++;
        }
    }
});

// 同じ数値のマスの色を変える
function changeColor(numbers) {
    for (var x = 0; x <= 4; x++) {
        for (var y = 0; y <= 4; y++) {
            if (numbers.includes(parseInt(parentSquare.children.item(x).children.item(y).textContent))) {
                parentSquare.children.item(x).children.item(y).style.color = 'red';
            }
        }
    }
}

// ルーレットを初期化
roulettReset.addEventListener('click', function () {
    location.reload();
});