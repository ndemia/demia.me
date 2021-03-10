// Create random number between 1 and 100
const generateNumber = function () {
	return Math.floor(Math.random() * 100 + 1);
};


// Create a new border/shape for the image
const newImageBorder = function () {

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
	document.querySelector('.main__picture').style.cssText = 
	`border-radius: ${xNumber1}% ${xNumber2}% ${xNumber3}% ${xNumber4}% / ${yNumber1}% ${yNumber2}% ${yNumber3}% ${yNumber4}%;`;
};


// Add new border radius to the image on page load
document.addEventListener('DOMContentLoaded', newImageBorder);


// Event listener to listen for clicks in the image and change its shape
document.querySelector('.main__picture').addEventListener('click', newImageBorder);


// Function for changing favicon according to theme
const checkDarkMode = function () {

	// Check favicon in case browser's dark theme is enabled, returns boolean
	let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

	// Reference to the favicon in the html
	let favicon = document.querySelector('link[rel="icon"]');

	// If dark true, show white favicon
	if (isDark) {
		favicon.href = 'images/white/favicon-32x32.png';
	}
};


// Event listener for favicon change when the page loads
document.addEventListener('DOMContentLoaded', checkDarkMode);