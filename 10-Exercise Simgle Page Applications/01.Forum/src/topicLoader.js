import {loadHome} from "./loadHome.js";

const newTopicForm   = document.querySelector('form');


export  async function createNewTopic(event) {
    event.preventDefault();

    const formData = new FormData(newTopicForm);

    const {topicName, username, postText} = Object.fromEntries(formData.entries());

    const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

    const options ={
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({topicName, username, postText, date: Date.now()})
    }

    try {
        if (topicName === '' || username === '' || postText === ''){
            throw new Error('All fields are required!')
        }
        const response = await fetch(url, options);
    }catch (e){
        alert(e.message)
    }

    newTopicForm.reset();
    loadHome()

}


export async function cancelCreate(event) {
    event.preventDefault()
    newTopicForm.reset();
}
