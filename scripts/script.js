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

// going to want to make a word list that the whirl loops through, changing the index to the next word when the user gets it correct


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

var kitten = new Word("kitten", "a young domestic animal");
var generosity = new Word("generosity", "a quality found in those who share what they have");
var incomprehensibilities = new Word("incomprehensibilities", "things that are difficult or impossible to understand");


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

		$("#hint").html(word.hint);
		$("#hint").hide();

	}
	this.showBlanks();
	// call the function immediately when the whirl is created

	this.showHint = function() {
		$("#hint").show();
		// $("#show-hint").html("Hide Hint");

	}

	this.hideHint = function() {
		$("#hint").hide();
		// $("#show-hint").html("Hide Hint");

	}

	this.guessLetter = function() {
		var userGuess = $("input").val();
		// console.log(userGuess);

		var indexes = [];
		// create a blank array to store the indexes where user guess can be found

		for (var i = 0; i < word.array.length; i ++) {
			if (word.array[i].indexOf(userGuess) === 0) {
				indexes.push(i);

			} 
		}
		// loop through the word array, and for index that the user's guess is found, push that index to the indexes array

		console.log(indexes);

		if (indexes[0] === undefined) {
			// if there is nothing in the indexes array because the user's guess was not found
			console.log("your answer is incorrect");

		} else {
			// otherwise, loop through the array of indexes, and change the background color of the indexes matching the user's guess
			console.log("your answer is correct");
			for (var i = 0; i < indexes.length; i ++) {
				var changeMe = $(".lettercard")[(indexes[i])];
				// console.log(changeMe);
				$(changeMe).css("background-color", "white");
			}
		}

		document.getElementById("submit-input").value = "";
		// once the user's guess is over, change the input value to blank again so the user can make a new guess
	}



}

var wheel = new Whirl(kitten);
// wheel.showBlanks();


// Event listeners: 

$("#show-hint").click(function(){
	wheel.showHint();
})

$("#hide-hint").click(function(){
	wheel.hideHint();
})

$("#submit-guess").click(function(){
	wheel.guessLetter();
})

// may be cool later to rewrite using vanilla js:
			// var node = document.createElement("div");
			// var textnode = document.createTextNode(word.array[i]);
			// node.appendChild(textnode);
			// // console.log(node);
			// document.getElementById("gamescreen").appendChild(node);
			// // why doesn't this line work?

