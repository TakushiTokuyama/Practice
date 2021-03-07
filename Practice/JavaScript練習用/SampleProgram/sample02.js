var view = document.getElementById('view');

var table = document.createElement('table');
var thead = document.createElement('thead');

var tr1 = document.createElement('tr');
var tr2 = document.createElement('tr');

var th1 = document.createElement('th');
var th2 = document.createElement('th');

var td1 = document.createElement('td');
var td2 = document.createElement('td');
var td3 = document.createElement('td');
var td4 = document.createElement('td');

table.appendChild(thead);
thead.appendChild(tr1);
thead.appendChild(tr2);

tr1.appendChild(th1);
tr1.appendChild(td1);
tr1.appendChild(td2);

tr2.appendChild(th2);
tr2.appendChild(td3);
tr2.appendChild(td4);

th1.innerHTML = '在庫A';
td1.innerHTML = '①';
td2.innerHTML = '②';

th2.innerHTML = '在庫B'
td3.innerHTML = '①';
td4.innerHTML = '②';

console.log(table);

view.appendChild(table);
