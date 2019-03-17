const navSignUp = document.getElementById('nav__signUp');
const navLogIn = document.getElementById('nav__logIn');
const mainSignUp = document.getElementById('access--signUp');
const mainLogIn = document.getElementById('access--logIn');

navLogIn.onclick = function showLogIn() {
	navSignUp.classList.replace('nav__active', 'nav__inactive');
	navLogIn.classList.replace('nav__inactive', 'nav__active');
	navLogIn.classList.remove('nav--log--inactive');
	navSignUp.classList.add('nav--sign--inactive');
	mainSignUp.classList.replace('main__active', 'main__inactive');
	mainLogIn.classList.replace('main__inactive', 'main__active');
}

navSignUp.onclick = function showSignUp() {
	navLogIn.classList.replace('nav__active', 'nav__inactive');
	navSignUp.classList.replace('nav__inactive', 'nav__active');
	navSignUp.classList.remove('nav--sign--inactive');
	navLogIn.classList.add('nav--log--inactive');
	mainLogIn.classList.replace('main__active', 'main__inactive');
	mainSignUp.classList.replace('main__inactive', 'main__active');
}

