// Burger menu
const BODY = document.querySelector('.body');

(function () {
    const BURGERITEM = document.querySelector('.header-burger');
    const MENU = document.querySelector('.header-nav');
    const PAGE = document.querySelector('.main');
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

const BTNRIGHT = document.querySelector('.slider-right');
const BTNLEFT = document.querySelector('.slider-left');
const CAROUSEL = document.getElementById('carousel');
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");
const createCardTemplate = () => {
    const card = document.createElement("div");
    card.classList.add("card");
    return card;
}
    /*burgerItem.addEventListener('click', () => {
        menu.classList.toggle('header-nav-active');
        burgerItem.classList.toggle('header-burger-active');
        body.classList.toggle('no-scroll');
    });*/

const moveLeft = () => {
    CAROUSEL.classList.add('transition-left');
    BTNLEFT.removeEventListener('click', moveLeft); //убирает возможность кликать по кнопке во время анимации
    BTNRIGHT.removeEventListener('click', moveRight); //убирает возможность кликать по кнопке во время анимации
}
const moveRight = () => {
    CAROUSEL.classList.add('transition-right');
    BTNLEFT.removeEventListener('click', moveLeft); //убирает возможность кликать по кнопке во время анимации
    BTNRIGHT.removeEventListener('click', moveRight); //убирает возможность кликать по кнопке во время анимации
}

BTNLEFT.addEventListener('click', moveLeft);
BTNRIGHT.addEventListener('click', moveRight);
CAROUSEL.addEventListener('animationend', (AnimationEvent) => {
    let changedItem;
    if (AnimationEvent.animationName === 'move-left') {
        CAROUSEL.classList.remove('transition-left');
        changedItem = ITEM_LEFT;
        //document.querySelector('#item-active').innerHTML = ITEM_LEFT.innerHTML;
    } else {
        CAROUSEL.classList.remove('transition-right');
        changedItem = ITEM_RIGHT;
        //document.querySelector('#item-active').innerHTML = ITEM_RIGHT.innerHTML;
    }
    //changedItem.innerHTML = "";
    for (let i = 0; i < 3; i++) {
      const card = createCardTemplate();
      card.innerText = Math.floor(Math.random() * 8);
      //changedItem.appendChild(card);
    }
    
    BTNLEFT.addEventListener("click", moveLeft);
    BTNRIGHT.addEventListener("click", moveRight);
})

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
        }*/


//Pop up

const PET_ITEMS = document.querySelectorAll('.friends-slider-item');
const POPUP_BACKGROUND = document.querySelector('.popup-background');
const POPUP_CONTENT = document.querySelector('.popup-content');
const POPUP_HEADING = document.querySelector('.popup-heading')
const POPUP_SUBHEADING = document.querySelector('.popup-subheading')
/*
for (let i = 0; i < PET_ITEMS.length; i++) {
    PET_ITEMS[i].addEventListener('click', createCard(i))
}
async function createCard(i) {

    POPUP_BACKGROUND.classList.add('popup-active');
    POPUP_CONTENT.classList.add('popup-active');
    BODY.classList.add('no-scroll');
    const url = './pets_info.json';
    const res = await fetch(url);
    const data = await res.json();
    POPUP_HEADING.textContent = data[i].name;
}
*/