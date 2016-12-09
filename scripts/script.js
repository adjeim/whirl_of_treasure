
$(document).ready(function(){


function Word(string, hint, whitespace) {
	this.string = string;
	this.array = this.string.split("");
	this.characters = this.string.length;
	this.hint = hint;
	this.whitespace = whitespace;

	// Filter through the array and return the number of unique characters in the word.
	this.maxGold = this.array.filter((value, index, arr) => arr.indexOf(value) === index).length - this.whitespace;

	this.minGold = -26 + this.maxGold;


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
		this.goldCounter = 0;
		$("#gold").html("My gold: " + this.goldCounter);

		this.currentWord = wordlist[this.currentWordIndex];

		for (var i = 0; i < this.currentWord.characters; i ++) {
			console.log(this.currentWord.array[i]);

			if (this.currentWord.array[i] !== " ") {
				gameScreen.append("<div class='card'><span class='lettercard letter-hidden'>" + this.currentWord.array[i] + "</span></div>");

			} else {
				// this.whitespace += 1;
				// console.log(this.whitespace);
				gameScreen.append("<div class='card'><span class='lettercard whitespace'>&nbsp;</span></div>");
				$(".whitespace").css("background-color", "white");

			}
			// later change these in css. this is only temporary.

			$("#max-gold").html("Max gold: " + this.currentWord.maxGold);
			$("#min-gold").html("Min gold: " + this.currentWord.minGold);
		}

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
		var userGuess = $("input").val().toLowerCase();
		// console.log(userGuess);

		var alreadyGuessed;
		// Create new variable which will be assigned true if the user has already guessed a specific letter.


		if (guessedList.indexOf(userGuess) === -1) {
			// If the new guess is not already written to already-guessed list, add it.
			guessedList += userGuess;
			$("#already-guessed").html(guessedList);
		} else {
			// $("#already-guessed").append(userGuess);
			alreadyGuessed = true;
			// console.log("You've guessed that already.");
		}


		var indexes = [];
		// Create a blank array to store the indexes where the user's guess can be found.

		for (var i = 0; i < this.currentWord.array.length; i ++) {
			if (this.currentWord.array[i].indexOf(userGuess) === 0) {
				indexes.push(i);
			} 
		}
		// Loop through the word array, and for index where the user's guess is found, push that index to the indexes array.

		console.log(indexes);

		var correctAnswer;
		// Create a new variable for the correct answer.

		var check = /^[a-zA-Z]*$/;

		if (check.test(userGuess) == false) {
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
				var changeLetter = $(".lettercard")[(indexes[i])];
				var changeLettercard = $(".card")[(indexes[i])];
				console.log(changeLetter);
				// $(changeLetter).css("visbility", "visible");
	
				$(changeLetter).removeClass("letter-hidden");
				$(changeLetter).addClass("letter-visible");
				$(changeLettercard).addClass("guessed");
			}
			this.correctAnswer = true;
			this.changeGold();
		}

		document.getElementById("submit-input").value = "";
		// Once the user's guess is over, reset the input value to blank so the user can make a new guess.

		this.endWhirl();
		// Check to see if the user has finished the game.
	}

	this.multiplier = 1;
	// Set the intial multiplier to 1



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
		guessedList = "";
		// Reset the list of guessed letters.

		gameScreen.children("div").remove();
		// Clear the game screen of the last word.

		var resultMessage = $("#result");
		resultMessage.html("");
		// Reset the result message.


		this.currentWordIndex += 1;
		// console.log(this.currentWordIndex);
		this.showBlanks();
		// Set the screen ready to play the new word.
	}



	this.endWhirl = function() {
		// If all of the letter cards have a class of guessed or a class of whitespace, the game is over. Show a message of congrats and a message of the winnings. 

		var gameOver = false;

		this.checkPuzzle = function() {
			for (var i = 0; i < this.currentWord.array.length; i ++) {
				if ($(".card").eq(i).hasClass("guessed") === false && $(".lettercard").eq(i).hasClass("whitespace") === false) {
					console.log($(".card").eq(i).hasClass("guessed"));
					console.log($(".card").eq(i).hasClass("whitespace"));
					return false;
				}
			
			}
			return true;
		}
		// end function checkPuzzle

		if (this.checkPuzzle()) {
			// console.log("You win!");
			var resultMessage = $("#result");
			resultMessage.html("You win and walk away with " + this.goldCounter + " gold!");
		
		} else {
			console.log("Keep it up!");
		}

	}


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



// $("#how-to").click(function(){
// 	$("#instructions").toggle();
// })

});

// Features to add:

// Instructions are hidden and slide down on click.
// Gold coin images appear and disappear when the amount of gold changes.
// Allow user to guess the entire word before guessing all of the letters.
// Let the user submit guesses by clicking enter.


