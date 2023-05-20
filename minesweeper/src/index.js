import './index.html';
import './style.css';
import { createLayout, CANVAS } from './modules/DOM-rendering';
import { startTimer, stopTimer } from './modules/timer';
import { gameOverPopUp, POPUP_BACK, POPUP, RESTART_GAME_BTN, GAME_OVER_TEXT } from './modules/game-over';
import { openCell, paintCell } from './modules/open-cell';
import { rightClickHandler } from './modules/right-click';
import { winGamePopup, musicWin } from './modules/win-game';
import audioFail from './assets/sounds/stranger-things-clock-sound.mp3';
import audioClick from './assets/sounds/VideoGameMenuSoundsMenu.mp3';
import img from './assets/img/images.jpg';
import bulb from './assets/img/bulb.png';

createLayout();

const ctx = document.querySelector('canvas').getContext('2d');

export let field = [];
let bombs = [];
export let clicksNum;

export let CANVAS_PARAMS = {
  CELL_SIZE: 35,
  ROWS: 10,
  COLS: 10,
  BOMB_COUNT: 10,
};

export const FIRST_COLOR = '#E52A29';
export const SECOND_COLOR = '#040825';
const BOMB_IMG = new Image();
BOMB_IMG.src = img;

export function draw() {
  clicksNum = 0;
  isFirstClick = true;
  stopTimer();
  document.querySelector('.clicks-num').innerHTML = clicksNum;
  console.log('start draw')
  
  CANVAS.width = this.CELL_SIZE * this.COLS;
  CANVAS.height = this.CELL_SIZE * this.ROWS;
// draw canvas field
  field.splice(0, field.length); //clean field
  bombs.splice(0, bombs.length); //clean bombs
  for (let i = 0; i < this.ROWS; i++) {
    field.push([]);
    for (let j = 0; j < this.COLS; j++) {
      field[i].push({
        isOpen: false,
        hasBomb: false,
        hasFlag: false,
        bombCount: 0
      });
      const x = j * this.CELL_SIZE;
      const y = i * this.CELL_SIZE;
      const color = (i + j) % 2 === 0 ? FIRST_COLOR : SECOND_COLOR;
      ctx.fillStyle = color;
      ctx.fillRect(j * this.CELL_SIZE, i * this.CELL_SIZE, this.CELL_SIZE, this.CELL_SIZE);
    }
  }
};

function clickHandler(x, y) {
console.log('start clickHandler', this.CELL_SIZE)
console.log(field)
  const clickedCol = Math.floor(x / this.CELL_SIZE);
  const clickedRow = Math.floor(y / this.CELL_SIZE);
  if (bombs.length > 0) {
    console.log('Бомбы уже расставлены');
    console.log(field);

    if (field[clickedRow][clickedCol].hasFlag) {
      return;
    }
    showField.call(CANVAS_PARAMS, clickedCol, clickedRow);
    return;
  } else {
    createBombLayout.call(CANVAS_PARAMS);
    while (field[clickedRow][clickedCol].hasBomb) {
      console.log('resort bombs');
      bombs = [];
      createBombLayout.call(CANVAS_PARAMS);

      if (!field[clickedRow][clickedCol].hasBomb) {
        showField.call(CANVAS_PARAMS, clickedCol, clickedRow);
        return;
      }
    }
    showField.call(CANVAS_PARAMS, clickedCol, clickedRow);
  }
};

CANVAS.addEventListener("click", (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  clickHandler.call(CANVAS_PARAMS, x, y);
});

CANVAS.addEventListener("contextmenu", (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  event.preventDefault();
  rightClickHandler.call(CANVAS_PARAMS, x, y);
});

