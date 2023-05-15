import { field } from "../index";

export function rightClickHandler (x, y) {
  console.log('start rightClickHandler')
  const clickedCol = Math.floor(x / this.CELL_SIZE);
  const clickedRow = Math.floor(y / this.CELL_SIZE);
  const ctx = document.querySelector('canvas').getContext('2d');
  if (field[clickedRow][clickedCol].isOpen) {
    return;
  }
  if (!field[clickedRow][clickedCol].hasFlag) {
    field[clickedRow][clickedCol].hasFlag = true;
    ctx.fillStyle = "#f00";
    ctx.fillText('F', clickedCol * this.CELL_SIZE + this.CELL_SIZE / 3, clickedRow * this.CELL_SIZE + 2 * this.CELL_SIZE / 3);
  } else {
    field[clickedRow][clickedCol].hasFlag = false;
    ctx.resetTransform();
    ctx.fillStyle = "#f00";
    ctx.clearRect(clickedCol * this.CELL_SIZE + this.CELL_SIZE / 3, clickedRow * this.CELL_SIZE -10 + 2 * this.CELL_SIZE / 3, 10, 10);

  const FIRST_COLOR = '#66ff66';
  const SECOND_COLOR = '#009900';
  const color = (clickedRow + clickedCol) % 2 === 0 ? FIRST_COLOR : SECOND_COLOR;
    ctx.fillStyle = color;
    ctx.fillRect(clickedCol * this.CELL_SIZE - 1 + this.CELL_SIZE / 3, clickedRow * this.CELL_SIZE - 11 + 2 * this.CELL_SIZE / 3, 12, 12)
  }

}
