var Save = document.getElementById('Save');

if (Save) {
    document.cookie = Save.value;
}

var result = document.getElementById('Result');

result.innerHTML = document.cookie;

document.cookie = 'data1 = 123; max-age =10';
document.cookie = 'data2 = 3';

var r = document.cookie.split(';');

r.forEach(function (value) {
    var content = value.split('=');

    console.log(content[0]);
});