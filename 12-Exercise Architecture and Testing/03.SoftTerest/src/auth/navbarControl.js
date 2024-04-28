const navbar = document.querySelector('nav');

export function authenticateNavMenu() {
    if (sessionStorage.getItem('accessToken') !== null){
        navbar.querySelectorAll('.not-logged').forEach(a => a.style.display = 'none');
        navbar.querySelectorAll('.logged').forEach(a => a.style.display = 'block');
    }else{
        navbar.querySelectorAll('.not-logged').forEach(a => a.style.display = 'block');
        navbar.querySelectorAll('.logged').forEach(a => a.style.display = 'none');
    }
}
