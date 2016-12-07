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

// going to want to make a word list that the whirl loops through, changing the index to the next word when the user gets it correct

// if user can guess the whole word beforehand, give them

// when something is clicked, show a hint that shows by sliding down

// notice when the word has been solved

function Word(string, hint, maxGold) {
	this.string = string;
	this.array = this.string.split("");
	this.characters = this.string.length;
	this.hint = hint;
	this.maxGold = this.string.length;
}

var kitten = new Word("kitten", "a young domestic animal");
var generosity = new Word("generosity", "a quality found in those who share what they have");
var incomprehensibilities = new Word("incomprehensibilities", "things that are difficult or impossible to understand");

var wordList = [kitten, generosity, incomprehensibilities];


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

		var correctAnswer;

		if (indexes[0] === undefined) {
			// if there is nothing in the indexes array because the user's guess was not found
			console.log("your answer is incorrect");
			this.correctAnswer = false;
			this.changeGold();


		} else {
			// otherwise, loop through the array of indexes, and change the background color of the indexes matching the user's guess
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
		// once the user's guess is over, change the input value to blank again so the user can make a new guess
	}

	this.multiplier = 1;
	// set the intial multiplier to 1

	this.goldCounter = 0;
	$("#gold").html("My gold: " + this.goldCounter);
	$("#max-gold").html("Max gold: " + word.maxGold);

	this.changeGold = function() {
		if (this.correctAnswer === true) {
			this.goldCounter += 1;
			$("#gold").html("My gold: " + this.goldCounter);
			// if the user's guess was correct, increment the gold by 1
		}
		else {
			this.goldCounter -= 1;
			$("#gold").html("My gold: " + this.goldCounter);
			// if the user's guess was incorrect, decrement the gold by 1
		}
	}

	// this.gameOver = function() {
	// 	// if all of the cards are turned over (have a class of guessed), show a message of congrats
	// 	// var gameEnd = false;

	// 	for (var i = 0; i < word.array.length; i ++) {
	// 		if ($(word.array[i]).hasClass("guessed")) {
	// 			console.log(i);
	// 		}
	// 		// var isGuessed = word.array[i];
	// 		// if ($(isGuessed).hasClass("guessed")) {
	// 			// console.log(isGuessed);

	// 			// return true;
	// 		// }

	// 	}
	// 	// return false;

	// 	// show a final gold count


	// }


}

function nextWhirl(wordList) {

}

var wheel = new Whirl(wordList[0]);
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

$("#new-whirl").click(function(){
	nextWhirl();
})


// may be cool later to rewrite using vanilla js:
			// var node = document.createElement("div");
			// var textnode = document.createTextNode(word.array[i]);
			// node.appendChild(textnode);
			// // console.log(node);
			// document.getElementById("gamescreen").appendChild(node);
			// // why doesn't this line work?

