import {loadHome} from "./loadHome.js";
import {main} from "./app.js";


const themeContainer = document.querySelector('.theme-container')
document.querySelector('.theme-container').remove();
const topicHeader = themeContainer.querySelector('.header');

export async function selectTopic(event) {
    event.preventDefault();
    const id = event.target.getAttribute('topic-id');

    const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts/'+ id)
    const topic = await response.json()
    const date= new Date(topic.date);

    themeContainer.querySelector('h2').textContent = topic.topicName;

    topicHeader.innerHTML = ` <img src="./static/profile.png" alt="avatar">
        <p><span>${topic.username}</span> posted on <time>${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}</time></p>
        
       <p class="post-content">${topic.postText}</p>`

    main.replaceChildren(themeContainer);

}
