



var tiles = document.querySelectorAll(".square");
var rgbSelected = document.querySelector("span");
var colors = randomColors(6); // This was not a fucntion at first it was a hard coded array of strings. 
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");

var picked = randomColor();
rgbSelected.textContent = picked;
document.querySelector("h1").style.background = "blue";

// new game button refreshes colors on click
var newgame = document.querySelector("#newgame");
newgame.addEventListener("click",function(){
	document.querySelector("h1").style.background = "blue";
	// generate new colors on each click
	 colors = randomColors(6);
	//pick new random color
	picked = randomColor();
	//change rgb html 
	rgbSelected.textContent = picked;
	// change colors 
	for (var i = 0; i < tiles.length; i++) {
		tiles[i].style.background = colors[i];
	}

})

//easy button generates 3  random squares
easybtn.addEventListener("click", function(){
	//add that class to easy btn 
	easybtn.classList.add("selected");
	// remove that class from hard button
	hardbtn.classList.remove("selected");
	// generate 3 new colors
	colors = randomColors(3);
	// pick one color from those 3 
	picked = randomColor();
	// update displayed picked color
	rgbSelected.textContent = picked;
	// hide 3 other squares 
    for (var i = 0; i < 6; i++) {
    	tiles[i].style.background = colors[i];
    	tiles[i+3].style.display = "none";
    	 }

})

//hard button generates 6 random squares
var hard = document.querySelector("#hard");
hard.addEventListener("click",function(){

	hardbtn.classList.add("selected");
	// remove that class from hard button
	easybtn.classList.remove("selected");
	// generate 3 new colors
	colors = randomColors(6);
	// pick one color from those 6 
	picked = randomColor();
	// update displayed picked color
	rgbSelected.textContent = picked;
	// hide 3 other squares 
    for (var i = 0; i < 6; i++) {
    	 tiles[i].style.background = colors[i];
    	 tiles[i+3].style.display = "block";// block shows , none hides
    	 tiles[i+3].style.background = colors[i+3]; 
    	 }
	
})


for (var i = 0; i < tiles.length; i++) {
	//add initial colors to tiles
	tiles[i].style.background = colors[i];

	tiles[i].addEventListener("click",function(){
		var clicked = this.style.background;

		if(clicked == picked) {	
			document.querySelector("p").textContent = "Correct";
		    document.querySelector("h1").style.background = picked;
			correctColor();
		}
		else{
			document.querySelector("p").textContent = "Try Again!";
			this.style.background = "black";
		}
	 })
}

//changes all tiles to picked color 
function correctColor(){
	for (var i = 0; i < tiles.length; i++) {
				tiles[i].style.background = picked;
			}
}

//returns a random rgb string from colors array
function randomColor(){
	
  var subscript = Math.floor((Math.random() * colors.length) + 0);
  	return colors[subscript];
}


 // generate a passed length array of random colors
  function randomColors(num){
  	var colors = [];
  	for (var i = 0; i < num; i++) {
  			var r = Math.floor((Math.random() * 255) + 0);
  			var g = Math.floor((Math.random() * 255) + 0);
  			var b = Math.floor((Math.random() * 255) + 0);

  		colors.push("rgb(" + r + ", " + g + ", " + b + ")");
  	}
	return colors;
  }