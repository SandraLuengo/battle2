window.onload = () => {
  start();
};

let canvas;

let start = () => {
  canvas = document.getElementById("game");
  let ctx = canvas.getContext("2d");
  canvas.ctx = ctx;
  canvas.width = 800;
  canvas.height = 600;
  canvas.canMove = false;
  canvas.mouseArray = [];
  canvas.pos = { x: 0, y: 0 };
  canvas.fps = 60;
  canvas.count = 0;
  canvas.intervalId = null;
  canvas.addEventListener("mousedown", mouseDown);
  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mouseup", mouseUp);
};

let init = () => {
  canvas.idInterval = setInterval(() => {
    canvas.count++;
  }, 1000 / this.fps);
};

let mouseDown = (e) => {
  init();
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
  if (canvas.count % 5 === 0) {
    mouseArray.push({x:e.clientX, y:e.clientY});
  }
  draw(e);
  checkFigure();
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
  if (!!mouseArray[mouseArray.length-5] && !!mouseArray[mouseArray.length-1]) {
    let p0 = mouseArray[mouseArray.length-5];
    let p6 = mouseArray[mouseArray.length-1];
    let diffX = p6.x - p0.x;
    let diffY = p6.y - p0.y;
    console.log(diffX, diffY);
    if(diffY < 5 && diffY > 0) {
      console.log('Recta Horizontal')
    } else {
      console.log('Otra cosa')
    }
    // if (diffX < 5) {
    //   console.log('Recta Vertical');
    // } 
   
  }
};

let mouseUp = () => {
  let { ctx } = canvas;
  canvas.canMove = false;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  clearInterval(canvas.idInterval);
  reset();
};

let reset = () => {
  canvas.mouseArray.length = 0;
  canvas.count = 0;
  canvas.pos = { x: 0, y: 0 };
};
