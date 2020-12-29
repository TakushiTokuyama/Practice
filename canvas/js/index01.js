const canvas1 = document.getElementById("canvas1");
const canvas2 = document.getElementById("canvas2");
const canvas3 = document.getElementById("canvas3");

// Context取得
const ctx1 = canvas1.getContext("2d");
const ctx2 = canvas2.getContext("2d");
const ctx3 = canvas3.getContext("2d");

// 色
ctx1.fillStyle = "green";
// x,y,width,hight
ctx1.fillRect(10, 10, 50, 50);

ctx1.fillStyle = "rgba(0, 0, 200, 0.5)";
// 塗りつぶし
ctx1.fillRect(30, 30, 50, 50);

// 枠
ctx2.strokeRect(10, 10, 50, 50);

ctx3.beginPath();
ctx3.strokeStyle = "blue";
// 長さ　角度&&高さ?? 連動
ctx3.moveTo(120, 20);
// 長さ　角度&&高さ??
ctx3.lineTo(20, 20);
ctx3.stroke();

ctx3.beginPath();
ctx3.strokeStyle = "green";
ctx3.moveTo(20, 20);
ctx3.lineTo(120, 120);
ctx3.stroke();

