// インプット
const number = document.getElementById('number');
const name = document.getElementById('name');

// ボタン
const posting = document.getElementById('posting');
const clear = document.getElementById('clear');

// 結果
const resultNumber = document.getElementById('resultNumber');
const resultName = document.getElementById('resultName');

// 初期表示
window.addEventListener('load', function () {
    setDisabled();
});

posting.addEventListener('click', function () {
    console.log('submit');
}, false);

clear.addEventListener('click', function () {
    console.log('clear');
    clearResult();
    setDisabled();
});

// 非活性/活性
function setDisabled() {
    if (resultNumber.innerText.length > 0 || resultName.innerText.length > 0) {
        number.disabled = true;
        name.disabled = true;
        posting.disabled = true;
    } else {
        number.disabled = false;
        name.disabled = false;
        posting.disabled = false;
    }
}

// クリア
function clearResult() {
    resultNumber.innerText = "";
    resultName.innerText = "";
}