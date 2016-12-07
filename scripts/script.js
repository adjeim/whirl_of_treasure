// A single page app allowing the user to play a simple game of Wheel of Fortune. Use JavaScript to give the user a word to guess letter by letter. Will the user lose points as they guess wrong? Will they try to beat the clock? Do they only get 3 guesses? You decide! Make it clear to the user what their goal is. The app should be styled with simple but modern design trends and fun for the user. Remember keep your user engaged.


// Game works in Wheel of Fortune style
// Design and UI/UX carefully though and through
// JS throws no errors
// User can play several rounds of new words
// Hints are given to direct the user what the word is related to
// HTML/CSS is properly formatted

// make a new Word and store it in a Word list (maybe later)

// make easy word, medium word, hard word

// spin the wheel to get a multiplier, do you want to take the risk for more fabulous prizes? or you could go into fabulous debt. 

// bonus: if you guess the word correctly, win a chance to spin for bonus gold. exchange your gold for sweet prizes

// toggle showHint

// if user can guess the whole word beforehand, give them...?

// when something is clicked, show a hint that shows by sliding down

// notice when the word has been solved

function Word(string, hint, whitespace) {
	this.string = string;
	this.array = this.string.split("");
	this.characters = this.string.length;
	this.hint = hint;
	this.whitespace = whitespace;
	this.maxGold = this.array.filter((value, index, arr) => arr.indexOf(value) === index).length - this.whitespace;
	this.minGold = -this.maxGold;
	// Filter through the array and return the number of unique characters in the word.

}

var kitten = new Word("kitten", "a young domestic animal", 0);
var generosity = new Word("generosity", "a quality found in those who share what they have", 0);
var incomprehensibilities = new Word("incomprehensibilities", "things that are difficult or impossible to understand", 0);
var winterSolstice = new Word("winter solstice", "December 21", 1);


var firstWordList = [kitten, generosity, incomprehensibilities, winterSolstice];


function Whirl(wordlist) {

	var gameScreen = $("#gamescreen");

	this.currentWordIndex = 0;

	this.showBlanks = function() {
		this.currentWord = wordlist[this.currentWordIndex];
		// this.whitespace = 

		for (var i = 0; i < this.currentWord.characters; i ++) {
			console.log(this.currentWord.array[i]);
			// this.whitespace = 0;

			if (this.currentWord.array[i] !== [/\s/]) {
				gameScreen.append("<div class='lettercard'>" + this.currentWord.array[i] + "</div>");
				$(".lettercard").css("background-color", "black");
				$(".lettercard").css("display", "inline-block");
				$(".lettercard").css("margin-left", "20px");
				$(".lettercard").css("font-size", "40px");
			} else {
				// this.whitespace += 1;
				// console.log(this.whitespace);
				gameScreen.append("<div class='whitespace'>&nbsp;</div>");
				// $(".lettercard").css("background-color", "black");
				$(".lettercard").css("display", "inline-block");
				$(".lettercard").css("margin-left", "20px");
				$(".lettercard").css("margin-left", "20px");
				$(".lettercard").css("font-size", "40px");

			}
			// later change these in css. this is only temporary.

			$("#max-gold").html("Max gold: " + this.currentWord.maxGold);
			$("#min-gold").html("Min gold: " + this.currentWord.minGold);
		}

		// if i is not a whitespace character, place a card
		// if it is a whitepsace character, place a div that contains a nbsp or just space inside
		// decrement the max gold by the number of whitespace chars

		$("#hint").html(this.currentWord.hint);
		$("#hint").hide();



	}
	this.showBlanks();
	// Call the function immediately when the whirl is created.

	this.showHint = function() {
		$("#hint").show();
		// $("#show-hint").html("Hide Hint");

	}

	this.hideHint = function() {
		$("#hint").hide();
		// $("#show-hint").html("Hide Hint");

	}

	var guessedList = "";

	this.guessLetter = function() {
		var userGuess = $("input").val();
		// console.log(userGuess);

		var alreadyGuessed;
		// var guessed = "";
		// $("#already-guessed").append(userGuess)

		if (guessedList.indexOf(userGuess) === -1) {
			// If the new guess is not already written to already-guessed list, add it.
			guessedList += userGuess;
			$("#already-guessed").html(guessedList);
		} else {
			// $("#already-guessed").append(userGuess);
			alreadyGuessed = true;
			// console.log("You've guessed that already.");
		}

		// console.log(guessed);
		// guessed + userGuess;
		// console.log(guessed);
		var indexes = [];
		// Create a blank array to store the indexes where the user's guess can be found.

		for (var i = 0; i < this.currentWord.array.length; i ++) {
			// if (userGuess == [/\s/]) {
			// 	console.log("Please enter a letter from a to z.");
			// }
			// else 
			if (this.currentWord.array[i].indexOf(userGuess) === 0) {
				indexes.push(i);

			} 
		}
		// Loop through the word array, and for index where the user's guess is found, push that index to the indexes array.

		console.log(indexes);

		var correctAnswer;
		// Create a new variable for the correct answer.

		if (userGuess === " ") {
			console.log("Please enter a letter from a to z.");

		} else if (alreadyGuessed === true) {
			// If the user has already guessed this letter:
			console.log("You've already guessed that letter.");

		} else if (indexes[0] === undefined) {
			// If there is nothing in the indexes array because the user's guess was not found:
			console.log("your answer is incorrect");
			this.correctAnswer = false;
			this.changeGold();

		} else {
			// Otherwise, loop through the array of indexes and change the background color of the indexes matching the user's guess.
			console.log("your answer is correct");
			for (var i = 0; i < indexes.length; i ++) {
				var changeMe = $(".lettercard")[(indexes[i])];
				// console.log(changeMe);
				$(changeMe).css("background-color", "white");
				$(changeMe).addClass("guessed");
			}
			this.correctAnswer = true;
			this.changeGold();
		}

		document.getElementById("submit-input").value = "";
		// Once the user's guess is over, reset the input value to blank so the user can make a new guess.
	}

	this.multiplier = 1;
	// Set the intial multiplier to 1

	this.goldCounter = 0;
	$("#gold").html("My gold: " + this.goldCounter);

	this.changeGold = function() {
		if (this.correctAnswer === true) {
			this.goldCounter += 1;
			$("#gold").html("My gold: " + this.goldCounter);
			// If the user's guess is correct, increment the gold by 1.
		}
		else {
			this.goldCounter -= 1;
			$("#gold").html("My gold: " + this.goldCounter);
			// If the user's guess is incorrect, decrement the gold by 1.
		}
	}

	this.incrementIndex = function() {
		gameScreen.children("div").remove();
		// Clear the game screen of the last word.

		this.currentWordIndex += 1;
		// console.log(this.currentWordIndex);
		this.showBlanks();
		// Set the screen ready to play the new word.
	}

	// this.gameOver = function() {
	// 	// if all of the cards are turned over (have a class of guessed), show a message of congrats
	// 	// var gameEnd = false;

	// 	for (var i = 0; i < this.currentWord.array.length; i ++) {
	// 		if ($(this.currentWord.array[i]).hasClass("guessed")) {
	// 			console.log(i);
	// 		}
	// 		// var isGuessed = this.currentWord.array[i];
	// 		// if ($(isGuessed).hasClass("guessed")) {
	// 			// console.log(isGuessed);

	// 			// return true;
	// 		// }

	// 	}
	// 	// return false;

	// 	// show a final gold count


	// }


}

var wheel = new Whirl(firstWordList);


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

$("#new-whirl").click(function(){
	wheel.incrementIndex();
})
