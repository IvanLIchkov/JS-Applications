import {get, post, del} from "./api.js";

export  function getAllIdeas(){
    return get('/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');
}

export  function getIdeaById(id){
    return get('/data/ideas/'+ id);
}

export function createIdea(title, description, imageURL){

    return post('/data/ideas', {title, description, img:imageURL});
}


export function deleteIdea(ideaId){
    return del('/data/ideas/'+ ideaId)
}
