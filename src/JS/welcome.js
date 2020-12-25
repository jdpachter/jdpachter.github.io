$(document).ready(function() {
	pickWelcome();
	generateWords();
});

var welcomePrefix = ["Hey", "Hi", "Bonjour", "Salut", "Hej", "Hola", "Sup",
"Yo", "Konichiwa"];

var welcomeSuffix = ["betch", "you", "queen", "comrade", "friend", "pal",
"sir", "fam", "y'all", "team"];

var words = ["photography", "music", "the gr8 outdoors", "swimming", "sailing",
"aviation", "artificial intelligence", "ethics", "exploring", "travel",
"biking", "running", "long walks", "being gay", "existentialism", "aesthetics",
"justice", "consciousness", "structuralism", "phenomenology", "falibilism",
"Frank Ocean","will"];

var curWord = 0;

function pickWelcome() {
	var rand1 = Math.floor(Math.random() * welcomePrefix.length);
	var rand2 = Math.floor(Math.random() * welcomeSuffix.length);
	document.getElementById("welcome-banner").innerHTML = welcomePrefix[rand1] +
	", " + welcomeSuffix[rand2] + ".";
}

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

function generateWords() {

	shuffle(words);
	var allWordDivs = document.createDocumentFragment();
	for(word = 0; word < words.length; word++) {
		var newWordDiv = document.createElement('div');
		newWordDiv.id = 'word' + word;
		newWordDiv.className = 'word blurb';
		newWordDiv.innerHTML = fixCaps(words[word]);
		allWordDivs.appendChild(newWordDiv);
	}
	$("#words").html(allWordDivs);
	placeWords(curWord, 0, 2);
}

function randInRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function placeWords() {
	var elem = document.getElementById('word' + curWord);
	var width = document.getElementById("words").clientWidth;
	var height = document.getElementById("words").clientHeight;

	var randX = randInRange(0, width);
	var randY = randInRange(0, height);

	elem.style.top = randY + 'px';
	elem.style.left = randX + 'px';
	curWord++;

	while(curWord < words.length) {
		placeWords();
	}
}

function fixCaps(phrase) {
	return phrase.replace(/\w\S*/g, function(txt){
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}
