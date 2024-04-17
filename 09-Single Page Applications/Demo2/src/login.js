
import {showHome} from "./home.js";


const loginSection = document.getElementById('login');
const loginForm = loginSection.querySelector('#login-form');
loginForm.addEventListener('submit', loginUser);
const loginUrl = 'http://localhost:3030/users/login'
export function showLogin() {
    document.querySelector('main').replaceChildren(loginSection);
}

async function loginUser(event){
    event.preventDefault();
    const formData  = new FormData(event.target);
    const {email, password} = Object.fromEntries(formData.entries());

    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }

    try{
        const response = await fetch(loginUrl, options);
        if (response.ok === false){
            throw await response.json();
        }
        const data = await response.json();
        sessionStorage.setItem('accessToken', data.accessToken)
        sessionStorage.setItem('email', data.email)
        sessionStorage.setItem('id', data._id)

        loginForm.reset();
        showHome()
    }catch (e){
        alert(e.message)
    }
}
