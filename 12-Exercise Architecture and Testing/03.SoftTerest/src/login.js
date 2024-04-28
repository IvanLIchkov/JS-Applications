import {main} from "./app.js";
import {addFormSubmit} from "./util/addFormSubmit.js";
import {login} from "./data/auth.js";

const loginContainer = document.querySelector(".login-container");

const loginForm = loginContainer.querySelector('form');

const alreadyUser = loginForm.querySelector('.alreadyUser a')

addFormSubmit(loginForm, onLogin)
let context = null

export function showLogin(newContext){
    main.replaceChildren(loginContainer);
    context = newContext;
    alreadyUser.addEventListener('click', e => {
        event.preventDefault();
        context.showView('Register')
    })

}

async function onLogin({email, password}){
     await login(email, password);
     context.showView('Home');
     loginForm.reset();
}

export function logout(){
    sessionStorage.clear();
    context.showView('Home')
}
