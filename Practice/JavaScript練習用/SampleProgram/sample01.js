function accounting() {
    var orders = document.getElementsByName('orders');
    var items = document.getElementsByName('items');
    var syouhizei = document.getElementsByName('syouhizei');

    var itemList = [
        { name: '赤い靴', price: 150 },
        { name: '青いサンダル', price: 200 },
        { name: '緑の長靴', price: 250 }
    ];

    //結果表示用
    var cart = [];
    var number = [];
    var totalPrice = 0;

    for (var i = 0; i < items.length; i++) {
        if (items[i].checked) {
            cart.push(items[i].value);
            number.push(orders[i].value)
            //消費税計算8% 個数
            if (syouhizei[0].checked) {
                totalPrice += itemList[i].price * syouhizei[0].value * orders[i].value;
            }
            //10% 個数
            if (syouhizei[1].checked) {
                totalPrice += itemList[i].price * syouhizei[1].value * orders[i].value;
            }
        }
    }
    //結果
    document.getElementById('show1').textContent = cart;
    document.getElementById('show2').textContent = number;
    document.getElementById('show3').textContent = totalPrice;


    //制御
    var red;
    var blue;
    var green;

    if (orders && syouhizei && items) {
        red = document.getElementById('red');
        blue = document.getElementById('blue');
        green = document.getElementById('green');
        red.disabled = true;
        blue.disabled = true;
        green.disabled = true;
    }

}

//全選択
function allSelect() {
    var items = document.getElementsByName('items');
    for (var i = 0; i < items.length; i++) {
        items[i].checked = true;
    }
}

//全解除
function allUnSelect() {
    var items = document.getElementsByName('items');
    var orders = document.getElementsByName('orders');
    var syouhizei = document.getElementsByName('syouhizei');
    syouhizei.forEach(function (item) {
        item.checked = false;
    });
    orders.forEach(function (item) {
        item.value = 0;
    });
    for (var i = 0; i < items.length; i++) {
        items[i].checked = false;
    }
}