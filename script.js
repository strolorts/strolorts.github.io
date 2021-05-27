function Button1() {
	$("#Button1").text('NEW AMOGUS');
	$("div.mb-5").append('<img id = "Image1">');
	$("body").append('<audio id = "Audio1">');
	$("#Image1").attr("width", "900").attr("height", "700")
	var buttonk = Math.floor(Math.random( ) * 9)
	if (buttonk == 0) {
		$("#Image1").attr("src", "https://raw.githubusercontent.com/strolorts/strolorts.github.io/main/1.PNG");
		$("#name").text("AMOGUS:1");
	}
	else if (buttonk == 1) {
		$("#Image1").attr("src", "https://raw.githubusercontent.com/strolorts/strolorts.github.io/main/2.PNG");
		$("#name").text("AMOGUS:2");
	}
	else if (buttonk == 2) {
		$("#Image1").attr("src", "https://raw.githubusercontent.com/strolorts/strolorts.github.io/main/3.PNG");
		$("#name").text("AMOGUS:3");
	}
	else if (buttonk == 3) {
		$("#Image1").attr("src", "https://i.ibb.co/hX042Sn/image.png");
		$("#name").text("WAIT IT ISN'T AMOGUS:1");
	}
	else if (buttonk == 4) {
		$("#Image1").attr("src", "https://i.ibb.co/h2Pj71n/image.png");
		$("#name").text("WAIT IT ISN'T AMOGUS:2");
	}
	else if (buttonk == 5) {
		$("#Image1").attr("src", "https://i.ibb.co/y47m72K/image.png");
		$("#name").text("WAIT IT ISN'T AMOGUS:3");
	}
	else if (buttonk == 6) {
		$("#Image1").attr("src", "https://i.ibb.co/yVPB4mm/image.png");
		$("#name").text("AMOGUS:4");
	}
	else if (buttonk == 7) {
		$("#Image1").attr("src", "https://i.ibb.co/DQkzkmj/image.png");
		$("#name").text("AMOGUS:5");
	}
	else if (buttonk == 8) {
		$("#Image1").attr("src", "https://i.ibb.co/QnLR78h/image.png");
		$("#name").text("AMOGUS:6");
	}
	$("#Audio1").attr("src", "https://my-files.su/Save/8inabz/SUS%20-%20AMOGUS.mp3").attr("autoplay", "autoplay").attr("loop", "loop");
}