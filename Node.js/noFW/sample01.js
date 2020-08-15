// Webサーバー作成

// module
const http = require('http');
const fs = require('fs');
const server = http.createServer();
const port = 3000;

server.on('request', function (req, res) {

    // html読み込み
    fs.readFileSync('sample01.html', 'UTF-8', function (err, data) {

        // error
        if (err) {
            res.writeHead(404, { 'Context-Type': 'text/plain' });
            res.write('not Found');
            return res.end();
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        // res.writeHead(200, { 'Context-Type': 'text/html' }); // Html
        // res.writeHead(200, { 'Context-Type}': 'text/css' }); // Css
        // res.writeHead(200, { 'ContextType': 'text/js' }); // JavaScript

        res.write(data);
        res.end();
    });
});

// server.listen(port);

server.listen(port, () => {
    console.log(`http://${port}/`);
});