async function onRegister(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const {email, password, repass} = Object.fromEntries(formData.entries());

    if (email === '' || password === ''){
        return  alert('All fields are required!');
    }
    if (password !== repass){
        return alert('Passwords must match!')
    }

    const url = 'http://localhost:3030/users/register';
    const options ={
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    };
    try{
        const response = await fetch(url, options);

        if (response.ok === false){
            const error = await response.json();
            throw error;
        }
        const userData = await response.json();
        localStorage.setItem('accessToken', userData.accessToken)
        localStorage.setItem('email', userData.email)
    }catch (err){
        alert(err.message)
    }
}
async function loadData() {
    const token = localStorage.getItem('accessToken');
    const url = 'http://localhost:3030/data/recipies';
    const options = {
        method: 'get',
        headers: {
            'X-Authorization' : `${token}`
        }
    };
    try{
        const response = await fetch(url, options);
        if (response.ok === false){
            throw await response.json();
        }
        const data = await response.json();
    }catch (err){
        alert(err.message);
    }

}
async function login(event) {
    event.preventDefault();
    const url = 'http://localhost:3030/users/login'

    const formData = new FormData(event.target)
    const {email, password} = Object.fromEntries(formData.entries())

    const options = {
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    };

    try{
        if (email === '' || password === ''){
            return  alert('All fields are required');
        }
        const response = await fetch(url, options);
        if (response.ok === false){
            throw await response.json();
        }
        const data = await response.json();
        localStorage.setItem('accessToken', data.accessToken)
        localStorage.setItem('email', data.email)
        event.target.reset();
    }catch (e){
        alert(e.message)
    }
}

document.getElementById('register-form').addEventListener('submit', onRegister)
document.getElementById('login-form').addEventListener('submit', login)
document.getElementById('load-data').addEventListener('click', loadData)