function createBombLayout() {
  console.log('start createBombLayout')
  // clear field
  for (let i = 0; i < this.ROWS; i++) {
    for (let j = 0; j < this.COLS; j++) {
      field[i][j].isOpen = false;
      field[i][j].hasBomb = false;
      field[i][j].hasFlag = false;
      field[i][j].bombCount = 0;
    }
  }

  while (bombs.length < this.BOMB_COUNT) {
    const row = Math.floor(Math.random() * this.ROWS);
    const col = Math.floor(Math.random() * this.COLS);

    if (!field[row][col].hasBomb) {
      bombs.push({ row, col });
      field[row][col].hasBomb = true;
    }
  }
  for (let i = 0; i < this.ROWS; i++) {
    for (let j = 0; j < this.COLS; j++) {
      if (field[i][j].hasBomb) {
        if (i === 0) {
          if (j === 0) {
            field[i][j+1].bombCount += 1;
            field[i+1][j].bombCount += 1;
            field[i+1][j+1].bombCount += 1;
          } else if (j < this.COLS - 1) {
            field[i][j-1].bombCount += 1;
            field[i][j+1].bombCount += 1;
            field[i+1][j-1].bombCount += 1;
            field[i+1][j].bombCount += 1;
            field[i+1][j+1].bombCount += 1;
          } else if (j === this.COLS - 1) {
            field[i][j-1].bombCount += 1;
            field[i+1][j-1].bombCount += 1;
            field[i+1][j].bombCount += 1;
          }
        } else if (i === this.ROWS - 1) {
          if (j === 0) {
            field[i][j+1].bombCount += 1;
            field[i-1][j].bombCount += 1;
            field[i-1][j+1].bombCount += 1;
          } else if (j < this.COLS - 1) {
            field[i][j-1].bombCount += 1;
            field[i][j+1].bombCount += 1;
            field[i-1][j-1].bombCount += 1;
            field[i-1][j].bombCount += 1;
            field[i-1][j+1].bombCount += 1;
          } else if (j === this.COLS - 1) {
            field[i][j-1].bombCount += 1;
            field[i-1][j-1].bombCount += 1;
            field[i-1][j].bombCount += 1;
          }
        } else {
          if (j === 0) {
            field[i-1][j].bombCount += 1;
            field[i-1][j+1].bombCount += 1;
            field[i][j+1].bombCount += 1;
            field[i+1][j].bombCount += 1;
            field[i+1][j+1].bombCount += 1;
          } else if (j === this.COLS - 1) {
            field[i-1][j-1].bombCount += 1;
            field[i-1][j].bombCount += 1;
            field[i][j-1].bombCount += 1;
            field[i+1][j-1].bombCount += 1;
            field[i+1][j].bombCount += 1;
          } else {
            field[i-1][j-1].bombCount += 1;
            field[i-1][j].bombCount += 1;
            field[i-1][j+1].bombCount += 1;
            field[i][j-1].bombCount += 1;
            field[i][j+1].bombCount += 1;
            field[i+1][j-1].bombCount += 1;
            field[i+1][j].bombCount += 1;
            field[i+1][j+1].bombCount += 1;
          }
        }
      }
    }
  }
  console.log('field')
  console.log(field)
  console.log('bombs')
  console.log(bombs)
}

let isFirstClick = true;
let openedCells;

function showField (clickedCol, clickedRow) {
  console.log('start showField', 'col ' + clickedCol, 'row ' + clickedRow, this.CELL_SIZE)

  if (isFirstClick) {
    console.log('first click')
    startTimer();
  } else {
    console.log('second click')
  }
  console.log(clickedCol, clickedRow);

  const CLICKED_CELL = field[clickedRow][clickedCol];

  if (CLICKED_CELL.hasBomb) {
    ctx.drawImage(BOMB_IMG, clickedCol * this.CELL_SIZE, clickedRow * this.CELL_SIZE, this.CELL_SIZE, this.CELL_SIZE);
    stopTimer();
    musicFail.play();
    gameOverPopUp();
  }
  if (!CLICKED_CELL.isOpen && !CLICKED_CELL.hasBomb) {
    clicksNum++;
    document.querySelector('.clicks-num').textContent = '';
    document.querySelector('.clicks-num').textContent = clicksNum;
    soundClick.play();
  }
  // paint opened cells
  openCell.call(CANVAS_PARAMS, clickedCol, clickedRow);
  // game win
  openedCells = 0;
  for (let i = 0; i < this.ROWS; i++) {
    for (let j = 0; j < this.COLS; j++) {
      if (field[i][j].isOpen) {
        openedCells += 1;
      }
    }
  }
  if (openedCells === this.COLS * this.ROWS - this.BOMB_COUNT) {
    winGamePopup();
  }
  console.log('openedCells ' + openedCells)
  isFirstClick = false;
}

RESTART_GAME_BTN.addEventListener('click', event => {
  isFirstClick = true;
  draw.call(CANVAS_PARAMS);
  stopTimer();
  POPUP.remove();
  GAME_OVER_TEXT.remove();
  POPUP_BACK.remove();
  musicFail.pause();
  musicWin.pause();
})

document.querySelector('.new-game-button').addEventListener('click', event => {
  console.log(field);
  isFirstClick = true;
  draw.call(CANVAS_PARAMS);
  stopTimer();
})

