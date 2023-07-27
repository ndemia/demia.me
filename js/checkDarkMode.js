// Change favicon according to theme
export const checkDarkMode = function () {
	// In case browser's dark theme is enabled. Returns boolean
	let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

	// Check for DOS mode as it has its own favicon
	let isDos = document.documentElement.classList.contains('dos-theme');

	// If dark true, and there's no DOS mode, show white favicon
	if (isDark === true && isDos === false) {
		document.querySelector('link[type="image/svg+xml"]').href = 'favicon-white.svg';
	}
};
