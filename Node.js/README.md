#Node.js

##Description
TodoAppを作成するまでのサンプル集

##Usage
Node.jsをinstallする。
[Node.js](https://nodejs.org/ja/)
npm install -g npm
npm init(package.json作成)
npma install ejs
npm install nodemon
nodemon samplexx.js(起動)

##Requirement
node -v v12.16.3
npm -v 6.14.4
vscode使用

###sample01.js 
WebServer作成

###sample02.js sample02.ejs sample02.css sample02.js
ejsテンプレート使用
POSTとGET時の処理
css,jsファイル読み込み

###sample03.js  sample03.ejs lib/service.js
sample03.jsにRoutingを記述
service03.jsに処理を記述
テキストファイルを新規作成、追記、読み込み
POSTで送られた値を保存できるように。
service.jsにGet時とPost時の処理を記述
削除更新用のrowNo追加

##Author
Takushi Tokuyama