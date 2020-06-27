const ejs = require('ejs');
const fs = require('fs');
const index = fs.readFileSync('sample03.ejs', 'UTF-8');

// fileCheck
function fileCheck() {
    console.log("fileCheck");
    try {
        // 存在チェック
        fs.statSync("input.txt");
    } catch (err) {
        // 新規作成
        fs.writeFileSync("input.txt", "");
    }

    // ファイル読み込み
    const text = fs.readFileSync("input.txt", 'UTF-8');
    return text;
}

// Post
function write(values, text) {
    console.log('write');
    // 入力がある場合
    if (values.name !== "" || values.undefinednumber !== "") {
        var str = [];
        var rowNo = text.split(',').length;
        var name = values.name;
        var number = values.undefinednumber;
        str.push("rowNo:" + rowNo + "Name:" + name + "Number:" + number + ",\n");
        // 書き込み
        fs.appendFileSync("input.txt", str);
    }
    return postRender(text);
}

// Get
function readFile(text) {
    console.log('readFile');
    // ファイル読み込み

    var data;
    var text = fs.readFileSync("input.txt", 'UTF-8');
    if (text.length === 0) {
        data = getRender(text);
    } else {
        var list = [];
        text.split(',').forEach(element => {
            list.push(element.replace(",", ""));
        });
        list.pop();
        data = ejs.render(index, {
            text: list
        });
    }
    return data;
}

// 初期表示のRender
function getRender(text) {
    console.log("getRender");
    var data = ejs.render(index, {
        text: text
    });
    return data;
}

// POST時のRender
function postRender(text) {
    console.log("postRender");
    var data = ejs.render(index, {
        text: text.split(',')
    });
    return data;
}

module.exports = {
    fileCheck,
    write,
    readFile
};