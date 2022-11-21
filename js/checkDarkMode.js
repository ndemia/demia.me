// Change favicon according to theme
export const checkDarkMode = function () {

	// In case browser's dark theme is enabled, returns boolean
	let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

	// If dark true, show white favicon
	if (isDark) {
		document.querySelector('link[type="image/svg+xml"]').href = 'favicon-white.svg';
	}
};