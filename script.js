function Button1(el) {
	var buttonk = Math.floor(Math.random( ) * 3) 
	if (buttonk == 0) {
		document.write('<img src="https://raw.githubusercontent.com/strolorts/strolorts.github.io/main/1.PNG">');
	}
	else if (buttonk == 1) {
		document.write('<img src="https://raw.githubusercontent.com/strolorts/strolorts.github.io/main/2.PNG">');
	}
	else if (buttonk == 2) {
		document.write('<img src="https://raw.githubusercontent.com/strolorts/strolorts.github.io/main/3.PNG">');
	}
	var audio = new Audio();
	audio.src = 'https://my-files.su/Save/8inabz/SUS%20-%20AMOGUS.mp3'; // Указываем путь к звуку "клика"
	audio.autoplay = true; // Автоматически запускаем		
}
