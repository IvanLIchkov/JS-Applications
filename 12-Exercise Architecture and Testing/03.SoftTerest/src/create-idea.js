import {main} from "./app.js";
import {addFormSubmit} from "./util/addFormSubmit.js";
import {createIdea} from "./data/data.js";

const createIdeaSection = document.querySelector(".create-idea");
const createIdeaForm = createIdeaSection.querySelector('form');

addFormSubmit(createIdeaForm, onCreation)

let context = null;

export function showCreateIdea(newContext) {
   main.replaceChildren(createIdeaSection);
   context = newContext;
}

async function onCreation({title, description, imageURL}){
   try{
      let errorOutput = [];
      if (title.length < 6){
         errorOutput.push(Error('Title should be at least 6 symbols!'))
      }
      if (description.length < 10){
         errorOutput.push(Error('Description should be at least 10 symbols!'))
      }
      if (imageURL.length < 5){
         errorOutput.push(Error('Image should be at least 5 symbols!'))
      }
      if (errorOutput.length >0){
         throw errorOutput;
      }
   }catch (e){
      alert(e.map(e => e.message).join('\n'));
      throw e;
   }
   await createIdea(title, description, imageURL);
   context.showView('Dashboard');
}
