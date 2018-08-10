function addClick(){
	var links = document.getElementsByTagName("a");
	links[1].addEventListener("click", function(){
		document.getElementById('about').classList.add("glow");
		setTimeout(function(){
			document.getElementById('about').classList.remove("glow");
			document.getElementById('about').classList.add("glitch1");
		}, 1500);
		setTimeout(function(){
			document.getElementById('about').classList.remove("glitch1");
			document.getElementById('about').classList.add("glitch2");
		}, 1600);
		setTimeout(function(){
			document.getElementById('about').classList.remove("glitch2");
		}, 1700);
	});
	
	links[2].addEventListener("click", function(){
		document.getElementById('schedule').classList.add("glow");
		setTimeout(function(){
			document.getElementById('schedule').classList.remove("glow");
			document.getElementById('schedule').classList.add("glitch1");
		}, 1500);
		setTimeout(function(){
			document.getElementById('schedule').classList.remove("glitch1");
			document.getElementById('schedule').classList.add("glitch2");
		}, 1600);
		setTimeout(function(){
			document.getElementById('schedule').classList.remove("glitch2");
		}, 1700);
	});
	
	links[3].addEventListener("click", function(){
		document.getElementById('sponsors').classList.add("glow");
		setTimeout(function(){
			document.getElementById('sponsors').classList.remove("glow");
			document.getElementById('sponsors').classList.add("glitch1");
		}, 1500);
		setTimeout(function(){
			document.getElementById('sponsors').classList.remove("glitch1");
			document.getElementById('sponsors').classList.add("glitch2");
		}, 1600);
		setTimeout(function(){
			document.getElementById('sponsors').classList.remove("glitch2");
		}, 1700);
	});
}
