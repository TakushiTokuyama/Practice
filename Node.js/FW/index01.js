'use strict'

const express = require('express');
const app = express();

const mysql = require('mysql');

// DB設定ファイル
const config = require('./config');

// publicフォルダ読み込み
app.use(express.static('public'));

// Formの値を受け取る為に必要
app.use(express.urlencoded({ extended: false }));

// mysql
const connection = mysql.createConnection({
    host: config.hostname,
    user: config.name,
    password: config.password,
    database: config.dbname
});

// get
app.get('/', (req, res) => {
    var success = "";
    console.log(req.url);
    if (req.url.startsWith("/?1")) {
        success = req.url.substring(3) + "件削除しました。";
    } else if (req.url.startsWith("/?0")) {
        success = req.url.substring(3) + "件登録しました。";
    } else if (req.url.startsWith("/?2")) {
        success = req.url.substring(3) + "件更新しました。";
    }
    connection.query(
        'SELECT * FROM zaiko',
        (error, results) => {
            res.render('index01.ejs', { zaiko: results, message: "", success: success });
        }
    );
});

// post insert
app.post('/create', (req, res) => {
    // 入力チェック
    if (req.body.ZaikoCode === "" || req.body.ProductName === "" || req.body.ZaikoStock === "") {
        console.log("check");
        connection.query(
            'SELECT * FROM zaiko',
            (error, results) => {
                res.render('index01.ejs', { zaiko: results, message: "未入力があります", success: "" });
            }
        );
    } else {
        console.log(req.body);
        connection.query(
            'INSERT INTO zaiko (ZaikoCode,ProductName,ZaikoStock) VALUES(?,?,?)',
            [req.body.ZaikoCode, req.body.ProductName, req.body.ZaikoStock],
            (error, results) => {
                console.log(results);
                console.log(results.affectedRows + '件登録しました。');
                res.redirect('/?' + "0" + results.affectedRows);
            }
        );
    }
});

// pose delete
app.post('/delete/:ZaikoCode', (req, res) => {
    console.log(req.params.ZaikoCode);
    connection.query(
        'DELETE FROM zaiko WHERE ZaikoCode = ?',
        [req.params.ZaikoCode],
        (error, results) => {
            console.log(results);
            console.log(results.affectedRows + '件削除しました。');
            res.redirect('/?' + "1" + results.affectedRows);
        }
    );
});

// post update
app.post('/update/:ZaikoCode', (req, res) => {
    console.log(req.body);
    connection.query(
        'UPDATE zaiko SET ZaikoStock = ? WHERE ZaikoCode = ?',
        [req.body.zaikoSu, req.params.ZaikoCode],
        (error, results) => {
            console.log(results);
            console.log(results.affectedRows + '件更新しました。');
            res.redirect('/?' + "2" + results.affectedRows);
        }
    );
});

app.listen(3000);