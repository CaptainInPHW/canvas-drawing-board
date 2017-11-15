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
	console.log(evt);
	last_position.offsetX = evt.offsetX + 4; //+ 26
	last_position.offsetY = evt.offsetY + 26; //+ 4;
}
canvas.onmousemove = function(evt){
	if (begin) {
		var new_position = {
			offsetX: evt.offsetX + 4,
			offsetY: evt.offsetY + 26
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