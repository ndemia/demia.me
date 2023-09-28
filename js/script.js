import { checkDarkMode } from './checkDarkMode.js';
import { updateBooksAndMusic } from './updateBooksAndMusic.js';

const dosButton = document.querySelector('.button--dos');

const changeUI = (theme) => {
	// Save original elements
	const originalSocialLinks = `<ul class="socials__list">
		<li class="list__element">
			<a class="link link--social" href="mailto:ndemia@fastmail.com" target="_blank" rel="noreferrer noopener" title="Email">
				<span class="sr-only">Email</span>
				<svg class="link__icon" viewBox="0 0 24 24">
					<path
						d="M12,1c-2.938,0-5.701,1.145-7.778,3.223C2.144,6.301,1,9.063,1,12.001s1.145,5.7,3.222,7.778C6.3,21.856,9.061,23,11.999,23 c0,0,0.001,0,0.002,0c2.405,0,4.78-0.805,6.688-2.267c0.438-0.336,0.521-0.964,0.186-1.402c-0.336-0.438-0.962-0.521-1.402-0.186C15.911,20.342,13.968,21,12,21c-0.001,0-0.001,0-0.002,0c-2.403,0-4.663-0.936-6.362-2.636C3.937,16.665,3,14.405,3,12.001c0-2.404,0.936-4.665,2.636-6.364C7.335,3.937,9.596,3,12,3c4.962,0,9,4.037,9,9v1c0,1.103-0.897,2-2,2s-2-0.897-2-2V8c0-0.552-0.447-1-1-1s-1,0.448-1,1v0.025C14.162,7.391,13.13,7,12,7c-2.757,0-5,2.243-5,5s2.243,5,5,5c1.49,0,2.815-0.669,3.732-1.706C16.457,16.322,17.648,17,19,17c2.206,0,4-1.794,4-4v-1C23,5.935,18.065,1,12,1z M12,15c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S13.654,15,12,15z"
					/>
				</svg>
			</a>
		</li>
		<li class="list__element">
			<a class="link link--social" href="https://www.linkedin.com/in/ndemia/" target="_blank" rel="noreferrer noopener" title="LinkedIn">
				<span class="sr-only">LinkedIn</span>
				<svg class="link__icon" viewBox="0 0 16 16">
					<path
						d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
					/>
				</svg>
			</a>
		</li>
		<li class="list__element">
			<a class="link link--social" href="https://github.com/ndemia" target="_blank" rel="noreferrer noopener" title="GitHub">
				<span class="sr-only">GitHub</span>
				<svg class="link__icon" viewBox="0 0 16 16">
					<path
						d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
					/>
				</svg>
			</a>
		</li>
		<li class="list__element">
			<a class="link link--social" href="https://codepen.io/ndemia" target="_blank" rel="noreferrer noopener" title="Codepen">
				<span class="sr-only">Codepen</span>
				<svg class="link__icon" viewBox="0 0 16 16">
					<g transform="matrix(0.125,0,0,0.125,0,-6.06626e-13)">
						<path d="M117,73.204L103.24,64L117,54.796L117,73.204ZM69.5,112.22L69.5,86.568L93.348,70.62L112.596,83.492L69.5,112.22ZM64,77.012L44.548,64L64,50.988L83.456,64L64,77.012ZM58.5,112.22L15.404,83.492L34.656,70.62L58.5,86.568L58.5,112.22ZM11,54.796L24.764,64L11,73.204L11,54.796ZM58.5,15.78L58.5,41.432L34.656,57.384L15.404,44.508L58.5,15.78ZM69.5,15.78L112.596,44.508L93.348,57.384L69.5,41.432L69.5,15.78ZM127.952,43.784C127.94,43.7 127.92,43.624 127.908,43.544C127.88,43.388 127.852,43.232 127.812,43.084C127.788,42.992 127.752,42.904 127.724,42.816C127.68,42.68 127.636,42.548 127.584,42.416C127.548,42.324 127.504,42.232 127.46,42.148C127.404,42.02 127.344,41.9 127.272,41.784C127.224,41.696 127.168,41.612 127.116,41.528C127.044,41.412 126.968,41.3 126.884,41.192C126.824,41.112 126.76,41.032 126.696,40.956C126.608,40.852 126.516,40.752 126.42,40.656C126.348,40.584 126.28,40.508 126.204,40.444C126.1,40.352 125.996,40.264 125.892,40.18C125.808,40.116 125.728,40.052 125.644,39.992C125.612,39.972 125.584,39.944 125.552,39.924L67.052,0.924C65.204,-0.308 62.8,-0.308 60.948,0.924L2.452,39.924C2.42,39.944 2.392,39.972 2.36,39.992C2.272,40.052 2.192,40.116 2.112,40.18C2.004,40.264 1.9,40.352 1.8,40.444C1.724,40.508 1.652,40.584 1.58,40.656C1.484,40.752 1.392,40.852 1.308,40.956C1.24,41.032 1.176,41.112 1.116,41.192C1.036,41.3 0.96,41.412 0.888,41.528C0.832,41.612 0.78,41.696 0.728,41.784C0.66,41.9 0.6,42.02 0.54,42.148C0.5,42.232 0.456,42.324 0.42,42.416C0.364,42.548 0.32,42.68 0.276,42.816C0.248,42.904 0.216,42.992 0.192,43.084C0.152,43.232 0.124,43.388 0.096,43.544C0.08,43.624 0.06,43.7 0.052,43.784C0.02,44.016 0,44.256 0,44.5L0,83.5C0,83.74 0.02,83.98 0.052,84.22C0.06,84.296 0.08,84.376 0.096,84.456C0.124,84.612 0.152,84.764 0.192,84.916C0.216,85.008 0.248,85.096 0.276,85.184C0.32,85.316 0.364,85.452 0.42,85.588C0.456,85.676 0.5,85.764 0.54,85.852C0.6,85.976 0.66,86.096 0.728,86.22C0.78,86.304 0.832,86.388 0.888,86.472C0.96,86.588 1.036,86.696 1.116,86.804C1.176,86.888 1.24,86.968 1.308,87.044C1.392,87.144 1.484,87.248 1.58,87.34C1.652,87.416 1.724,87.488 1.8,87.556C1.9,87.648 2.004,87.736 2.112,87.82C2.192,87.884 2.272,87.948 2.36,88.008C2.392,88.028 2.42,88.056 2.452,88.076L60.948,127.076C61.872,127.692 62.936,128 64,128C65.064,128 66.128,127.692 67.052,127.076L125.552,88.076C125.584,88.056 125.612,88.028 125.644,88.008C125.728,87.948 125.808,87.884 125.892,87.82C125.996,87.736 126.1,87.648 126.204,87.556C126.28,87.488 126.348,87.416 126.42,87.34C126.516,87.248 126.608,87.144 126.696,87.044C126.76,86.968 126.824,86.888 126.884,86.804C126.968,86.696 127.044,86.588 127.116,86.472C127.168,86.388 127.224,86.304 127.272,86.22C127.344,86.096 127.404,85.976 127.46,85.852C127.504,85.764 127.548,85.676 127.584,85.588C127.636,85.452 127.68,85.316 127.724,85.184C127.752,85.096 127.788,85.008 127.812,84.916C127.852,84.764 127.88,84.612 127.908,84.456C127.92,84.376 127.94,84.296 127.952,84.22C127.984,83.98 128,83.74 128,83.5L128,44.5C128,44.256 127.984,44.016 127.952,43.784Z"
						/>
					</g>
				</svg>
			</a>
		</li>
	</ul>`;
	const originalLinkIcon = `<svg class="link__icon link__icon--inline" viewBox="0 0 24 24">
		<path
		d="M17,14L17,20C17,20 4,20 4,20C4,20 4,6 4,6C4,6 10,6 10,6L10,4L2,4L2,22L19,22L19,14L17,14ZM18.586,4L9.586,13L11,14.414L20,5.414L20,9L22,9L22,2L15,2L15,4L18.586,4Z"
		/>
	</svg>`;

	// New DOS-style elements to be inserted
	const dosSocialLinks = `<ul class="socials__list socials__list--dos">
		<li class="list__element">
			<a class="link link--social link--inline" href="mailto:ndemia@fastmail.com" target="_blank">E-mail
				<svg class="link__icon link__icon--inline" viewBox="0 0 24 24">
				<path d="M21,3L3,3L3,5L16,5L16,8L19,8L19,21L21,21L21,3ZM7,17L4,17L4,20L7,20L7,17L10,17L10,14L7,14L7,17ZM13,11L10,11L10,14L13,14L13,11L16,11L16,8L13,8L13,11Z" />
				</svg>
			</a>
		</li>
		<li class="list__element">
			<a class="link link--social link--inline" href="https://www.linkedin.com/in/ndemia/" target="_blank">LinkedIn
				<svg class="link__icon link__icon--inline" viewBox="0 0 24 24">
				<path d="M21,3L3,3L3,5L16,5L16,8L19,8L19,21L21,21L21,3ZM7,17L4,17L4,20L7,20L7,17L10,17L10,14L7,14L7,17ZM13,11L10,11L10,14L13,14L13,11L16,11L16,8L13,8L13,11Z" />
				</svg>
			</a>
		</li>
		<li class="list__element">
			<a class="link link--social link--inline" href="https://github.com/ndemia" target="_blank">GitHub
				<svg class="link__icon link__icon--inline" viewBox="0 0 24 24">
				<path d="M21,3L3,3L3,5L16,5L16,8L19,8L19,21L21,21L21,3ZM7,17L4,17L4,20L7,20L7,17L10,17L10,14L7,14L7,17ZM13,11L10,11L10,14L13,14L13,11L16,11L16,8L13,8L13,11Z" />
				</svg>
			</a>
		</li>
		<li class="list__element">
			<a class="link link--social link--inline" href="https://codepen.io/ndemia" target="_blank">Codepen
				<svg class="link__icon link__icon--inline" viewBox="0 0 24 24">
				<path d="M21,3L3,3L3,5L16,5L16,8L19,8L19,21L21,21L21,3ZM7,17L4,17L4,20L7,20L7,17L10,17L10,14L7,14L7,17ZM13,11L10,11L10,14L13,14L13,11L16,11L16,8L13,8L13,11Z" />
				</svg>
			</a>
		</li>
	</ul>`;

	if (theme === 'dos') {
		// Right arrow icons
		document.querySelectorAll('.title__icon').forEach((icon) => {
			const pixelArrowRight = `<path d="M18,17L18,15L20,15L20,13L22,13L22,11L20,11L20,9L18,9L18,7L16,7L16,9L18,9L18,11L2,11L2,13L18,13L18,15L16,15L16,17L18,17Z" />`;
			icon.firstElementChild.remove();
			icon.insertAdjacentHTML('afterbegin', pixelArrowRight);
		});

		// Left arrow icons
		if (document.querySelectorAll('.header__icon')) {
			document.querySelectorAll('.header__icon').forEach((icon) => {
				const pixelArrowLeft = `<path d="M8,15L6,15L6,17L8,17L8,15ZM22,11L6,11L6,9L4,9L4,11L2,11L2,13L4,13L4,15L6,15L6,13L22,13L22,11ZM8,7L6,7L6,9L8,9L8,7Z" />`;
				icon.firstElementChild.remove();
				icon.insertAdjacentHTML('afterbegin', pixelArrowLeft);
			});
		}

		// External link icons
		document.querySelectorAll('.link__icon--inline').forEach((icon) => {
			const pixelLink = `<path d="M21,3L3,3L3,5L16,5L16,8L19,8L19,21L21,21L21,3ZM7,17L4,17L4,20L7,20L7,17L10,17L10,14L7,14L7,17ZM13,11L10,11L10,14L13,14L13,11L16,11L16,8L13,8L13,11Z" />`;
			icon.firstElementChild.remove();
			icon.insertAdjacentHTML('afterbegin', pixelLink);
		});

		// Social links
		if (document.querySelector('.socials__list')) {
			document.querySelector('.socials__list').outerHTML = dosSocialLinks;
		}

		// Change favicon
		document.querySelector('link[type="image/svg+xml"]').href = 'dos-favicon.ico';
	} else {
		// Restore default elements
		if (document.querySelector('.socials__list')) {
			document.querySelector('.socials__list').outerHTML = originalSocialLinks;
		}

		// Right arrow icons
		document.querySelectorAll('.title__icon').forEach((icon) => {
			const pixelArrowRight = `<path d="M17.086,11L3,11L3,13L17.086,13L14.086,16L15.5,17.414L20.914,12L15.5,6.586L14.086,8L17.086,11Z" />`;
			icon.firstElementChild.remove();
			icon.insertAdjacentHTML('afterbegin', pixelArrowRight);
		});

		// Left arrow icons
		if (document.querySelectorAll('.header__icon')) {
			document.querySelectorAll('.header__icon').forEach((icon) => {
				const pixelArrowLeft = `<svg class="link__icon header__icon" viewBox="0 0 24 24">
				<path d="M6.914,13L21,13L21,11L6.914,11L9.914,8L8.5,6.586L3.086,12L8.5,17.414L9.914,16L6.914,13Z" />
			</svg>`;
				icon.firstElementChild.remove();
				icon.insertAdjacentHTML('afterbegin', pixelArrowLeft);
			});
		}

		// External link icons
		document.querySelectorAll('.link__icon--inline').forEach((icon) => {
			const pixelLink = `<path d="M17,14L17,20C17,20 4,20 4,20C4,20 4,6 4,6C4,6 10,6 10,6L10,4L2,4L2,22L19,22L19,14L17,14ZM18.586,4L9.586,13L11,14.414L20,5.414L20,9L22,9L22,2L15,2L15,4L18.586,4Z"
			/>`;
			icon.firstElementChild.remove();
			icon.insertAdjacentHTML('afterbegin', pixelLink);
		});

		// Change favicon
		checkDarkMode();
	}
};

