var artWords = ["Vincent van Gogh","Gustav Klimt","Claude Monet","Salvidor Dali","Alphonse Mucha","Leonardo Da Vinci"];
console.log(artWords);

var word= null;
var letters = [];
var wordlength = 0;
var blanks = [];

startGame()

function startGame(){


	word = artWords[Math.floor(Math.random() * artWords.length)];
	console.log(word);

	letersinword = word.split("");
	console.log(letersinword);
	wordlength = letersinword.length;
	console.log(wordlength);

	for(var i =0; i<wordlength;i++){
	blanks.push("_");
	}

}

console.log(blanks);
