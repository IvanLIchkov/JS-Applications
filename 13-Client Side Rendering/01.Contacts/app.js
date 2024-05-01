import {html, render} from '/node_modules/lit-html/lit-html.js'
import{contacts} from "./contacts.js";
import {repeat} from '../node_modules/lit-html/directives/repeat.js'



const main = document.getElementById('contacts');

const contactBlock =(contact) => html`<div class="contact card">
	<div>
		<i class="far fa-user-circle gravatar"></i>
	</div>
	<div class="info">
		<h2>Name: ${contact.name}</h2>
		<button class="detailsBtn" @click=${() => toggle(contact)}>Details</button>
        ${
            contact.showDetails ? html`<div class="details" id="${contact.id}" >
	            <p>Phone number: ${contact.phoneNumber}</p>
	            <p>Email: ${contact.email}</p>
            </div>` : null
        }
    </div>
</div>`;

   update();

function update() {
    render(repeat(contacts, c => c.id, contactBlock), main)
}

function toggle(contact){
    contact.showDetails = !contact.showDetails;
    update();
}
// function insertDetails(event) {
//     const divDetails = event.target.parentNode.querySelector('div .details');
//
//
//     if (divDetails.style.display === 'none'){
//         divDetails.style.display = 'block'
//     }else{
//         divDetails.style.display = 'none';
//     }
// }
