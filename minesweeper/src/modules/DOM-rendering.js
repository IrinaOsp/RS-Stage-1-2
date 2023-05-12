export const CANVAS = document.createElement('canvas');

// create basic layout
export const createLayout = (function createLayout() {
  const WRAPPER = document.createElement('div');
  WRAPPER.className = 'wrapper';

  const GAME_INFO = document.createElement('div');
  GAME_INFO.className = 'game-info';

  const SELECT_LEVEL = document.createElement('select');
  SELECT_LEVEL.className = 'select';
  SELECT_LEVEL.setAttribute('name', 'select level');

  CANVAS.className = 'canvas';

  document.body.appendChild(WRAPPER);
  WRAPPER.appendChild(GAME_INFO);
  GAME_INFO.appendChild(SELECT_LEVEL);

  const gameLevelsArr = ['easy', 'medium', 'hard']
  gameLevelsArr.forEach(lvl => {
    const LEVEL = document.createElement('option');
    LEVEL.className = 'level-option';
    LEVEL.setAttribute('value', lvl);
    LEVEL.innerText = lvl;
    SELECT_LEVEL.appendChild(LEVEL);
  })

  const NEW_GAME_BTN = document.createElement('button');
  NEW_GAME_BTN.className = 'button';
  NEW_GAME_BTN.innerText = 'NEW GAME';
  GAME_INFO.appendChild(NEW_GAME_BTN);

  const TIMER = document.createElement('div')
  GAME_INFO.appendChild(TIMER);

  const timerArr = ['00', ':', '00'];
  timerArr.forEach(el => {
    const El = document.createElement('span');
    El.className = 'time';
    El.innerText = el;
    TIMER.appendChild(El);
  })

  WRAPPER.appendChild(CANVAS);
}());

export const ctx = document.querySelector('canvas').getContext('2d');
const field = [];
let bombs = [];

const CELL_SIZE = 35;
const ROWS = 10;
const COLS = 10;
let BOMB_COUNT = 10;


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

function showField (clickedCol, clickedRow) {
  if (isFirstClick) {
    console.log('first click')

  } else {
    console.log('second click')

  }
  console.log(clickedCol, clickedRow);

  if (field[clickedRow][clickedCol].hasBomb) {
    ctx.fillStyle = "#f00";
    ctx.fillText('*', clickedCol * CELL_SIZE + CELL_SIZE / 3, clickedRow * CELL_SIZE + 2 * CELL_SIZE / 3);
    alert('Game over. Try again')
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

