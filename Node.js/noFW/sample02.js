const http = require('http');
const server = http.createServer();

const qs = require('querystring');

const fs = require('fs');
const ejs = require('ejs');

var index = fs.readFileSync('sample02.ejs', 'UTF-8');
var css = fs.readFileSync('sample02.css', 'UTF-8');
var js = fs.readFileSync('syori02.js', 'UTF-8');

server.on('request', function (req, res) {
    switch (req.method) {
        case 'GET':
            switch (req.url) {
                case "/":
                    var data = ejs.render(index, {
                        method: req.method,
                        url: req.url,
                        number: "",
                        name: ""
                    });
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.write(data);
                    res.end();
                    break;

                case "/sample02.css":
                    res.writeHead(200, { 'Content-Type': 'text/css' });
                    res.write(css);
                    res.end();
                    break;

                case "/frontService02.js":
                    res.writeHead(200, { 'Content-Type': 'text/js' });
                    res.write(js);
                    res.end();
                    break;

                default:
                    res.write('Not Found URL...');
                    res.end();
            }
            break;
        case 'POST':
            var inputData;
            var values;
            req.on('data', function (chunk) {
                inputData += chunk;
                values = qs.parse(inputData);
            }).on('end', function () {
                var data = ejs.render(index, {
                    method: req.method,
                    url: req.url,
                    number: values.undefinednumber,
                    name: values.name
                });
                console.log(values);
                
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            });
            break;
    }
});

server.listen(3000);