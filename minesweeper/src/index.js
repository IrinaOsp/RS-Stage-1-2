import './index.html';
import './style.css';
import { createLayout, CANVAS } from './modules/DOM-rendering';
import { minutes, seconds, startTimer, stopTimer } from './modules/timer';
import { gameOverPopUp, POPUP_BACK, POPUP, RESTART_GAME_BTN, GAME_OVER_TEXT } from './modules/game-over';
import { openCell, paintCell } from './modules/open-cell';
import { rightClickHandler } from './modules/right-click';
import { winGamePopup } from './modules/win-game'

createLayout();

const ctx = document.querySelector('canvas').getContext('2d');

export let field = [];
console.log('fead change')
let bombs = [];
export let clicksNum;

export let CANVAS_PARAMS = {
  CELL_SIZE: 35,
  ROWS: 10,
  COLS: 10,
  BOMB_COUNT: 10,
}

// CELL_SIZE = 35, ROWS = 10, COLS = 10, BOMB_COUNT = 10
export function draw() {
  clicksNum = 0;
  isFirstClick = true;
  stopTimer();
  document.querySelector('.clicks-num').innerHTML = clicksNum;
  console.log('start draw')
  const FIRST_COLOR = '#66ff66';
  const SECOND_COLOR = '#009900';
  
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
// draw.call(CANVAS_PARAMS);


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
    ctx.fillStyle = "#f00";
    ctx.fillText('*', clickedCol * this.CELL_SIZE + this.CELL_SIZE / 3, clickedRow * this.CELL_SIZE + 2 * this.CELL_SIZE / 3);
    stopTimer();
    // audioFail.play();
    gameOverPopUp();
  }
  if (!CLICKED_CELL.isOpen && !CLICKED_CELL.hasBomb) {
    clicksNum += 1;
    document.querySelector('.clicks-num').innerHTML = clicksNum;
    audioClick.play();
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
const audioClick = new Audio('https://www.fesliyanstudios.com/play-mp3/2909');
// path = './assets/sounds/stranger-things-clock-sound.mp3'
// console.log(path)
const audioFail = new Audio('./assets/sounds/stranger-things-clock-sound.mp3');

//Game results
const getGameResults = document.querySelector('.results-button').addEventListener('click', event => {
  // let i=1;
  // console.log(localStorage.getItem(`game time ${i} minutes`))
  // console.log(localStorage.getItem(`game time ${i} seconds`))
  // console.log(localStorage.getItem(`game time ${i} clicks`))
  const gamesResults = {
    minutes: 0,
    seconds: 0,
    clicks: 0
  };
  const gamesResultsArr = [];
  for (let i = 1; i <= 10; i++) {
      console.log('for ')
      if (localStorage.getItem(`game time ${i} minutes`)) {
        gamesResults.minutes = localStorage.getItem(`game time ${i} minutes`);
      }
      if (localStorage.getItem(`game time ${i} seconds`)) {
        gamesResults.seconds = localStorage.getItem(`game time ${i} seconds`);
      }
      if (localStorage.getItem(`game time ${i} clicks`)) {
        gamesResults.clicks = localStorage.getItem(`game time ${i} clicks`);
        console.log('push')
        gamesResultsArr.push(gamesResults);
        console.log(gamesResultsArr)
      }
      console.log(gamesResults);

  }
  console.log(gamesResultsArr)
});

function setLocalStorage() {
  console.log('start setLocalStorage')
  let fieldString = JSON.stringify(field);
  localStorage.setItem('game state', fieldString);

  let canvasString = JSON.stringify(CANVAS_PARAMS);
  localStorage.setItem('Canvas params', canvasString);

  let minutes = document.querySelector('.minutes').innerHTML;
  let seconds = document.querySelector('.seconds').innerHTML;
  let currentTime = JSON.stringify([minutes, ':', seconds]);
  localStorage.setItem('Time', currentTime);

  let numberOfClicks = document.querySelector('.clicks-num');
  localStorage.setItem('number of clicks', numberOfClicks);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  console.log('start getLocalStorage')
  console.log(field)
  console.log(localStorage.getItem('game state'))
  if (localStorage.getItem('game state') && localStorage.getItem('game state') !== '[]') { //will work if empty arrow is saved []
    console.log('has local stor')

    isFirstClick = false;
    
    // let fieldString = localStorage.getItem('game state');
    field = JSON.parse(localStorage.getItem('game state'));
    CANVAS_PARAMS = JSON.parse(localStorage.getItem('Canvas params'));
     
    // startTimer(minutes, seconds);
    console.log(field)
    // document.querySelector('.clicks-num').innerHTML = clicksNum;
    const FIRST_COLOR = '#66ff66';
    const SECOND_COLOR = '#009900';
    
    CANVAS.width = CANVAS_PARAMS.CELL_SIZE * CANVAS_PARAMS.COLS;
    CANVAS.height = CANVAS_PARAMS.CELL_SIZE * CANVAS_PARAMS.ROWS;
  // draw canvas field
    for (let i = 0; i < CANVAS_PARAMS.ROWS; i++) {
      for (let j = 0; j < CANVAS_PARAMS.COLS; j++) {

        if (field[i][j].hasBomb) {
          bombs.push({ i, j })
        }
        if (field[i][j].isOpen) {
          paintCell.call(CANVAS_PARAMS, j, i);
        }
        if (!field[i][j].isOpen) {
          const color = (i + j) % 2 === 0 ? FIRST_COLOR : SECOND_COLOR;
          ctx.fillStyle = color;
          ctx.fillRect(j * CANVAS_PARAMS.CELL_SIZE, i * CANVAS_PARAMS.CELL_SIZE, CANVAS_PARAMS.CELL_SIZE, CANVAS_PARAMS.CELL_SIZE);
        }
        if (field[i][j].hasFlag) {
          ctx.fillStyle = "#f00";
          ctx.fillText('F', j * CANVAS_PARAMS.CELL_SIZE + CANVAS_PARAMS.CELL_SIZE / 3, i * CANVAS_PARAMS.CELL_SIZE + 2 * CANVAS_PARAMS.CELL_SIZE / 3);
        }
      // else if (field[i][j].bombCount > 0) {
      //     if ((i + j) % 2 === 0) {
      //       ctx.fillStyle = '#FFE5CC';
      //     } else {
      //       ctx.fillStyle = '#FFCC99';
      //     }
      //     ctx.fillRect(j * CANVAS_PARAMS.CELL_SIZE, i * CANVAS_PARAMS.CELL_SIZE, CANVAS_PARAMS.CELL_SIZE, CANVAS_PARAMS.CELL_SIZE);
      //     switch (field[i][j].bombCount) {
      //       case '1':
      //         ctx.fillStyle = "blue";
      //         break;
      //       case '2':
      //         ctx.fillStyle = "green";
      //         break;
      //       case '3':
      //         ctx.fillStyle = "red";
      //         break;
      //       default:
      //         ctx.fillStyle = "#f00";
      //     }
      //       ctx.fillText(`${field[i][j].bombCount}`, j * CANVAS_PARAMS.CELL_SIZE + CANVAS_PARAMS.CELL_SIZE / 3, i * CANVAS_PARAMS.CELL_SIZE + 2 * CANVAS_PARAMS.CELL_SIZE / 3);

      //   } else {
      //     if ((i + j) % 2 === 0) {
      //       ctx.fillStyle = '#FFE5CC';
      //     } else {
      //       ctx.fillStyle = '#FFCC99';
      //     }
      //     ctx.fillRect(j * CANVAS_PARAMS.CELL_SIZE, i * CANVAS_PARAMS.CELL_SIZE, CANVAS_PARAMS.CELL_SIZE, CANVAS_PARAMS.CELL_SIZE);

      //   }

      }
    }
    console.log(field)
  } else {
    console.log('no local stor')
    draw.call(CANVAS_PARAMS);
  }
}
window.addEventListener('load', getLocalStorage.call(CANVAS_PARAMS));