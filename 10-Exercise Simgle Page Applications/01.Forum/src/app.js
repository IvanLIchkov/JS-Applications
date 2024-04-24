import {cancelCreate, createNewTopic} from "./topicLoader.js";
import {loadHome} from "./loadHome.js";


export const main = document.querySelector('main');

const publicBtn   = document.querySelector('form button.public');
publicBtn.addEventListener('click', createNewTopic);

const cancelBtn   = document.querySelector('form button.cancel');
cancelBtn.addEventListener('click', cancelCreate)


// document.querySelector('main').innerHTML = '';
loadHome()



