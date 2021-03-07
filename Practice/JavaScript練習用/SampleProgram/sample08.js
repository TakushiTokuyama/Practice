var goodPoint = document.getElementsByName('goodPoint');
var comment = document.getElementById('comment');
var resultTitle = document.getElementById('resultTitle');

function diagnogis() {
    if (goodPoint[0].value.length !== 0) {
        resultTitle.innerText = "診断結果";
        comment.innerText = goodPoint[0].value + "のいいところは声です。";
    }
}

console.log('hello');