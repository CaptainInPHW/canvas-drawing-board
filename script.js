
var body = document.querySelector("body");
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');
var last_position = {
	offsetX: undefined,
	offsetY: undefined
}
var draw_begin = false;
var canvas_leave = false;
canvas.onmouseenter = function(){
	if (canvas_leave) {
		draw_begin = false;
	}
}
canvas.onmouseleave = function(){
	canvas_leave = true;
}
body.onmouseup = function(){
	if (canvas_leave) {
		draw_begin = false;
	}
}
body.onmouseleave = function(){
	draw_begin = false;
}
canvas.onmousedown = function(evt){
	if (evt.which == 1) {
		draw_begin = true;
		last_position.offsetX = evt.offsetX;
		last_position.offsetY = evt.offsetY;
		// last_position.offsetX = evt.offsetX + 3;
		// last_position.offsetY = evt.offsetY + 27 ;
	}
}
canvas.onmousemove = function(evt){
	if (draw_begin) {
		var new_position = {
			offsetX: evt.offsetX,
			offsetY: evt.offsetY
			// offsetX: evt.offsetX + 3,
			// offsetY: evt.offsetY + 27
		};
		ctx.beginPath();
		ctx.moveTo(last_position.offsetX,last_position.offsetY);
	    ctx.lineTo(new_position.offsetX,new_position.offsetY);
	    ctx.closePath();
		// ctx.strokeStyle = "red";
	    ctx.stroke();
	    last_position = new_position;
	}
}
canvas.onmouseup = function(evt){
	draw_begin = false;
}




setCanvasSize();
function setCanvasSize(){
	var canvas = document.querySelector("canvas");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
}
window.onresize = function(){
	var canvas = document.querySelector("canvas");
	var data_url = canvas.toDataURL();
	setCanvasSize();
	var image = new Image();
 	image.src = data_url;
	image.onload = function(){
		ctx.drawImage(image, 0 ,0);
	}
}


usingPencil();
function usingPencil(){
	var canvas = document.querySelector("canvas");
	var pencil = document.querySelector(".pencil");
	pencil.onclick = function(){
		canvas.className = "pencil";
	};
}
usingPen();
function usingPen(){
	var canvas = document.querySelector("canvas");
	var pen = document.querySelector(".pen");
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
}


function drowConfig(){
	var color = document.querySelector(".color");
	// var 
}