var lists = document.getElementById('list').children;

var row = 1;
for (var i = 0; i < lists.length; i++) {
    var hidden = document.createElement('input');
    hidden.type = 'hidden';
    hidden.name = 'hidden';
    var input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'select';
    input.value = row++;
    lists[i].insertBefore(input, lists[i].firstChild);
    lists[i].insertBefore(hidden, lists[i].firstChild);
}

var deleteBtn = document.getElementById('deleteBtn');
var deleteForm = document.getElementById('delete');
var postList = [];
deleteBtn.addEventListener("click", function () {
    document.post_delete.submit();
}, false);