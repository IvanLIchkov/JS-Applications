import {main} from "./app.js";
import {getAllIdeas} from "./data/data.js";
import {createElement} from "./util/createHtmlElement.js";

const dashboardSection = document.querySelector("#dashboard-holder");

export async function showDashboard() {
    const allIdeas = await getAllIdeas();

    if (allIdeas.length === 0){
        dashboardSection.querySelectorAll('div').forEach(d => d.style.display = 'none')
    }else{
        dashboardSection.querySelector('h1').style.display = 'none';
        allIdeas.map(i => generateIdeasCards(i))
    }

    main.replaceChildren(dashboardSection);
}


function generateIdeasCards(idea){
    const cardWrapper = createElement('div',dashboardSection,null, ['card', 'overflow-hidden', 'current-card', 'details']);
    createElement('p',createElement('div', cardWrapper, null, ['card-body']), `${idea.title}`);
    createElement('img', cardWrapper, null, ['card-image'],null, {src: idea.img, alt: 'Card image cap'});
    createElement('a', cardWrapper, 'Details', ['btn'],null, {'idea-id': idea._id});
}
