import {body, main} from "./app.js";
import {showMonths} from "./showMonths.js";

const daysCalendars = document.querySelectorAll('.daysCalendar');

export function showDays(month, year) {
    daysCalendars.forEach(d =>{
        if (d.id === `month-${year}-${month}`){
            d.querySelector('caption').addEventListener('click', showMonths)
            main.replaceChildren(d)
        }
    })
}
