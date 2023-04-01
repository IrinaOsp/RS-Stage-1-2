// Burger menu
(function () {
    const burgerItem = document.querySelector('.header-burger');
    const menu = document.querySelector('.header-nav');
    const page = document.querySelector('.main');
    const body = document.querySelector('.body');
    const menuLinks = document.querySelectorAll('.header-nav-link');
    burgerItem.addEventListener('click', () => {
        menu.classList.toggle('header-nav-active');
        burgerItem.classList.toggle('header-burger-active');
        body.classList.toggle('no-scroll');
    });

    page.addEventListener('click', () => {
        menu.classList.remove('header-nav-active');
        burgerItem.classList.remove('header-burger-active');
        body.classList.remove('no-scroll');
    });
    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header-nav-active');
                burgerItem.classList.remove('header-burger-active');
                body.classList.remove('no-scroll');
            });
        }
    }
}());