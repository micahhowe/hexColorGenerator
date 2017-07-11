//gives us a random hexadecimal code for the new background
function getColor() {
	return '#' + Math.random().toString(16).slice(4,10);
}
document.write(getColor());

//actually sets that random hexadecimal code as the background color
function setBackground() {
	var newBackground = getColor();
	document.body.style.background = newBackground;
}
setBackground();
//allows user to use spacebar to change to a new color
	document.body.onkeyup = function(space){
		if(space.keyCode == 32) {
			setBackground();
		}
	}
//reruns setBackground function every 15 seconds
	time=setInterval(function(){
		setBackground();
	},15000);