import {post} from "./api.js";

export async function login(email, password) {
    const userData = await post('/users/login', {email, password});

    sessionStorage.setItem('userData', JSON.stringify({
        email: userData.email,
        'id': userData._id,
        'accessToken': userData.accessToken
    }));

    sessionStorage.setItem('email', userData.email);
    sessionStorage.setItem('id', userData._id);
    sessionStorage.setItem('accessToken', userData.accessToken);

}
