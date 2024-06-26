import {get, post} from "./api.js";

export async function register(email, password, rePass){
    const userDataResponse = await post('/users/register', {email, password, rePass});
    setSessionItems(userDataResponse);
}

export async function login(email, password){
    const userDataResponse = await post('/users/login', {email, password});
    setSessionItems(userDataResponse)
}

export async function logOut(){
    await get('/users/logout');
    sessionStorage.clear();
}

function setSessionItems(userData) {
    sessionStorage.setItem('accessToken', userData.accessToken);
    sessionStorage.setItem('userId', userData._id);
}
