// 生成したタグ表示用
var show = document.getElementById('show');

// 送信した値表示用
var result = document.getElementById('result');

function insertInputTag() {

    // inputタグ生成
    var input = document.createElement('input');
    input.type = 'text';
    input.name = 'context';
    input.value = '';
    input.id = 1;

    // submit生成
    var submit = document.createElement('input');
    submit.type = 'submit';
    submit.id = 2;

    // divタグ生成
    var div = document.createElement('div');

    // 要素を追加
    div.appendChild(input);
    div.appendChild(submit);
    show.appendChild(div);
}

// 削除
function deleteInputTag() {
    show.firstChild.remove();
}

// 生成されたタグで値を送信
function resultShow() {

    var inputValue = document.getElementById('1');
    var submitClick = document.getElementById('2');

    submitClick.onclick = function () {
        result.innerHTML = inputValue.value;
    }
}

// onclickイベント
function createTagLogic() {
    if (show.children.length === 0) {
        insertInputTag();
    } else {
        deleteInputTag();
    }
    resultShow();
}