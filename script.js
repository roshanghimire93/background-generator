var css = document.querySelector("p");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.querySelector("body")

color1.addEventListener("input", gradient);
color2.addEventListener("input", gradient);

function gradient(){
	body.style.background ="linear-gradient(to right, "+ color1.value + ", " + color2.value +")";
	css.textContent = body.style.background + ";";
}