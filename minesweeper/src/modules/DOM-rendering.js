export const CANVAS = document.createElement('canvas');
// create basic layout
export const createLayout = (function createLayout() {
  const WRAPPER = document.createElement('div');
  WRAPPER.className = 'wrapper';

  CANVAS.className = 'canvas';

  document.body.appendChild(WRAPPER);
  WRAPPER.appendChild(CANVAS);
}());

export const ctx = document.querySelector('canvas').getContext('2d');

const field = [];
let bombs = [];

const CELL_SIZE = 35;
const ROWS = 10;
const COLS = 10;
let BOMB_COUNT = 80;


function draw() {
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

export const clickHandler = CANVAS.addEventListener("click", function(event) {
  const clickedCol = Math.floor(event.offsetX / CELL_SIZE);
  const clickedRow = Math.floor(event.offsetY / CELL_SIZE);

  if (bombs.length > 0) {
    console.log('Бомбы уже расставлены')
    showField(clickedCol, clickedRow);
    return;
  } else {
    createBombLayout();
    while (field[clickedRow][clickedCol].hasBomb) {
      console.log('resort bombs');
      bombs = [];
      createBombLayout();

      if (!field[clickedRow][clickedCol].hasBomb) {
        showField(clickedCol, clickedRow);
        return;
      }
    }
    showField(clickedCol, clickedRow);
  }
});

function createBombLayout() {
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
  console.log('field')
  console.log(field)
  console.log('bombs')
  console.log(bombs)
}

let isFirstClick = true;

function showField (clickedCol, clickedRow) {
  if (isFirstClick) {
    console.log('first click')
    field[clickedRow][clickedCol].isOpen = true;
    
    field[clickedRow][clickedCol].bombCount = true;

  } else {
    console.log('second click')

  }
  console.log(clickedCol, clickedRow);
      // ctx.fillStyle = "#f00";
    // ctx.fillText("X", clickedCol * CELL_SIZE + CELL_SIZE / 3, clickedRow * CELL_SIZE + 2 * CELL_SIZE / 3);
  isFirstClick = false;
}

