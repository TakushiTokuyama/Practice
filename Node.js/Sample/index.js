var http = require("http");
var fs = require("fs");

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    fs.writeFile('./log.txt', 'test', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log('write end');
        }
    });

    response.end('test');

}).listen(8000);