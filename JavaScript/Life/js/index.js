const firstRow = document.getElementById("firstRow");
const secondRow = document.getElementById("secondRow");
const thirdRow = document.getElementById("thirdRow");
const fourthRow = document.getElementById("fourthRow");
const fifthRow = document.getElementById("fifthRow");
const sixthRow = document.getElementById("sixthRow");
const seventhRow = document.getElementById("seventhRow");

var rows = [
  firstRow,
  secondRow,
  thirdRow,
  fourthRow,
  fifthRow,
  sixthRow,
  seventhRow,
];

var texts = ["a", "START", "c", "d", "e", "f", "g", "h", "i", "j"];

var target;

window.onload = function () {
  setBackGroundColor();
};

function setBackGroundColor() {
  target = rows[0].children[0].getContext("2d");
  target.fillStyle = "rgba(200, 0, 200, 0.2)";
  target.fillRect(0, 0, 100, 100);
}

function resetBackGroundColor() {
  target = rows[0].children[0].getContext("2d");
  target.clearRect(0, 0, 100, 100);
  target.strokeRect(0, 0, 100, 100);
}

const daiceSieve = document.getElementById("daiceSieve");
daiceSieve.addEventListener("click", function () {
  console.log("DaiceStart");
  start();
  var result = Math.floor(Math.random() * 6) + 1;
  daiceSieve.innerHTML = result;
  resetBackGroundColor();
});

function start() {
  TweenMax.to(".box", {
    duration: 2,
    rotation: 720,
    y: 100,
    stagger: 0.5,
    render: "aaa",
  });
}

for (var i = 0; i < 7; i++) {
  for (var y = 1; y < 10; y++) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    setCanvasStyle(canvas);
    if (i === 6 || i === 0) {
      if (y % 2 == 1) {
        ctx.strokeRect(0, 0, 100, 100);
        ctx.fiilStyle = "green";
        ctx.font = "30px Hanalei Fill, cursive";
        ctx.fillText(texts[y], 10, 50);
        rows[i].appendChild(canvas);
      } else {
        setSideLine(ctx);
        rows[i].appendChild(canvas);
      }
    } else if (i === 2 || i === 4) {
      if (y === 1 || y === 5 || y === 9) {
        ctx.strokeRect(0, 0, 100, 100);
        rows[i].appendChild(canvas);
      } else {
        rows[i].appendChild(canvas);
      }
    } else {
      if (y === 1 || y === 5 || y === 9) {
        setVerticalLine(ctx);
        rows[i].appendChild(canvas);
      } else {
        rows[i].appendChild(canvas);
      }
    }
  }
}

// 横
function setSideLine(ctx) {
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.moveTo(0, 50);
  ctx.lineTo(100, 50);
  ctx.stroke();
}

// 縦
function setVerticalLine(ctx) {
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  ctx.moveTo(50, 0);
  ctx.lineTo(50, 100);
  ctx.stroke();
}

// setCanvasStyle
function setCanvasStyle(canvas) {
  canvas.width = "100";
  canvas.height = "100";
}
