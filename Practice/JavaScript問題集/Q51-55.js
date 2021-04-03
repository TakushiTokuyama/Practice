// Q51
// var fafa = [['one', 'info@fa'], ['two', 'send@fafa'], ['three', 'hoso@fafa']];
// fafa.forEach(function (value) {
//     console.log(value);
// });

// Q52 1つ以上の小英字、半角スペース、1つ以上の小英字にマッチ
// var fafa = 'tamori';

// var reg = new RegExp();
// var answer = fafa.match('[a-z]');

// console.log(answer);

// Q53 'It is an important problem'と'The import duty is not cheap' 'import'にmatch
// var str1 = "It is an important problem";
// var str2 = "The import duty is not cheap";

// var reg = new RegExp('import');
// var result1 = reg.test(str1);
// var result2 = reg.test(str2);
// console.log(result1);
// console.log(result2);

// var str1 = 'It is an important problem';
// var str2 = 'The important duty is not cheap'

// Q54

var hiragana = /[ぁ-ん]/;
var hankakuKatakana = /[ｦ-ﾟ]/;

console.log(hankakuKatakana.test("ｶﾀｶﾅ"));

var katakana = /[ァ-ヶ]/;

// Q55
const str = '「ヤッホー！ヤッホー！」';

var yaho1 = /(ヤッホー！)+/;

var yaho2 = /(ヤッホー！){2,3}/;

// Q56
const ans = '彼はありがとうと言った';
var Q1 = /(ありがとう|こんにちは｜さようなら)/;

console.log(Q1.exec(ans));
var Q2 = /ありがとう|こんにちは｜さようなら/;

console.log(Q2.exec(ans));
