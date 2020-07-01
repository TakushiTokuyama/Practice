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
            } else {
                var data = service.jsRender(text);
                res.writeHead(200, { 'Content-Type': 'text/js' });
                res.end(data);
            }

            break;
        case 'POST':
            if (req.url === "/delete") {
                var inputData;
                var values;
                req.on('data', function (chunk) {
                    inputData += chunk;
                    values = qs.parse(inputData);
                    console.log(req.read());
                }).on('end', function () {
                    console.log("delete");
                    console.log(values);
                    data = service.deleteWrite(text, values);

                    res.writeHead(302, { 'Location': '/' });
                    res.write(data);
                    res.end();
                });
                break;
            }
            var inputData;
            var values;
            req.on('data', function (chunk) {
                inputData += chunk;
                values = qs.parse(inputData);
            }).on('end', function () {

                console.log(values);
                data = service.write(values, text);

                res.writeHead(302, { 'Location': '/' });
                res.write(data);
                res.end();
            });
            break;
    }
});

server.listen(3000);

