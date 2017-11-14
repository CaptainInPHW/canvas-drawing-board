var canvas = document.querySelector("canvas");
var ctx = canvas.getContext('2d');
// console.log(canvas);
var last_position = {
	offsetX: undefined,
	offsetY: undefined
}
var begin = false;
canvas.onmousedown = function(evt){
	begin = !begin;
	last_position.offsetX = evt.offsetX;
	last_position.offsetY = evt.offsetY;
}
canvas.onmousemove = function(evt){
	if (begin) {
		var new_position = {
			offsetX: evt.offsetX,
			offsetY: evt.offsetY
		}
		ctx.beginPath();
		ctx.moveTo(last_position.offsetX,last_position.offsetY);
	    ctx.lineTo(new_position.offsetX,new_position.offsetY);
	    ctx.closePath();
	    ctx.stroke();
	    last_position = new_position;
	}
}
canvas.onmouseup = function(evt){
	begin = !begin;
}