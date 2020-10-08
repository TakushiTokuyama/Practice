var parentSquare = document.getElementById('parentSquare');
var rouletteStart = document.getElementById('rouletteStart');
var message = document.getElementById('message');

numbers = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]];

rouletteStart.addEventListener('click', function () {
    message.innerHTML = "";
    var num01 = Math.floor(Math.random() * 4);
    var num02 = Math.floor(Math.random() * 4);
    if (parentSquare.children.item(num01).children.item(num02).textContent.length === 0) {
        insertNumber(num01, num02);
        console.log(insertNumber(num01, num02));
    } else {
        message.innerHTML = "数値がかぶったのでもう一度やり直し。";
    }
});

var insertNumber = function (num01, num02) {
    return parentSquare.children.item(num01).children.item(num02).textContent = numbers[num01][num02];
}