// Game levels
const changeGameLvl = document.querySelector('.select').addEventListener('input', event => {
  switch (event.target.value) {
    case 'easy':
      console.log('easy');
      CANVAS_PARAMS.CELL_SIZE = 35;
      CANVAS_PARAMS.ROWS = 10;
      CANVAS_PARAMS.COLS = 10;
      CANVAS_PARAMS.BOMB_COUNT = 10;
      document.querySelector('.mines-input').value = 10;
      draw.call(CANVAS_PARAMS);
      break;
    case 'medium':
      console.log('medium');
      CANVAS_PARAMS.CELL_SIZE = 30;
      CANVAS_PARAMS.ROWS = 15;
      CANVAS_PARAMS.COLS = 15;
      CANVAS_PARAMS.BOMB_COUNT = 30;
      document.querySelector('.mines-input').value = 30;
      draw.call(CANVAS_PARAMS);
      break;
    case 'hard':
      console.log('hard');
      CANVAS_PARAMS.CELL_SIZE = 25;
      CANVAS_PARAMS.ROWS = 25;
      CANVAS_PARAMS.COLS = 25;
      CANVAS_PARAMS.BOMB_COUNT = 80;
      document.querySelector('.mines-input').value = 80;
      draw.call(CANVAS_PARAMS);
      break;
    default:
      console.log('error on changeGameLvl')
      break;
  }
});

const changeMinesNum = document.querySelector('.mines-input').addEventListener('input', event => {
  CANVAS_PARAMS.BOMB_COUNT = event.target.value;
});

// Audio
const soundClick = new Audio(audioClick);

const musicFail = new Audio(audioFail);
console.log(typeof musicFail)
//Game results
const getGameResults = document.querySelector('.results-button').addEventListener('click', event => {

  const gamesResultsArr = [];
  for (let i = 1; i <= 10; i++) {
    if (localStorage.getItem(`game ${i}`)) {
        let gamesResults = JSON.parse(localStorage.getItem(`game ${i}`));
        gamesResultsArr.push(gamesResults);
    }
  }
  console.log(gamesResultsArr);
  POPUP_BACK.className = 'popup-background';
  document.body.appendChild(POPUP_BACK);

  const WINNED_GAMES_TABLE = document.createElement('table');
  WINNED_GAMES_TABLE.className = 'results-table';
  POPUP_BACK.appendChild(WINNED_GAMES_TABLE);
  const TABLE_HEADER = document.createElement('thead');
  WINNED_GAMES_TABLE.appendChild(TABLE_HEADER);
  const TABLE_HEADER_ROW1 = document.createElement('tr');
  TABLE_HEADER.appendChild(TABLE_HEADER_ROW1);
  const TABLE_HEADER_ROW2 = document.createElement('tr');
  TABLE_HEADER.appendChild(TABLE_HEADER_ROW2);

  const TABLE_HEADER_CELL11 = document.createElement('th');
  TABLE_HEADER_CELL11.setAttribute('colspan', 3);
  TABLE_HEADER_CELL11.textContent = 'WINNED GAMES'
  TABLE_HEADER_ROW1.appendChild(TABLE_HEADER_CELL11);

  const TABLE_HEADER_CELL21 = document.createElement('th');
  TABLE_HEADER_CELL21.textContent = 'GAME #';
  TABLE_HEADER_ROW2.appendChild(TABLE_HEADER_CELL21);

  const TABLE_HEADER_CELL22 = document.createElement('th');
  TABLE_HEADER_CELL22.textContent = 'TIME';
  TABLE_HEADER_ROW2.appendChild(TABLE_HEADER_CELL22);

  const TABLE_HEADER_CELL23 = document.createElement('th');
  TABLE_HEADER_CELL23.textContent = 'CLICKS';
  TABLE_HEADER_ROW2.appendChild(TABLE_HEADER_CELL23);

  const TABLE_BODY = document.createElement('tbody');
  TABLE_BODY.className = 'results-table-body';
  WINNED_GAMES_TABLE.appendChild(TABLE_BODY);

  gamesResultsArr.forEach((el, ind) => {
    console.log(el);
    const TABLE_BODY_ROW = document.createElement('tr');
    TABLE_BODY.appendChild(TABLE_BODY_ROW);
    el.forEach((e, i) => {
      const TABLE_BODY_CELL = document.createElement('td');
      if (i === 0) {
        TABLE_BODY_ROW.appendChild(TABLE_BODY_CELL);
        TABLE_BODY_CELL.textContent = e;
      } else if (i === 1 || i === 2) {
        if (i === 1) {
          TABLE_BODY_CELL.className = 'results-table-time';
          TABLE_BODY_ROW.appendChild(TABLE_BODY_CELL);
          TABLE_BODY_CELL.textContent = e + ' : ';
        } else if (i === 2) {
          console.log(document.querySelectorAll('.results-table-time')[ind].textContent)
          document.querySelectorAll('.results-table-time')[ind].textContent += e;
        }
      } else {
        TABLE_BODY_ROW.appendChild(TABLE_BODY_CELL);
        TABLE_BODY_CELL.textContent = e;
      }
    })
  })
  document.querySelector('.popup-background').addEventListener('click', event => {
    while (POPUP_BACK.firstChild) {
      POPUP_BACK.removeChild(POPUP_BACK.firstChild);
    }
    POPUP_BACK.remove();
  })

});

