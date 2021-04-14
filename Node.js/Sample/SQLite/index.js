const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
var ejs = require("ejs");
var qs = require('querystring');


const server = http.createServer((req, res) => {
    console.log(req.url);
    var html = require('fs').readFileSync('view/index.ejs', 'utf-8');
    var db = require("./settings/dbSetting").dbConnection();
    if (req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html;');
        res.end(html);
    } else if (req.url === '/post.html') {
        var data = '';
        req.setEncoding('utf-8');
        req.on('data', function (chunk) { data += chunk }).on('end', function () {
            var qsdatas = qs.parse(data);
            console.log(qsdatas);

            db.serialize(() => {
                db.all(`SELECT * FROM User WHERE Id = ${qsdatas.id} AND Password = ${qsdatas.password}`, function (err, rows) {

                    console.log(rows);

                    if (rows !== undefined) {
                        res.end(ejs.render(html, { id: rows[0]["Id"], password: rows[0]["Password"], message: "ログイン成功" }));
                        db.close();
                    } else {
                        res.end(ejs.render(html, { id: "", password: "", message: "ログイン失敗" }));
                        db.close();
                    }

                });
            });


        })
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});