// Slide Out Menu

function openMenu(){
	var menu = document.getElementById("menu");

	if(menu.style.left == "-100%"){
		menu.style.left = "0%";
	} else {
		menu.style.left = "-100%";
	}

}
