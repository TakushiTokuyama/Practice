var inputFile = document.getElementById('inputFile');
var inputText = document.getElementById('inputText');
var img = document.getElementById('img');
var str = document.getElementById('str');

inputText.addEventListener("change", function (e) {
    var text = e.target.files;

    var reader = new FileReader();
    console.log(text[0]);
    reader.readAsText(text[0]);
    reader.onload = function () {
        str.innerHTML = reader.result;
    }
});

inputFile.addEventListener("change", function (e) {

    var file = e.target.files;

    var reader = new FileReader();
    console.log(file[0]);
    reader.readAsDataURL(file[0]);

    reader.onload = function () {
        img.src = reader.result;
    }
}, false);