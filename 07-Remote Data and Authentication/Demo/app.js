start();

function start() {
    const email = localStorage.email;
    if (email !== null){
        document.getElementById('email').textContent = 'Welcome ' + email;
    }

    document.getElementById('editor_create').addEventListener('submit', postData)
    document.getElementById('loadParts').addEventListener('click', loadData)
    document.getElementById('table_body').addEventListener('click', delegateDeleteBtn)
    document.getElementById('cancel_btn').addEventListener('click', toggleEditors)
    document.getElementById('save_btn').addEventListener('click', savePart)

}

async function postData(event) {
    event.preventDefault();
    const formData = new FormData(event.target)

    const partData = {
        label: formData.get('label'),
        price: Number(formData.get('price')),
        qty: Number(formData.get('qty'))
    };
    const  url ='http://localhost:3030/jsonstore/autoparts'

    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(partData)
    };
    const response = await fetch(url, options);
    let result = await response.json();
    loadData();

    event.target.reset();
}

async function loadData(){
    const url = 'http://localhost:3030/jsonstore/autoparts';
    const response = await fetch(url);
    const data = await response.json();

    const rows = Object.values(data).map(createRow);
    document.getElementById('table_body').replaceChildren(...rows)
}

function toggleEditors(){
    document.getElementById('editor_create').style.display = 'block';
    document.getElementById('editor_edit').style.display = 'none';
}

 function delegateDeleteBtn(event) {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
        if (target.classList.contains('delete_btn')) {
             deleteRecord(target.dataset.id);
        }else if (target.classList.contains('edit_btn')) {
            loadForEditing(target.dataset.id);
        }
    }
}

async function loadForEditing(partId){
    const url = `http://localhost:3030/jsonstore/autoparts/${partId}`

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    document.getElementById('editor_create').style.display = 'none';
    document.getElementById('editor_edit').style.display = 'block';

    document.getElementById('edit_part_label').value = data.label;
    document.getElementById('edit_part_id').value = data._id;
    document.getElementById('edit_part_price').value = data.price;
    document.getElementById('edit_part_qty').value = data.qty;


}

async function savePart(){
    const record = {};
    record.label = document.getElementById('edit_part_label').value;
    record._id =document.getElementById('edit_part_id').value;
    record.price =document.getElementById('edit_part_price').value;
    record.qty =document.getElementById('edit_part_qty').value;

    const url = `http://localhost:3030/jsonstore/autoparts/${record._id}`

    const options = {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(record)
    };

    const response = await fetch(url, options);
    const result = await response.json();
    toggleEditors()
    loadData();
}

async function deleteRecord(partId){
    const choice = confirm('Are you sure?');
    if(choice === false){
        return;
    }
    const url = `http://localhost:3030/jsonstore/autoparts/${partId}`

    const options = {
        method: 'delete'
    }

    const response = await fetch(url, options);
    loadData();
}

function createRow(record) {
    const element = document.createElement('tr');
    element.innerHTML = `<td>${record._id}</td>
            <td>${record.label}</td>
            <td>$ ${record.price}</td>
            <td>${record.qty}</td>
            <td>
                <button data-id="${record._id}" class="delete_btn">Delete</button>
                <button data-id="${record._id}" class="edit_btn">Edit</button>
            </td>`
    return element;
}

