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
    /*
    fetch('./JS/pets_info.json')
    .then(response => response.json())
    .then(data => {
      // обработка полученных данных
      console.log(data);
    })
    .catch(error => console.error(error));
*/
const PETS = [
    {
      "name": "Jennifer",
      "img": "./assets/imgs/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "./assets/imgs/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "./assets/imgs/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "./assets/imgs/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "./assets/imgs/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "./assets/imgs/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "./assets/imgs/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "./assets/imgs/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]

function getSliderItems() {
    // const res = await fetch('../JS/pets_info.json')
    // PETS = await res.json()
    PETS.forEach((item) => PETS_NAMES.push(item.name))
    console.log(PETS)
    petsnumbersArray.forEach((item, index) => {
        PET_ITEMS[index].firstElementChild.firstElementChild.src = `${PETS[item].img}`
        PET_ITEMS[index].firstElementChild.firstElementChild.alt = `${PETS[item].name}`
        PET_ITEMS[index].firstElementChild.lastElementChild.innerHTML = PETS[item].name
    })
}
getSliderItems()

const pastArr = [];
const currArr = [];
const nextArr = [];


let cardsNum
if (window.innerWidth >= 1078) {
    cardsNum = 3
} else if (window.innerWidth < 1078 && window.innerWidth > 760) {
    cardsNum = 2
} else {
    cardsNum = 1
}

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

const POPUP_BACKGROUND = document.querySelector('.popup-background');
const POPUP_CONTENT = document.querySelector('.popup-content');
const POPUP_IMG = document.querySelector('.popup-img');
const POPUP_HEADING = document.querySelector('.popup-heading')
const POPUP_SUBHEADING = document.querySelector('.popup-subheading')
const POPUP_TEXT = document.querySelector('.popup-text')
const POPUP_LIST = document.querySelector('.popup-list')
const POPUP_CLOSE = document.querySelector('.popup-close-btn')

PET_ITEMS.forEach((item) => {
    item.addEventListener('click', (event) => {
        let cardNum = PETS_NAMES.indexOf(event.target.closest('.friends-slider-item').firstElementChild.lastElementChild.innerHTML)
        createCard(cardNum)
    })
})

function createCard(i) {
    POPUP_BACKGROUND.classList.add('popup-active');
    POPUP_CONTENT.classList.add('popup-active');
    BODY.classList.add('no-scroll');

    POPUP_IMG.style.backgroundImage = `url(${PETS[i].img})`;
    POPUP_HEADING.innerHTML = PETS[i].name;
    POPUP_SUBHEADING.firstElementChild.textContent = PETS[i].type;
    POPUP_SUBHEADING.lastElementChild.textContent = PETS[i].breed;
    POPUP_TEXT.textContent = PETS[i].description;
    POPUP_LIST.firstElementChild.lastElementChild.innerHTML = PETS[i].age;
    POPUP_LIST.children[1].lastElementChild.innerHTML = PETS[i].inoculations;
    POPUP_LIST.children[2].lastElementChild.innerHTML = PETS[i].diseases;
    POPUP_LIST.children[3].lastElementChild.innerHTML = PETS[i].parasites;
}

POPUP_CLOSE.addEventListener('click', () => {
    POPUP_BACKGROUND.classList.remove('popup-active');
    POPUP_CONTENT.classList.remove('popup-active');
    BODY.classList.remove('no-scroll');
})
POPUP_BACKGROUND.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(POPUP_CONTENT);
    if (!withinBoundaries && POPUP_CONTENT.classList.contains('popup-active')) {
        POPUP_BACKGROUND.classList.remove('popup-active');
        POPUP_CONTENT.classList.remove('popup-active');
        BODY.classList.remove('no-scroll');
    }
})