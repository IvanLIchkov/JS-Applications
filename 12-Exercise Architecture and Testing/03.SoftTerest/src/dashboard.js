import {main} from "./app.js";
import {getAllIdeas} from "./data/data.js";
import {createElement} from "./util/createHtmlElement.js";
import {showDetails} from "./ideaDetails.js";

const dashboardSection = document.querySelector("#dashboard-holder");

export async function showDashboard() {
    const allIdeas = await getAllIdeas();

    dashboardSection.querySelectorAll('div').forEach(d => d.remove())

    if (allIdeas.length === 0){
        dashboardSection.querySelector('h1').style.display = 'block';
    }else{
        dashboardSection.querySelector('h1').style.display = 'none';
        allIdeas.map(i => generateIdeasCards(i))
    }

    main.replaceChildren(dashboardSection);
}


function generateIdeasCards(idea){
    const cardWrapper = createElement('div',dashboardSection,null, ['card', 'overflow-hidden', 'current-card', 'details']);
    createElement('p',createElement('div', cardWrapper, null, ['card-body']), `${idea.title}`,['card-text']);
    createElement('img', cardWrapper, null, ['card-image'],null, {src: idea.img, alt: 'Card image cap'});
    let detailsBtn = createElement('a', cardWrapper, 'Details', ['btn'],null, {'idea-id': idea._id});
    detailsBtn.addEventListener('click', showDetails)
}
