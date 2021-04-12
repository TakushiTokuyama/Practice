const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const sqlite = require('sqlite3').verbose();

const fs = require('fs');
let dbfilepath = fs.readFileSync('./settings/dbfilepath.txt', 'utf-8');
const db = new sqlite.Database(dbfilepath);

var users = [];
db.serialize(() => {
    db.all('SELECT * FROM User', function (err, rows) {
        users.push(rows);
    });
});

var b;

db.close();

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(users[0][0].Name);
});



server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});