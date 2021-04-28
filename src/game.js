window.onload = () => {
  init();
};

let canvas;

let init = () => {
  canvas = document.getElementById("game");
  let ctx = canvas.getContext("2d");
  canvas.ctx = ctx;
  canvas.width = 800;
  canvas.height = 600;
  canvas.canMove = false;
  canvas.mouseArray = [];
  canvas.addEventListener("mousedown", mouseDown);
  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mouseup", mouseUp);
};

let mouseDown = () => {
  canvas.canMove = true;
};

let mouseMove = (e) => {
  let { canMove, mouseArray } = canvas;
  if (!canMove) return;
  mouseArray.push([e.clientX, e.clientY]);
  if (mouseArray.length > 20) {
    draw(e);
    //checkFigure();
  }
};

let draw = (e) => {
  let { ctx } = canvas;
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.lineCap = "round";
  ctx.strokeStyle = "#c0392b";
  ctx.moveTo(e.clientX, e.clientY);
  ctx.lineTo(e.clientX, e.clientY); 
  ctx.stroke(); 
};

let checkFigure = () => {
  let { mouseArray } = canvas;
  console.log(mouseArray);
};

let mouseUp = () => {
  canvas.canMove = false;
};
