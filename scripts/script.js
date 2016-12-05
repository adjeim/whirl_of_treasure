// A single page app allowing the user to play a simple game of Wheel of Fortune. Use JavaScript to give the user a word to guess letter by letter. Will the user lose points as they guess wrong? Will they try to beat the clock? Do they only get 3 guesses? You decide! Make it clear to the user what their goal is. The app should be styled with simple but modern design trends and fun for the user. Remember keep your user engaged.


// Game works in Wheel of Fortune style
// Design and UI/UX carefully though and through
// JS throws no errors
// User can play several rounds of new words
// Hints are given to direct the user what the word is related to
// HTML/CSS is properly formatted

// make a Word object
// make a new Word and store it in a Word list (maybe later)

// make easy word, medium word, hard word

// user goal is to guess the word correctly. for each guess wrong, you lose gold. for each guess right, you win gold. 

// bonus: if you guess the word correctly, win a chance to spin for bonus gold. exchange your gold for sweet prizes

// toggle showHint


// display on the document the number of inline divs where the letters will appear
// 

// user guess a letter
// if userLetter is inside the word, then return true and fill in those letters
// if false, then minus 1 gold

// when something is clicked, show a hint that shows by sliding down

function Word(string, hint) {
	this.string = string;
	this.array = this.string.split("");
	this.characters = this.string.length;
	this.hint = hint;
}

var kitten = new Word("kitten", "a domestic animal");

function Whirl(word) {

	var gameScreen = $("#gamescreen");

	this.showBlanks = function() {
		for (var i = 0; i < word.characters; i ++) {
			gameScreen.append("<div class='lettercard'>" + word.array[i] + "</div>");
			$(".lettercard").css("background-color", "black");
			$(".lettercard").css("display", "inline-block");
			$(".lettercard").css("margin-left", "20px");
			$(".lettercard").css("font-size", "40px");
			// later change these in css. this is only temporary.
		}

	}

	this.showHint = function() {
		$("#show-hint").click().

	}



}

var wheel = new Whirl(kitten);
wheel.showBlanks();




// may be cool later to rewrite using vanilla js:
			// var node = document.createElement("div");
			// var textnode = document.createTextNode(word.array[i]);
			// node.appendChild(textnode);
			// // console.log(node);
			// document.getElementById("gamescreen").appendChild(node);
			// // why doesn't this line work?

