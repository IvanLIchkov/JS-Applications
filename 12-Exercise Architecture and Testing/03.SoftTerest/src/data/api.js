const domain = 'http://localhost:3030'

async function request(method, url, data) {

    try{
        const options ={
        method,
        headers:{}
        };

        if (sessionStorage.getItem('accessToken') !== null){
            options.headers['X-Authorization'] = sessionStorage.getItem('accessToken');
        }
        if (data !==undefined){
            if (data.rePass !== undefined){
                if (data.email === '' || data.password === '' || data.repeatPassword === ''){
                    throw Error('All fields are required!');
                }else if (data.password !== data.rePass){
                    throw Error('Password and repeat password must match');
                }
            }
            options.headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(data);
        }

        const response = await fetch(domain + url, options);

        let result;

        if (response.status !== 204){
            result =  await response.json();
        }
        if (response.ok === false){
            if (response.status === 403){
                sessionStorage.removeItem('accessToken');
            }

            const error = result;
            throw error;
        }

        return result;

    }catch (e){
        alert(e.message);
        throw e;
    }
}
export const get = request.bind(null, 'get')
export const post = request.bind(null, 'post')
export const put = request.bind(null, 'put')
export const del = request.bind(null, 'delete')
