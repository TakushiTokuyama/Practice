var parentSquare = document.getElementById('parentSquare');
var rouletteStart = document.getElementById('rouletteStart');
var message = document.getElementById('message');
var messages = [];

var count = 1;
while (count <= 24) {
    var num01 = Math.round(Math.random() * 4);
    var num02 = Math.round(Math.random() * 4);
    if (parentSquare.children.item(num01).children.item(num02).textContent.length === 0) {
        insertNumber(num01, num02, count);
        count++;
    }
}

function insertNumber(num01, num02, count) {
    parentSquare.children.item(num01).children.item(num02).textContent = count;
}

rouletteStart.addEventListener('click', function () {
    var countUp = 0;
    while (countUp === 0) {
        var num = Math.round(Math.random() * 23) + 1;
        messages.push(num);
        message.innerHTML = messages;
        changeColor(messages);
        countUp++;
    }
});

function changeColor(messages) {
    for (var x = 0; x <= 4; x++) {
        for (var y = 0; y <= 4; y++) {
            if (messages.includes(parseInt(parentSquare.children.item(x).children.item(y).textContent))) {
                parentSquare.children.item(x).children.item(y).style.color = 'red';
            }
        }
    }
}