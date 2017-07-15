 var numOfSquares = 9;
 var colors = [];
 var pickedColor;
 var h1 = document.querySelector("h1");
 var square = document.querySelectorAll(".square");
 var colorDisplay = document.querySelector("#colorDisplay");
 var messageDisplay = document.querySelector("#message");
 var resetButton = document.querySelector("#reset");
 var modeBtns = document.querySelectorAll(".mode");

 init();

 function init(){
 	// Mode button event listeners function
 	setUpButtons();
 	// Sets up the amount of squares as well as, color of squares
 	setUpSquares();
 	// Reset...
	 reset();
 }

 	function setUpSquares(){
 		for(var i = 0; i < square.length; i++){
	 	//add click listeners to squares
	 	square[i].addEventListener("click", function(){
	 		//Grab color of clicked square
	 		var clickedColor = this.style.background;
	 		// Compare color to picked color
		 	if(clickedColor === pickedColor){
		 		messageDisplay.textContent = "Correct!";
		 		changeColors(clickedColor);
		 		h1.style.background = clickedColor;
		 		resetButton.textContent = "Play Again?";
		 	} else{
		 		this.style.background = "transparent";
		 		messageDisplay.textContent = "Try Again";
		 	}
	 	}); 
	 }
 	}

 	function setUpButtons(){
 		 	// Mode button event listeners
 	 for(var i = 0; i < modeBtns.length; i++){
		modeBtns[i].addEventListener("click", function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			modeBtns[2].classList.remove("selected");
			this.classList.add("selected");

			 // this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 9;

			 if (this.textContent === "Easy") {
			 	numOfSquares = 3;
			 }
			 else if (this.textContent === "Medium"){
			 	numOfSquares = 6;
			 }
			 else{
			 	numOfSquares = 9;
			 }
			reset();

			//figure out how many squares to show
			//pick new colors
			//pick a new pickedColor
			//update page to reflect changes
		});
	 }
 	}
 

 	function reset(){
 	colors = generateRandomColors(numOfSquares);
 	// pick a new random color from the array
 	pickedColor = pickColor();
 	//change colorDisplay to match picked color
 	colorDisplay.textContent = pickedColor;
 	resetButton.textContent = "New Colors";

 	messageDisplay.textContent= "";

 	//change colors of square
 	for(var i =  0; i < square.length; i++){
 		if(colors[i]){
 			square[i].style.display = "block";
 			square[i].style.background = colors[i];
 		}
 		else if(numOfSquares === 6){
 			square[i].style.display = "block";
 			square[i].style.display = "none";
 		}
 		else {
 			square[i].style.display = "none";
 		}
 		
 	}
 	h1.style.background = "black";
 	}


 resetButton.addEventListener("click", function(){
 	reset();
 });


 colorDisplay.textContent = pickedColor;



 	function changeColors(color){
 		//loop through all squares
 			for (var i = 0; i < square.length; i++) {
 				//change each color to match given color
 				square[i].style.background = color;
 			}
 	}

 	function pickColor(){
 		var random = Math.floor(Math.random() * colors.length);
 		return colors[random];
 	}

 	function generateRandomColors(num){
 		//make an array
 		var arr = [];
 		//repeat "num" times
 		for(var i = 0; i < num; i++){
 			//get random color and push into arr
 			arr.push(randomColor());
 		}
 		//return that array
 		return arr;
 	}

 	 	function randomColor(){
 	 		// pick a red from 0 - 255
 	 		var r = Math.floor(Math.random() * 256);
 	 		// pick a green from 0 - 255
 	 		var g = Math.floor(Math.random() * 256);
 	 		// pick a blue from 0 - 255
 	 		var b = Math.floor(Math.random() * 256);
 	 		
 	 		return "rgb(" + r + ", " + g + ", " + b + ")";
 	 	}


