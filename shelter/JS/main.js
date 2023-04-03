// Burger menu
(function () {
    const BURGERITEM = document.querySelector('.header-burger');
    const MENU = document.querySelector('.header-nav');
    const PAGE = document.querySelector('.main');
    const BODY = document.querySelector('.body');
    const MENULINKS = document.querySelectorAll('.header-nav-link');
    const BACKGROUND = document.querySelector('.background');
    BURGERITEM.addEventListener('click', () => {
        MENU.classList.toggle('header-nav-active');
        BURGERITEM.classList.toggle('header-burger-active');
        BODY.classList.toggle('no-scroll');
        BACKGROUND.classList.toggle('active');
    });

    PAGE.addEventListener('click', () => {
        MENU.classList.remove('header-nav-active');
        BURGERITEM.classList.remove('header-burger-active');
        BODY.classList.remove('no-scroll');
        BACKGROUND.classList.remove('active');
    });
    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i++) {
            MENULINKS[i].addEventListener('click', () => {
                MENU.classList.remove('header-nav-active');
                BURGERITEM.classList.remove('header-burger-active');
                BODY.classList.remove('no-scroll');
                BACKGROUND.classList.remove('active');
            });
        }
    }
}());

// Slider on main page
/*
(function () {
    const BTNRIGHT = document.querySelector('.slider-right');
    const BTNLEFT = document.querySelector('.slider-left');
    const CAROUSEL = document.getElementById('carousel');
    /*burgerItem.addEventListener('click', () => {
        menu.classList.toggle('header-nav-active');
        burgerItem.classList.toggle('header-burger-active');
        body.classList.toggle('no-scroll');
    });

    const moveLeft = () => {
        CAROUSEL.classList.add('transition-right');
        BTNRIGHT.removeEventListener('click', moveLeft); //убирает возможность кликать по кнопке во время анимации
    }

    BTNRIGHT.addEventListener('click', moveLeft)
    
    /*() => {
        //if (window.innerWidth <= 1078) {
            carousel.classList.add('transition-right')
        //}
    })
    carousel.addEventListener('animationend', () => {
        carousel.classList.remove('transition-right')
    })*/

        /*for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header-nav-active');
                burgerItem.classList.remove('header-burger-active');
                body.classList.remove('no-scroll');
            });
        }
}()); */