function setLocalStorage() {
  console.log('start setLocalStorage')
  let fieldString = JSON.stringify(field);
  localStorage.setItem('game state', fieldString);

  let canvasString = JSON.stringify(CANVAS_PARAMS);
  localStorage.setItem('Canvas params', canvasString);

  let gameLvl = document.querySelector('.select').value;
  localStorage.setItem('game level', gameLvl);

  let minesNum = document.querySelector('.mines-input').value;
  localStorage.setItem('mines number', minesNum);

  let minutes = document.querySelector('.minutes').innerHTML;
  let seconds = document.querySelector('.seconds').innerHTML;
  let currentTime = JSON.stringify([minutes, ':', seconds]);
  localStorage.setItem('Time', currentTime);

  localStorage.setItem('number of clicks', clicksNum);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  console.log('start getLocalStorage')
  if (localStorage.getItem('game state') && localStorage.getItem('game state') !== '[]') { //will work if empty arrow is saved []
    console.log('has local stor')

    isFirstClick = false;
    
    field = JSON.parse(localStorage.getItem('game state'));
    CANVAS_PARAMS = JSON.parse(localStorage.getItem('Canvas params'));
    clicksNum = localStorage.getItem('number of clicks')
    // startTimer(minutes, seconds);
    console.log(field)
    document.querySelector('.clicks-num').textContent = clicksNum;
    document.querySelector('.select').value = localStorage.getItem('game level');
    document.querySelector('.mines-input').value = localStorage.getItem('mines number');
    
    CANVAS.width = CANVAS_PARAMS.CELL_SIZE * CANVAS_PARAMS.COLS;
    CANVAS.height = CANVAS_PARAMS.CELL_SIZE * CANVAS_PARAMS.ROWS;
  // draw canvas field
    for (let i = 0; i < CANVAS_PARAMS.ROWS; i++) {
      for (let j = 0; j < CANVAS_PARAMS.COLS; j++) {

        if (field[i][j].hasBomb) {
          bombs.push({ i, j })
        }
        if (!field[i][j].isOpen) {
          const color = (i + j) % 2 === 0 ? FIRST_COLOR : SECOND_COLOR;
          ctx.fillStyle = color;
          ctx.fillRect(j * CANVAS_PARAMS.CELL_SIZE, i * CANVAS_PARAMS.CELL_SIZE, CANVAS_PARAMS.CELL_SIZE, CANVAS_PARAMS.CELL_SIZE);
        }
        if (field[i][j].hasFlag) {
          const FLAG_IMG = new Image();
          FLAG_IMG.src = bulb;
          FLAG_IMG.onload = function() {
            ctx.drawImage(FLAG_IMG, j * CANVAS_PARAMS.CELL_SIZE, i * CANVAS_PARAMS.CELL_SIZE, CANVAS_PARAMS.CELL_SIZE, CANVAS_PARAMS.CELL_SIZE);
          };
        }
        if (field[i][j].isOpen) {
          paintCell.call(CANVAS_PARAMS, j, i);
        }
      }
    }
    console.log(field)
  } else {
    console.log('no local stor')
    draw.call(CANVAS_PARAMS);
  }
}
window.addEventListener('load', getLocalStorage.call(CANVAS_PARAMS));

// window.addEventListener("resize", adjustCanvas);
// window.addEventListener("load", adjustCanvas);

const adjustCanvas = () => {
  if (window.innerWidth < 640) {
    // CANVAS_PARAMS.CELL_SIZE
  // } else if (window.innerWidth > 767 && window.innerWidth < 1280) {
  //   return offset = 620
  // } else {
  //   return offset = 305
  }
}