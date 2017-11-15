var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');
// console.log(canvas);
var last_position = {
	offsetX: undefined,
	offsetY: undefined
}
var draw_begin = false;
canvas.onmousedown = function(evt){
	draw_begin = !draw_begin;
	// console.log(evt);
	last_position.offsetX = evt.offsetX + 3;
	last_position.offsetY = evt.offsetY + 27 ;
} 
canvas.onmousemove = function(evt){
	if (draw_begin) {
		if (last_position.offsetY < 30) {

		}
		var new_position = {
			offsetX: evt.offsetX + 3,
			offsetY: evt.offsetY + 27
		}
		ctx.beginPath();
		ctx.moveTo(last_position.offsetX,last_position.offsetY);
	    ctx.lineTo(new_position.offsetX,new_position.offsetY);
	    ctx.closePath();
		ctx.strokeStyle = "red";
	    ctx.stroke();
	    last_position = new_position;
	}
}
canvas.onmouseup = function(evt){
	draw_begin = !draw_begin;
}




setCanvasSize();

function setCanvasSize(){
	var canvas = document.querySelector("canvas");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
  }
usingPen();
function usingPen(){
	var canvas = document.querySelector("canvas");
	var pen = document.querySelector(".pen");
	console.log(pen);
	pen.onclick = function(){
		canvas.className = "pen";
	};
}
usingEraser();
function usingEraser(){
	var canvas = document.querySelector("canvas");
	var eraser = document.querySelector(".eraser");
	eraser.onclick = function(){
		canvas.className = "eraser";
	};
}
usingColor();
function usingColor(){
	var color = document.querySelector(".color");
	console.log(color.value);
}