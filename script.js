function Button1(el) {
	//el.style.background = "black";
	//el.style.color = "yellow"
	var buttonk = Math.floor(Math.random( ) * (3 - 1 + 1)) + 1
	if (buttonk == 1) {
		document.write('<img src="1.PNG">');
	}
	else if (buttonk == 2) {
		document.write('<img src="2.PNG">');
	}
	else if (buttonk == 3) {
		document.write('<img src="3.PNG">');
	}
}