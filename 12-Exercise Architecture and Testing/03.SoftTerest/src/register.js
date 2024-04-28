import {addFormSubmit} from "./util/addFormSubmit.js";
import {register} from "./data/auth.js";
import {main} from "./app.js";

const registerSection = document.querySelector(".register-container");

const registerForm = registerSection.querySelector('form');

addFormSubmit(registerForm, onRegister);
let context = null;

export function showRegister(newContext) {
    context = newContext;
    main.replaceChildren(registerSection);

}

export async function onRegister({email, password, repeatPassword}) {

    await register( email, password, repeatPassword);
    context.showView('Home');
}
