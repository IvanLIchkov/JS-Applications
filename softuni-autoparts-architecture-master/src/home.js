import {html} from "../node_modules/lit-html/lit-html.js";


const homeTemplate =(userData) => html` 
    <section id="home">
	    <h2>Home Page</h2>
	    <p>${userData === null 
            ? 'Welcome to our site'
            : `Welcome back ${userData.email}`}
        </p>
    </section>`;

export function showHome(context) {
    const userData = JSON.parse(sessionStorage.getItem('userData'));

    context.render(homeTemplate(userData))
}
