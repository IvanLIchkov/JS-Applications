import {main, context} from "./app.js";
import {deleteIdea, getIdeaById} from "./data/data.js";
import {createElement} from "./util/createHtmlElement.js";

const ideaDetailsSection = document.querySelector(".idea-details");


export async function showDetails(event){
    const ideaId = event.target.getAttribute('idea-id');

    ideaDetailsSection.innerHTML = '';

    const idea = await getIdeaById(ideaId);

    createElement('img', ideaDetailsSection,null,['det-img'], null, {src: idea.img});
    const divWrapper = createElement('div',ideaDetailsSection,null, ['desc']);
    createElement('h2', divWrapper, `${idea.title}`,['display-5']);
    createElement('p', divWrapper, `Description:`,['infoType']);
    createElement('p', divWrapper, `${idea.description}`,['idea-description']);
    createElement('div', ideaDetailsSection, null,['text-center']);

    if (checkForAuthorization(idea._ownerId)){
        const deleteBtn = createElement('a',
            createElement('div', ideaDetailsSection, null,['text-center']),
            'Delete',['btn', 'detb'],null, {'idea-id': idea._id});
        await deleteBtn.addEventListener('click', event => {
            let ideaId = event.target.getAttribute('idea-id');
            onDeletion(ideaId)
        });
    }
    main.replaceChildren(ideaDetailsSection);

}

async function onDeletion(ideaId) {
    await deleteIdea(ideaId);
    context.showView('Dashboard')
}

function checkForAuthorization(ideaCreatorId) {

    let userId = sessionStorage.getItem('userId');


    if (userId === null || ideaCreatorId !== userId ){
        return false;
    }
    return true
}
