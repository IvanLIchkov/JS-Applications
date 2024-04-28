import {main} from "./app.js";

const ideaDetailsSection = document.querySelector(".idea-details");

export function showDetails(){
    main.replaceChildren(ideaDetailsSection);

}
