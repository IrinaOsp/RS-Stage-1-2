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

    BACKGROUND.addEventListener('click', () => {
        MENU.classList.remove('header-nav-active');
        BURGERITEM.classList.remove('header-burger-active');
        BODY.classList.remove('no-scroll');
        BACKGROUND.classList.remove('active');
    });
    if (window.innerWidth <= 767) {
        for (let i = 0; i < MENULINKS.length; i++) {
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
const PET_ITEMS = document.querySelectorAll('.friends-slider-item');

const pastArr = [];
const currArr = [];
const nextArr = [];
let PETS;
const PETS_NAMES = [];
    //get array of random numbers
function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
function getArray() {
    let set = new Set()
    let randomNum
    while (set.size < 8) {
        randomNum = getRandomNum(0, 7)
        set.add(randomNum)
    }
    let numbersArray = Array.from(set)
    console.log(numbersArray)
    return numbersArray
}
let petsnumbersArray = getArray()
    //get slider items
async function getSliderItems() {
    const res = await fetch('../JS/pets_info.json')
    PETS = await res.json()
    PETS.forEach((item) => PETS_NAMES.push(item.name))
    console.log(PETS)
    petsnumbersArray.forEach((item, index) => {
        PET_ITEMS[index].firstElementChild.firstElementChild.src = `${PETS[item].img}`
        PET_ITEMS[index].firstElementChild.firstElementChild.alt = `${PETS[item].name}`
        PET_ITEMS[index].firstElementChild.lastElementChild.innerHTML = PETS[item].name
    })
}
getSliderItems()



    /*burgerItem.addEventListener('click', () => {
        menu.classList.toggle('header-nav-active');
        burgerItem.classList.toggle('header-burger-active');
        body.classList.toggle('no-scroll');
    });*/
/*
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
*/
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

//const PET_ITEMS = document.querySelectorAll('.friends-slider-item');
//const POPUP_BACKGROUND = document.querySelector('.popup-background');
//const POPUP_CONTENT = document.querySelector('.popup-content');
//const POPUP_HEADING = document.querySelector('.popup-heading')
//const POPUP_SUBHEADING = document.querySelector('.popup-subheading')
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