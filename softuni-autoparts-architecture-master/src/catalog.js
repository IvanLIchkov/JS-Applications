import { getParts } from './data/data.js';
import {html} from '/node_modules/lit-html/lit-html.js'
import {repeat} from '../node_modules/lit-html/directives/repeat.js'



// const loading = document.createElement('p');
// loading.innerHTML = 'Loading &hellip;';

const catalogTemplate = (record) => html`
	<section id="catalog">
		<h2>Catalog</h2>
		
        ${record === undefined 
                ? html`<p>Loading</p>` 
                : html `<table>
			    <thead>
			        <tr>
				        <th>Label</th>
				        <th>Unit Price</th>
				        <th>Controls</th>
			         </tr>
			    </thead>
			            <tbody id="table">
			                 ${record.map(productTemplate)}
                        </tbody>
		            </table>`
        }
	</section>`

export async function showCatalog(context) {
    context.render(catalogTemplate([]))

    const parts = await getParts();

    context.render(catalogTemplate(parts));
}

const productTemplate = (record) => html`
    <tr>
	    <td>${record.label}</td>
	    <td>${record.price}</td>
	    <td><a href="javascript:void(0)" data-id="${record.id}">Details</a></td>
    </tr>`;
