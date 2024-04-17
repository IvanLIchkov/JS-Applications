import {showYear} from "./showYear.js";


export const body = document.querySelector('body');
document.querySelectorAll('section').forEach(s => s.remove());
export const main = document.createElement('main');
body.appendChild(main);
showYear()