const changeEmojis = (theme) => {
	if (theme === 'dos') {
		if (document.querySelector('.description__greeting')) {
			document.querySelector('.description__greeting').innerText = `Hi, I'm Nicolás! :)`;
		}
		document.querySelector('.made').innerText = ` Made with 🍺 in Amsterdam.`;
	} else {
		if (document.querySelector('.description__greeting')) {
			document.querySelector('.description__greeting').innerText = `Hi, I'm Nicolás! 👋`;
		}
		document.querySelector('.made').innerText = ` Made with 🍺 in Amsterdam by yours truly.`;
	}
};

if (localStorage.getItem('dos-theme')) {
	document.documentElement.classList.add('dos-theme');
	changeUI('dos');
	changeEmojis('dos');
}

dosButton.addEventListener('pointerup', (e) => {
	e.preventDefault();

	if (document.documentElement.classList.contains('dos-theme')) {
		document.documentElement.classList.remove('dos-theme');
		localStorage.removeItem('dos-theme');
		changeUI('nodos');
		changeEmojis('nodos');
	} else {
		document.documentElement.classList.add('dos-theme');
		localStorage.setItem('dos-theme', true);
		changeUI('dos');
		changeEmojis('dos');
	}
});

if (window.chrome) {
	document.querySelector('.firefox').classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
	checkDarkMode();
	updateBooksAndMusic();
});
