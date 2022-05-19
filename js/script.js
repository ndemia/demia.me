// Change favicon according to theme
const checkDarkMode = function () {

	// In case browser's dark theme is enabled, returns boolean
	let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

	// Reference to the favicon in the html
	let favicon = document.querySelector('link[rel="icon"]');

	// If dark true, show white favicon
	if (isDark) {
		favicon.href = 'assets/favicons/white/favicon-32x32.png';
	}
};


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


// Event listeners
document.addEventListener('DOMContentLoaded', checkDarkMode);
document.addEventListener('DOMContentLoaded', updateBooksAndMusic);