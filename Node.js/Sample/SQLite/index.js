const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
var url = require('url');
var html = require('fs').readFileSync('view/index.html');

var db = require("./settings/dbSetting").dbConnection();

var users = [];
db.serialize(() => {
    db.all('SELECT * FROM User', function (err, rows) {
        users.push(rows);
    });
});

db.close();

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    } else if (req.url === '/post.html') {
        var data = '';
        req.on('data', function (chunk) { data += chunk }).on('end', function () {
            console.log(data);
            res.end(html);
        })
    }
});



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});