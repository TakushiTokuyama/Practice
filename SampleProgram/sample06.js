// 初期表示
var num1 = document.getElementById('num1')
num1.style.display = "none";

// 値が入力された場合
function insertInput() {
    var num1 = document.getElementById('num1');
    console.log(document.form1.num.value);
    if (document.form1.num.value.length > 0) {
        num1.style.display = 'block';
    } else {
        num1.style.display = 'none';
        num1.value = '';
    }
}

