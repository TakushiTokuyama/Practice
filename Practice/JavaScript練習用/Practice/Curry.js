// 引数１がインクリメント

const productName = {
    orange: 0,
    apple: 0,
    banana: 0
}

// num:個数 name:商品名
function addStock(num, name) {
    return console.log(Math.floor(productName[name] += num));
}

// addStock(1, "orange");
// addStock(2, "apple");
// addStock(3, "banana");

function addStockCurry(num) {
    return function (name) { return console.log(productName[name] += num) };
}

// addStockCurry(1)("orange");
// addStockCurry(2)("apple");
// addStockCurry(3)("banana");

var addStockCurry1 = addStockCurry(1);
addStockCurry1("orange");

Object.keys(productName).forEach(addStockCurry(1));