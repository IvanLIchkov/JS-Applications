import { showHome } from './home.js';
import { showCatalog } from './catalog.js';
import { showLogin } from './login.js';
import { showDetails } from './details.js';
import { render} from '/node_modules/lit-html/lit-html.js'


const views = {
    'home-link': showHome,
    'catalog-link': showCatalog,
    'login-link': showLogin
};

const main = document.querySelector('main');

document.querySelector('nav').addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        const id = event.target.id;
        showView(id);
    }
});

document.getElementById('table').addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        const id = event.target.dataset.id;
        showDetails(id);
    }
});

// Remove views from page
document.getElementById('views').remove();

const ctx = {
    showView,
    render: renderView
};

// Start application in home view
showView('home-link');


function showView(name) {
    const view = views[name];
    if (typeof view == 'function') {
        view(ctx);
    }
}

function renderView(content) {
    render(content, main)
}
