import { field } from "../index";
import { FIRST_COLOR, SECOND_COLOR } from "../index";
import img from '../assets/img/bulb.png';

export const FLAG_IMG = new Image();
FLAG_IMG.src = img;

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
    ctx.drawImage(FLAG_IMG, clickedCol * this.CELL_SIZE, clickedRow * this.CELL_SIZE, this.CELL_SIZE, this.CELL_SIZE);
    // ctx.fillStyle = FLAG_COLOR;
    // ctx.font = 'bold 20px serif';
    // ctx.fillText('F', clickedCol * this.CELL_SIZE + this.CELL_SIZE / 3, clickedRow * this.CELL_SIZE + 2 * this.CELL_SIZE / 3);
  } else {
    field[clickedRow][clickedCol].hasFlag = false;
    ctx.resetTransform();
    // ctx.fillStyle = FLAG_COLOR;
    // ctx.font = 'bold 20px serif';
    // ctx.clearRect(clickedCol * this.CELL_SIZE + this.CELL_SIZE / 3, clickedRow * this.CELL_SIZE -10 + 2 * this.CELL_SIZE / 3, 10, 10);

  const color = (clickedRow + clickedCol) % 2 === 0 ? FIRST_COLOR : SECOND_COLOR;
    ctx.fillStyle = color;
    ctx.fillRect(clickedCol * this.CELL_SIZE - 1 + this.CELL_SIZE / 3, clickedRow * this.CELL_SIZE - 11 + 2 * this.CELL_SIZE / 3, 12, 12)
  }

}
