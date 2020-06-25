const ejs = require('ejs');

function write(values, fs) {
    console.log('write');
    // 入力がある場合
    if (values.name !== "" || values.undefinednumber !== "") {
        var str = [];
        var name = values.name;
        var number = values.undefinednumber;
        str.push("Name:" + name + "Number:" + number + ",\n");
        // 書き込み
        fs.appendFileSync("input.txt", str);
    }
}

function readFile(fs, index) {
    console.log('readFile');
    // ファイル読み込み
    var text = fs.readFileSync("input.txt", 'UTF-8');
    var data;
    if (text.length === 0) {
        data = firstRender();
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
function firstRender() {
    var data = ejs.render(index, {
        text: text
    });
    return data;
}

module.exports = {
    write,
    readFile
};