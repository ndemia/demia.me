// Get book and music information to display in the footer
export const updateBooksAndMusic = function () {
	fetch('js/currently.json')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			document.querySelector('.book').innerText = data.book;
			document.querySelector('.author').innerText = data.author;
			document.querySelector('.band').innerText = data.band;
			document.querySelector('.album').innerText = data.album;
		})
		.catch((err) => {
			console.log(err);
		});
};
