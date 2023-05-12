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
  const cellSize = 35;
  const x = Math.floor(event.offsetX / cellSize);
  const y = Math.floor(event.offsetY / cellSize);

  if (bombs.length > 0) {
    console.log('Бомбы уже расставлены')
    return;
  }
  while (bombs.length < BOMB_COUNT) {
    const row = Math.floor(Math.random() * ROWS);
    const col = Math.floor(Math.random() * COLS);

    if (!field[row][col].hasBomb) {
      bombs.push({ row, col });
      field[row][col].hasBomb = true;
    }
  }
  console.log(field)
  console.log(bombs)
  // Добавляем символ в ячейку
  // ctx.fillText("X", x * cellSize + cellSize / 3, y * cellSize + 2 * cellSize / 3);
});