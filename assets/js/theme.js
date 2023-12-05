document.getElementById("open-menu").addEventListener("click", function () {
	console.log("menu open");
	// Add property display block on class "mobile-menu"
	document.querySelector(".mobile-menu").style.opacity = "1";
	document.querySelector(".mobile-menu").style.display  = "block";
});

document.getElementById("close-menu").addEventListener("click", function () {
	console.log("menu close");
	// Add property display none on class "mobile-menu"
	document.querySelector(".mobile-menu").style.opacity = "0";
	document.querySelector(".mobile-menu").style.display = "none";
});
