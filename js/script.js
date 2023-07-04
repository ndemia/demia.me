import { checkDarkMode } from './checkDarkMode.js';

const emailButtonContainer = document.querySelector('.js-button-container');
const message = document.querySelector('.message');
let clicks = 0;

const showMessage = (messageType, clicks) => {
	if (messageType === 'success' && clicks == 1) {
		message.innerText = `E-mail copied!`;
		message.classList.add('show');
		setTimeout(() => {
			message.innerText = ``;
			message.classList.remove('show');
		}, 3000);
	} else if (messageType === 'success' && clicks == 2) {
		message.innerText = `Again?! Copied. There won't be a next time.`;
		message.classList.add('show');
		setTimeout(() => {
			message.innerText = ``;
			message.classList.remove('show');
		}, 3000);
	} else if (messageType === 'success' && clicks >= 3) {
		emailButtonContainer.classList.add('fall');
		setTimeout(() => {
			emailButtonContainer.classList.add('hide');
			message.classList.add('show');
			message.innerText = `Told ya 🤷‍♂️`;
		}, 2000);
	} else {
		message.innerText = `Hmmm, my e-mail was not copied. Better try again.`;
	}
};

const copyEmailToClipboard = async (clicks) => {
	try {
		await navigator.clipboard.writeText('ndemia@fastmail.com');
		showMessage('success', clicks);
	} catch (error) {
		showMessage('fail');
	}
};

document.querySelector('.js-button-email').addEventListener('pointerdown', () => {
	//e.preventDefault();
	clicks++;
	copyEmailToClipboard(clicks);
});

document.addEventListener('DOMContentLoaded', checkDarkMode());
