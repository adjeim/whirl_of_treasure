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

		for (var i = 0; i < word.array.length; i ++) {
			if (word.array[i].indexOf(userGuess) === 0) {
				indexes.push(i);
				// console.log(indexes);
				// console.log("your answer is correct");
				// return indexes;
			} //else {
				//console.log("your answer is incorrect");
				// return
			//}
			// console.log(indexes);

		}
		console.log(indexes);

		// loop through the word array. 
		// if the letter the user guessed is present, log the index where that letter can be found
		// if the letter is not present, logs an empty array

		// if the array is empty, console.log("your answer is incorrect")
		// if the array has indexes in it, change those indexes to bg color white

		if (indexes[0] === undefined) {
			console.log("your answer is incorrect");
		} else {
			console.log("your answer is correct");
			$(".lettercard")[(indexes[0])].css("background-color", "white");

		}




		// if (word.array.indexOf(userGuess) > -1) {
		// 	// console.log("your guess is correct");
		// 	// console.log(word.array.indexOf(userGuess));
		// 	// only shows the first instance
		// 	// if the letter the user guessed is somewhere in the word
		// 	var indexes = [];
		// 	for (var i = 0; i < word.array.length; i ++) {

		// 		indexes.push(word.array[i].indexOf(userGuess));
		// 		// try to push to an array all of the indexes that contain the user's guessed letter

		// 		// 
		// 	}
		// 	console.log(indexes);
		// } else {
		// 	// console.log("your guess is incorrect");
		// }

		// if userGuess is found somewhere inside the array of the word, turn those indexes where that guess is correct to background color white
		// turn all the guesses to lowercase, but lower or upper is okay for the guess
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

