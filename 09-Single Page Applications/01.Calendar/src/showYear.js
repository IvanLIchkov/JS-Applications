import {showMonths} from "./showMonths.js";
import{body, main} from "./app.js";

const selectYearTable = document.querySelector('.yearsCalendar');
export function showYear() {

    selectYearTable.querySelectorAll('td').forEach(td => td.addEventListener('click',showMonths));

    main.replaceChildren(selectYearTable)
}
