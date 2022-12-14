// Create the random list of facts to show in my About page
const generateRandomFacts = function () {

	fetch('js/facts.json')
		.then((response) => response.json())
		.then(data => {

			// Creates a random number between 0 and and the total amount of facts present in the facts list
			const generateRandomNumber = function () {
				return Math.floor(Math.random() * facts.length);
			}

			// Save the response, which is an object, as an array
			let facts = Object.values(data);

			// Create array that will later store the 5 random numbers of the facts to fetch
			let factsIndexArr = [];

			// Create array that will later store the duplicates
			let duplicates = [];

			const addRandomNumbersToArray = function (arr) {

				// Iterate 5 times (because that's the total amount of facts I will show), and for each one generate a random number
				for (let i = 0; i < 5; i++) {	
						
					// If that index is empty
					if (arr[i] === undefined) {

						// Push a new number
						arr.push(generateRandomNumber());

					}
				}

				return arr;
			};

			const checkForDuplicatesAndReplace = function (arr) {

				// Save the duplicates
				duplicates = arr.filter((value, index) => {

					return index !== arr.indexOf(value);

				});
				
				// If there are any duplicates found
				if (duplicates.length > 0) {

					// Loop through facts array
					for (let i = 0; i < arr.length; i++) {

						// Loop through duplicates array
						for (let j = 0; j < duplicates.length; j++) {

							// Compare each element of both arrays to each other
							if (arr[i] === duplicates[j]) {

								// Remove duplicates from facts array, all of them
								arr.splice(i, 1);

							} 
						}
					}
				}

				return arr;
			};		

			addRandomNumbersToArray(factsIndexArr);

			checkForDuplicatesAndReplace(factsIndexArr);

			// Iterate over the factsIndexArr, that will determine the amount of facts to show in the UI
			for (let i = 0; i < factsIndexArr.length; i++) {
			
				// Use that value to pair it to a fact, and show them in the UI
				document.querySelector('.description__list')
					.insertAdjacentHTML('afterbegin', `<li class="description__item">${facts[factsIndexArr[i]]}</li>`);
			}
			
		})	
		.catch((err) => {
			document.querySelector('.description__list').insertAdjacentHTML('afterbegin', `<li class="description__item">Here should appear a list of random facts about me, but instead you see this error. And I just wanted us to know each other a little better :)</li>`);
		});

};

document.addEventListener('DOMContentLoaded', generateRandomFacts());