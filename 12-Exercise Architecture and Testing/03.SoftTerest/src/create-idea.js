import {main} from "./app.js";

const createIdeaSection = document.querySelector(".create-idea");

export function showCreateIdea() {
   main.replaceChildren(createIdeaSection);
}
