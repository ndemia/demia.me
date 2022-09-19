// Change favicon according to theme
const checkDarkMode = function () {

	// In case browser's dark theme is enabled, returns boolean
	let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

	// If dark true, show white favicon
	if (isDark) {
		document.querySelector('link[type="image/svg+xml"]').href = 'favicon-white.svg';
	}
};

// Create the random list of facts to show in my About page
// const generateRandomFacts = function () {

// 	fetch('js/facts.json')
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then(data => {

// 		// Creates a random number between 1 and and the total amount of facts present in the json/array
// 		const generateRandomNumber = function () {
// 			return Math.floor(Math.random() * facts.length + 1);
// 		}

// 		// Save the response, that's an object, as an array
// 		let facts = Object.values(data);

// 		// Create array that will later store the 5 random numbers of the facts to fetch
// 		let factsIndexArr = [];

// 		// Create array that will later store the duplicates
// 		let duplicates = [];

// 		// Iterate over the 5 total indexes of the array (because that's the total amount of facts I will show), and for each, generate a random number
// 		for (let i = 0; i <= 4; i++) {
			
// 			// Save the random number
// 			let randomNumber = generateRandomNumber();

// 			// Push it into the array previously created
// 			factsIndexArr.push(randomNumber);
// 		}

// 		// Check for duplicates and save them
// 		duplicates = factsIndexArr.filter((val, index) => index !== factsIndexArr.indexOf(val));

// 		console.log(factsIndexArr)
// 		console.log(duplicates)

		
// 	})	
// 	.catch((err) => {
// 		console.log(err);
// 	});

// };

// generateRandomFacts();


// Get book and music information to display in the footer
const updateBooksAndMusic = function () {

	fetch('js/currently.json')
	.then((response) => {
		return response.json();
	})
	.then(data => {
		document.querySelector('.book').innerText = data.book;
		document.querySelector('.author').innerText = data.author;
		document.querySelector('.band').innerText = data.band;
		document.querySelector('.album').innerText = data.album;
	})	
	.catch((err) => {
		console.log(err);
	});

}

document.addEventListener('DOMContentLoaded', checkDarkMode());
document.addEventListener('DOMContentLoaded', updateBooksAndMusic());