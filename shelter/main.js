// Burger menu
(function () {
    const burgerItem = document.querySelector('.header-burger');
    const menu = document.querySelector('.header-nav');
    const page = document.querySelector('.main');
    //const menuCloseItem = document.querySelector('.nav-close');
    const menuLinks = document.querySelectorAll('.header-nav-link');
    burgerItem.addEventListener('click', () => {
        menu.classList.toggle('header-nav-active');
        burgerItem.classList.toggle('header-burger-active');
    });
    /*menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('nav-active');
    });*/
    page.addEventListener('click', () => {
        menu.classList.remove('header-nav-active');
        burgerItem.classList.remove('header-burger-active');
    });
    if (window.innerWidth <= 650) {
        for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header-nav-active');
                burgerItem.classList.remove('header-burger-active');
            });
        }
    }
}());