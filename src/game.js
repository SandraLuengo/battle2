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
  canvas.pos = { x: 0, y: 0 };
  canvas.addEventListener("mousedown", mouseDown);
  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mouseup", mouseUp);
};

let mouseDown = (e) => {
  canvas.canMove = true;
  setPosition(e);
};

let setPosition = (e) => {
  let { pos } = canvas;
  pos.x = e.clientX;
  pos.y = e.clientY;
};

let mouseMove = (e) => {
  let { canMove, mouseArray } = canvas;
  if (!canMove) return;
  mouseArray.push([e.clientX, e.clientY]);
  if (mouseArray.length > 20) {
    draw(e);
    checkFigure();
  }
};

let draw = (e) => {
  let { ctx, pos } = canvas;
  ctx.beginPath();
  ctx.lineWidth = 7;
  ctx.lineCap = "round";
  ctx.strokeStyle = "white";
  ctx.moveTo(pos.x, pos.y);
  setPosition(e);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
};


let checkFigure = () => {
  let { mouseArray } = canvas;
  console.log(mouseArray);
};

let mouseUp = () => {
  let { ctx } = canvas;
  canvas.canMove = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};
