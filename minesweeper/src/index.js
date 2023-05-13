import './index.html';
import './style.css';
import { createLayout, CANVAS } from './modules/DOM-rendering';
import { startTimer, stopTimer } from './modules/timer';
import { gameOverPopUp, POPUP_BACK, POPUP, RESTART_GAME_BTN, GAME_OVER_TEXT } from './modules/game-over';

createLayout();

const ctx = document.querySelector('canvas').getContext('2d');

const field = [];
let bombs = [];

// const CELL_SIZE = 35;
// const ROWS = 10;
// const COLS = 10;
// let BOMB_COUNT = 10;

export function draw(CELL_SIZE = 35, ROWS = 10, COLS = 10, BOMB_COUNT = 10) {
  console.log('start draw')
  const FIRST_COLOR = '#66ff66';
  const SECOND_COLOR = '#009900';
  
  CANVAS.width = CELL_SIZE * COLS;
  CANVAS.height = CELL_SIZE * ROWS;
// draw canvas field
  for (let i = 0; i < ROWS; i++) {
    field.push([]);
    for (let j = 0; j < COLS; j++) {
      field[i].push({
        isOpen: false,
        hasBomb: false,
        bombCount: 0
      });
      const x = j * CELL_SIZE;
      const y = i * CELL_SIZE;
      const color = (i + j) % 2 === 0 ? FIRST_COLOR : SECOND_COLOR;
      ctx.fillStyle = color;
      ctx.fillRect(j * CELL_SIZE, i * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
  }
};
draw();

export const clickHandler = (clickedCol, clickedRow, CELL_SIZE = 35, ROWS = 10, COLS = 10, BOMB_COUNT = 10) => {
console.log('clickHandler', CELL_SIZE)
  if (bombs.length > 0) {
    console.log('Бомбы уже расставлены')
    showField(clickedCol, clickedRow, CELL_SIZE);
    return;
  } else {
    createBombLayout(ROWS = 10, COLS = 10, BOMB_COUNT = 10);
    while (field[clickedRow][clickedCol].hasBomb) {
      console.log('resort bombs');
      bombs = [];
      createBombLayout(ROWS = 10, COLS = 10, BOMB_COUNT = 10);

      if (!field[clickedRow][clickedCol].hasBomb) {
        showField(clickedCol, clickedRow, CELL_SIZE);
        return;
      }
    }
    showField(clickedCol, clickedRow, CELL_SIZE);
  }
};

CANVAS.addEventListener("click", (event, CELL_SIZE = 35) => {
  const clickedCol = Math.floor(event.offsetX / CELL_SIZE);
  const clickedRow = Math.floor(event.offsetY / CELL_SIZE);
  clickHandler(clickedCol, clickedRow, CELL_SIZE);
});

function createBombLayout(ROWS = 10, COLS = 10, BOMB_COUNT = 10) {
  console.log('start createBombLayout')
  // clear field
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      field[i][j].isOpen = false;
      field[i][j].hasBomb = false;
      field[i][j].bombCount = 0;
    }
  }

  while (bombs.length < BOMB_COUNT) {
    const row = Math.floor(Math.random() * ROWS);
    const col = Math.floor(Math.random() * COLS);

    if (!field[row][col].hasBomb) {
      bombs.push({ row, col });
      field[row][col].hasBomb = true;
    }
  }
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (field[i][j].hasBomb) {
        if (i === 0) {
          if (j === 0) {
            field[i][j+1].bombCount += 1;
            field[i+1][j].bombCount += 1;
            field[i+1][j+1].bombCount += 1;
          } else if (j < COLS - 1) {
            field[i][j-1].bombCount += 1;
            field[i][j+1].bombCount += 1;
            field[i+1][j-1].bombCount += 1;
            field[i+1][j].bombCount += 1;
            field[i+1][j+1].bombCount += 1;
          } else if (j === COLS - 1) {
            field[i][j-1].bombCount += 1;
            field[i+1][j-1].bombCount += 1;
            field[i+1][j].bombCount += 1;
          }
        } else if (i === ROWS - 1) {
          if (j === 0) {
            field[i][j+1].bombCount += 1;
            field[i-1][j].bombCount += 1;
            field[i-1][j+1].bombCount += 1;
          } else if (j < COLS - 1) {
            field[i][j-1].bombCount += 1;
            field[i][j+1].bombCount += 1;
            field[i-1][j-1].bombCount += 1;
            field[i-1][j].bombCount += 1;
            field[i-1][j+1].bombCount += 1;
          } else if (j === COLS - 1) {
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
          } else if (j === COLS - 1) {
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

function showField (clickedCol, clickedRow, CELL_SIZE = 35) {
  console.log('showField', clickedCol, clickedRow, CELL_SIZE)
  if (isFirstClick) {
    console.log('first click')
    startTimer();
  } else {
    console.log('second click')

  }
  console.log(clickedCol, clickedRow);

  if (field[clickedRow][clickedCol].hasBomb) {
    ctx.fillStyle = "#f00";
    ctx.fillText('*', clickedCol * CELL_SIZE + CELL_SIZE / 3, clickedRow * CELL_SIZE + 2 * CELL_SIZE / 3);
    stopTimer();
    gameOverPopUp();
  }
  // paint opened cells
  field[clickedRow][clickedCol].isOpen = true;
  if ((clickedCol + clickedRow) % 2 === 0) {
    ctx.fillStyle = '#FFE5CC';
  } else {
    ctx.fillStyle = '#FFCC99';
  }
  ctx.fillRect(clickedCol * CELL_SIZE, clickedRow * CELL_SIZE, CELL_SIZE, CELL_SIZE);

  if (field[clickedRow][clickedCol].bombCount > 0) {
    ctx.fillStyle = "#f00";
    ctx.fillText(`${field[clickedRow][clickedCol].bombCount}`, clickedCol * CELL_SIZE + CELL_SIZE / 3, clickedRow * CELL_SIZE + 2 * CELL_SIZE / 3);
  }

  isFirstClick = false;
}


RESTART_GAME_BTN.addEventListener('click', event => {
  draw();
  POPUP.remove();
  GAME_OVER_TEXT.remove();
  POPUP_BACK.remove();
})

const changeGameLvl = document.querySelector('.select').addEventListener('input', event => {
  switch (event.target.value) {
    case 'easy':
      console.log('easy');
      CELL_SIZE = 35;
      ROWS = 10;
      COLS = 10;
      BOMB_COUNT = 10;
      break;
    case 'medium':
      console.log('medium');
      draw(30, 15, 15, 15);
      break;
    case 'hard':
      console.log('hard');
      draw(25, 25, 25, 25);
      break;
    default:
      console.log('error on changeGameLvl')
      break;
  }
});
