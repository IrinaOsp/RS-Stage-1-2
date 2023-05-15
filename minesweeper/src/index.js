import './index.html';
import './style.css';
import { createLayout, CANVAS } from './modules/DOM-rendering';
import { startTimer, stopTimer } from './modules/timer';
import { gameOverPopUp, POPUP_BACK, POPUP, RESTART_GAME_BTN, GAME_OVER_TEXT } from './modules/game-over';
import { openCell } from './modules/open-cell';
import { rightClickHandler } from './modules/right-click';
import { winGamePopup } from './modules/win-game'

createLayout();

const ctx = document.querySelector('canvas').getContext('2d');

export const field = [];
let bombs = [];

export const CANVAS_PARAMS = {
  CELL_SIZE: 35,
  ROWS: 10,
  COLS: 10,
  BOMB_COUNT: 10,
}

// CELL_SIZE = 35, ROWS = 10, COLS = 10, BOMB_COUNT = 10
export function draw() {
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
draw.call(CANVAS_PARAMS);

function clickHandler(x, y) {
console.log('clickHandler', this.CELL_SIZE)
  const clickedCol = Math.floor(x / this.CELL_SIZE);
  const clickedRow = Math.floor(y / this.CELL_SIZE);
  if (bombs.length > 0) {
    console.log('Бомбы уже расставлены');
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
  console.log('showField', 'col ' + clickedCol, 'row ' + clickedRow, this.CELL_SIZE)
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
    gameOverPopUp();
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

const changeGameLvl = document.querySelector('.select').addEventListener('input', event => {
  switch (event.target.value) {
    case 'easy':
      console.log('easy');
      CANVAS_PARAMS.CELL_SIZE = 35;
      CANVAS_PARAMS.ROWS = 10;
      CANVAS_PARAMS.COLS = 10;
      CANVAS_PARAMS.BOMB_COUNT = 10;
      draw.call(CANVAS_PARAMS);
      break;
    case 'medium':
      console.log('medium');
      CANVAS_PARAMS.CELL_SIZE = 30;
      CANVAS_PARAMS.ROWS = 15;
      CANVAS_PARAMS.COLS = 15;
      CANVAS_PARAMS.BOMB_COUNT = 15;
      draw.call(CANVAS_PARAMS);
      break;
    case 'hard':
      console.log('hard');
      CANVAS_PARAMS.CELL_SIZE = 25;
      CANVAS_PARAMS.ROWS = 25;
      CANVAS_PARAMS.COLS = 25;
      CANVAS_PARAMS.BOMB_COUNT = 25;
      draw.call(CANVAS_PARAMS);
      break;
    default:
      console.log('error on changeGameLvl')
      break;
  }
});


