import {authenticateNavMenu} from "./auth/navbarControl.js";
import {main} from "./app.js";


const homeSection = document.querySelector(".home-container");

export function showHome(){
    authenticateNavMenu();
    main.replaceChildren(homeSection);

}

