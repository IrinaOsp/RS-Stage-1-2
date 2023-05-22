import { field } from "../index";
import { FIRST_COLOR, SECOND_COLOR } from "../index";
import img from '../assets/img/bulb.png';

export const FLAG_IMG = new Image();
FLAG_IMG.src = img;

export function rightClickHandler (x, y) {
  const clickedCol = Math.floor(x / this.CELL_SIZE);
  const clickedRow = Math.floor(y / this.CELL_SIZE);
  const ctx = document.querySelector('canvas').getContext('2d');
  if (field[clickedRow][clickedCol].isOpen) {
    return;
  }
  if (!field[clickedRow][clickedCol].hasFlag) {
    field[clickedRow][clickedCol].hasFlag = true;
    ctx.drawImage(FLAG_IMG, clickedCol * this.CELL_SIZE, clickedRow * this.CELL_SIZE, this.CELL_SIZE, this.CELL_SIZE);
  } else {
    field[clickedRow][clickedCol].hasFlag = false;
    ctx.clearRect(clickedCol * this.CELL_SIZE, clickedRow * this.CELL_SIZE, this.CELL_SIZE, this.CELL_SIZE);
    const color = (clickedRow + clickedCol) % 2 === 0 ? FIRST_COLOR : SECOND_COLOR;
    ctx.fillStyle = color;
    ctx.fillRect(clickedCol * this.CELL_SIZE, clickedRow * this.CELL_SIZE, this.CELL_SIZE, this.CELL_SIZE);
  }

}
