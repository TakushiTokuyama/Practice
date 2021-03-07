var form;

// onclickEvent フォーム生成ボタン押下時
function register() {
    result(formCreate());
}

// onclickEvebt リセットボタン押下
function reset() {
    // Redirect
    location.href = "/sample09.html";
}

// onclickEvent フォーム生成ボタン押下後
// 結果表示
var getnum = document.getElementById('getnum');

if (location.search) {
    var nums = location.search.substring(1);

    // 配列の生成
    var numList = nums.split('=').map(num => {
        return num;
    });

    var text = "GETの値=";
    // textに追記
    numList.forEach(function (num) {
        text += num + ":";
    });

    getnum.innerHTML = text.slice(0, -1);
} else {
    getnum.innerHTML = "値なし";
}

// Formタグ&&Inputタグ生成
function formCreate() {
    // form生成
    form = document.createElement('form');
    // デフォルト値 "get"
    // form.method = "get";
    form.action = "sample09.html"
    form.name = "myform";
    form.id = "formid"
    // input生成
    var input = document.createElement('input');
    input.type = "text";
    input.name = "num";
    // submit生成
    var submit = document.createElement('input');
    submit.type = "submit";
    submit.value = "submit";
    // 格納
    form.appendChild(input);
    form.appendChild(submit);
    console.log(submit);
    return form;
}

// 結果表示
function result(form) {
    var show = document.getElementById('show');
    show.appendChild(form);
    console.log(form);
}