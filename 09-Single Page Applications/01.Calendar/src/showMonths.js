import {body, main} from "./app.js";
import {showDays} from "./showDays.js";
import {showYear} from "./showYear.js";

const monthCalendars = document.querySelectorAll('.monthCalendar');
export function showMonths(event) {
    let year = ''
    if (event.target.tagName.toLowerCase() === 'caption'){
        year = event.target.textContent.split(' ')[1]
    }else{
        year =  event.target.querySelector('.date').textContent;
    }

    monthCalendars.forEach(m =>{
        if (m.id === `year-${year}`){
            m.querySelector('caption').addEventListener('click', showYear)

            m.querySelectorAll('tr:not(:first-child) td').forEach(d =>{
                const month = d.querySelector('div').textContent;
                d.addEventListener('click', () =>{
                    showDays(returnMonthAsNumber(month),year)
                })
            })
            main.replaceChildren(m);
        }
    })
}
function returnMonthAsNumber(month){
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];
    return months.indexOf(month)+1;
}
