import { checkDarkMode } from './checkDarkMode.js';
import { updateBooksAndMusic } from './updateBooksAndMusic.js';

document.addEventListener('DOMContentLoaded', checkDarkMode());
document.addEventListener('DOMContentLoaded', updateBooksAndMusic());