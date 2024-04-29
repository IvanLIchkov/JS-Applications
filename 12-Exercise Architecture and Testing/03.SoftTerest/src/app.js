import {showHome} from "./home.js";
import {showDashboard} from "./dashboard.js";
import {showCreateIdea} from "./create-idea.js";
import {showLogin, onLogout} from "./login.js";
import {showRegister} from "./register.js";

export const main = document.querySelector('main');
main.innerHTML = '';


const views = {
    'Dashboard': showDashboard,
    'Create': showCreateIdea,
    'Logout': onLogout,
    'Login': showLogin,
    'Register': showRegister,
    'Home': showHome
}

document.querySelector('nav').addEventListener('click', (event) => {
    let content = '';
    if (event.target.tagName === 'A'){
         content = event.target.textContent;
    }else if (event.target.tagName === 'IMG'){
        content = 'Home';
    }
    showView(content)
    event.preventDefault();
})

export let context = {
    showView
}

showView('Home')

function showView(viewName) {
    const view = views[viewName];
    if (typeof  view === 'function'){
        view(context)
    }

}

