var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let size = 20;
let color = "black";
let x;
let y;

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size;
  ctx.stroke();
}

// drawCircle(100, 200);
// drawLine(300, 300, 200, 400);
