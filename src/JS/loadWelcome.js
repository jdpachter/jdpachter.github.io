$(document).ready(function() {
  pickWelcome();
});

var welcomePrefix = ["Hey", "Hi", "Bonjour", "Salut", "Hej", "Hola", "Sup",
"Yo", "Konichiwa"];

var welcomeSuffix = ["betch", "you", "queen", "honey", "friend", "pal", "sir"];

function pickWelcome() {
	$("#header").load("header.html");

	var rand1 = Math.floor(Math.random() * welcomePrefix.length);
	var rand2 = Math.floor(Math.random() * welcomeSuffix.length);
	document.getElementById("welcome-banner").innerHTML = welcomePrefix[rand1] +
	" " + welcomeSuffix[rand2];
}
