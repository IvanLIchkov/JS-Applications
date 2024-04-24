import {selectTopic} from "./topicComment.js";
import {main} from "./app.js";


const topicContainer = document.querySelector('.topic-container');
const topicForm = document.querySelector('.new-topic-border');

export async function loadHome(){
    topicContainer.innerHTML = '';

    const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

    const response = await fetch(url);
    const data = await response.json();
    main.replaceChildren(topicForm)
    Object.values(data).forEach(v => {
        let divElement = document.createElement('div');
        divElement.classList.add('topic-container');

        divElement.innerHTML += `<div class="topic-name-wrapper">
                   <div class="topic-name">
                  <a href="#" class="normal">
                   <h2>${v.topicName}</h2>
                   </a>
                   <div class="columns">
                   <div>
                    <p>Date: <time>${new Date(v.date).toISOString()}</time></p>
                  <div class="nick-name">
                   <p>Username: <span>${v.username}</span></p>
                  </div>
                    </div>
                   </div>
                   </div>
                   </div>`;

        topicContainer.appendChild(divElement);
        divElement.querySelector('h2').addEventListener('click', selectTopic);
        divElement.querySelector('h2').setAttribute('topic-id', v._id);
        main.appendChild(topicContainer)

    })
}

