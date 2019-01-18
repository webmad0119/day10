var canvas = document.getElementById("canvas");
var ctx    = canvas.getContext("2d");
ctx.fillStyle = 'white';
ctx.font = '18px serif';

//ghost stores its coordinates plus some methods to transform the positions in the future
var ghost = {
  x: 25,
  y: 25,
  moveUp:    function() { this.y -= 25 },
  moveDown:  function() { this.y += 25 },
  moveLeft:  function() { this.x -= 25 },
  moveRight: function() { this.x += 25 },
}

//this draws one ghost in its attributed coordinates
function draw(ghost) {
  var img = new Image();
  img.onload = function() { 
    //ghost.x and ghost.y store the ghost coordinates so it is drawn in the right place
     ctx.drawImage(img, ghost.x, ghost.y, 50, 50); 
  }
  img.src = "https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif";
}


document.onkeydown = function(e) {
  switch (e.keyCode) {
      //when we press different keys in the keyboard we call the ghost methods in order to transform its position accordingly
    case 38: ghost.moveUp();    console.log('up',    ghost); break;
    case 40: ghost.moveDown();  console.log('down',  ghost); break;
    case 37: ghost.moveLeft();  console.log('left',  ghost); break;
    case 39: ghost.moveRight(); console.log('right', ghost); break;
  }
  updateCanvas();
}

function updateCanvas() {
  ctx.clearRect(0,0,1500,1700);
  ctx.fillText("Ghost_x: " + ghost.x, 580,40);
  ctx.fillText("Ghost_y: " + ghost.y, 580,60);
  draw(ghost)
}

updateCanvas()