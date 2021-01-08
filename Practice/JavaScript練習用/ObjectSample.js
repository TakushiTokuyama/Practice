const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

// c:5
target.c = source.c;

// c:5
target['c'] = source.c;

// Key全件取得
Object.keys(target);

// 削除
delete target['a'];

console.log(target);

const result = Object.assign(target, source);

const c = ['a', 'b'];
const d = ['b', 'd'];
console.log(Object.assign(c, d));

// オブジェクトの複製
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy);