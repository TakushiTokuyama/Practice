// fsモジュール
const fs = require('fs');

// json読み込み
let json = fs.readFileSync('./sample.json');

// バイナリデータ
console.log(json);

// 文字列変換
console.log(json.toString());

// jsonをobjectに変換
console.log(JSON.parse(json));

// object
let obj = JSON.parse(json);

// objectをjsonに変換
console.log(JSON.stringify(obj, null, 4));