// Burger menu
(function () {
    const burgerItem = document.querySelector('.header-burger');
    const menu = document.querySelector('.header-nav');
    const page = document.querySelector('.main');
    const menuLinks = document.querySelectorAll('.header-nav-link');
    burgerItem.addEventListener('click', () => {
        menu.classList.toggle('header-nav-active');
        burgerItem.classList.toggle('header-burger-active');
        console.log('click')
    });

    page.addEventListener('click', () => {
        menu.classList.remove('header-nav-active');
        burgerItem.classList.remove('header-burger-active');
    });
    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header-nav-active');
                burgerItem.classList.remove('header-burger-active');
            });
        }
    }
}());