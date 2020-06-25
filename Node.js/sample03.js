const http = require('http');
const server = http.createServer();
const fs = require('fs');
const qs = require('querystring');
const ejs = require('ejs');

const index = fs.readFileSync('sample03.ejs', 'UTF-8');

// import
const service = require('./lib/service');

server.on('request', function (req, res) {
    switch (req.method) {
        case 'GET':
            if (req.url === "/") {

                try {
                    // 存在チェック
                    fs.statSync("input.txt");
                } catch (err) {
                    // 新規作成
                    fs.writeFileSync("input.txt", "");
                }

                var data = service.readFile(fs, index);

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
                var text = fs.readFileSync("input.txt", 'UTF-8');
                var data = ejs.render(index, {
                    text: text.split(',')
                });
             
                service.write(values, fs);

                res.writeHead(302, { 'Location': '/' });
                res.write(data);
                res.end();
            });
            break;
    }
});

server.listen(3000);

