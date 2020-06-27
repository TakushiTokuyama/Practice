const http = require('http');
const server = http.createServer();

const qs = require('querystring');

// import
const service = require('./lib/service');

server.on('request', function (req, res) {

    // fileCheck
    const text = service.fileCheck();

    switch (req.method) {
        case 'GET':
            if (req.url === "/") {
                var data = service.readFile(text);

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
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

                data = service.write(values, text);

                res.writeHead(302, { 'Location': '/' });
                res.write(data);
                res.end();
            });
            break;
    }
});

server.listen(3000);

