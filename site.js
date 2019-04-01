// Create a new border for the image
function newImageBorder() {

	// Create random number between 1 and 100
	function generateNumber() {
		return Math.floor(Math.random() * 100 + 1);
	}

	// Assign values: 2 random and the other 2 to keep proportions
	let xNumber1 = generateNumber();
	let xNumber2 = 100 - xNumber1;
	let xNumber3 = generateNumber();
	let xNumber4 = 100 - xNumber3;

	let yNumber1 = generateNumber();
	let yNumber2 = generateNumber();
	let yNumber3 = 100 - yNumber2;
	let yNumber4 = 100 - yNumber1;

	// Add CSS style with the values created above
	document.querySelector('.image').style.cssText = 
	`border-radius: ${xNumber1}% ${xNumber2}% ${xNumber3}% ${xNumber4}% / ${yNumber1}% ${yNumber2}% ${yNumber3}% ${yNumber4}%;`;
};

// Add border to the image on page load
newImageBorder();

// Add onclick event
document.querySelector('.image').onclick = function() {newImageBorder()};