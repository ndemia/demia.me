// Create the random list of facts to show in my About page
const generateRandomFacts = function () {

	fetch('js/facts.json')
	.then((response) => response.json())
	.then(data => {

		// Creates a random number between 1 and and the total amount of facts present in the facts list
		const generateRandomNumber = function () {
			return Math.floor(Math.random() * facts.length + 1);
		}

		// Save the response, which is an object, as an array
		let facts = Object.values(data);

		// Create array that will later store the 5 random numbers of the facts to fetch
		let factsIndexArr = [];

		// Create array that will later store the duplicates
		let duplicates = [];

		// Iterate over the 5 total indexes of the array (because that's the total amount of facts I will show), and for each, generate a random number
		for (let i = 0; i <= 4; i++) {
			
			// Save the random number
			let randomNumber = generateRandomNumber();

			// Push it into the array previously created
			factsIndexArr.push(randomNumber);
		}

		// Check for duplicates and save them
		duplicates = factsIndexArr.filter((val, index) => index !== factsIndexArr.indexOf(val));
		
	})	
	.catch((err) => {
		console.log(err);
	});

};

generateRandomFacts();