import {get} from "./api.js";

export function getAllIdeas(){
    return get('/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');
}
