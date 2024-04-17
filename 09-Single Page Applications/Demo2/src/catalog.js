const catalogElement = document.getElementById('catalog');
const  catalogUrl = 'http://localhost:3030/data/autoparts'
const table = catalogElement.querySelector('#table');
const loading = document.createElement('p');
loading.innerHTML = 'Loading &hellip;'

export async function showCatalog() {
    document.querySelector('main').replaceChildren(catalogElement);
    table.replaceChildren(loading);
    try{
        const token = sessionStorage.getItem('accessToken')
        const options ={
            method: 'get',
            headers: {}
        };
        if (token!==null){
        options.headers['X-Authorization'] = token;
        }

        const response = await fetch(catalogUrl,options);

        if (response.ok === false){
            throw await response.json()
        }
        const data = await response.json();
        table.replaceChildren(...data.map(createRow))
    }catch (e){
        alert(e.message)
    }
}
function createRow(record) {
    const element = document.createElement('tr');

    element.innerHTML = `` +
        `<td>${record._id}</td>`+
        `<td>${record.label}</td>` +
        `<td>$ ${record.price}</td>` +
        `<td>${record.qty}</td>`;

    return element;
}
