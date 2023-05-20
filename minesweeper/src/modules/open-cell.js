import { field, CANVAS_PARAMS } from "../index";

function checkIfOpened (Col, Row) {
  if (!field[Row][Col].isOpen) {
    paintCell.call(CANVAS_PARAMS, Col, Row);
    openCell.call(CANVAS_PARAMS, Col, Row);
  }
}

const FIRST_COLOR_OPEN = '#EDEEF1';
const SECOND_COLOR_OPEN = '#768591';

export function openCell(clickedCol, clickedRow) {
  console.log('start openCell');
  const ctx = document.querySelector('canvas').getContext('2d');

  const CLICKED_CELL = field[clickedRow][clickedCol];
  if (CLICKED_CELL.hasBomb) {
    return;
  }

  paintCell.call(CANVAS_PARAMS, clickedCol, clickedRow);

// check neighbour cell
  if (CLICKED_CELL.bombCount === 0) {
    if (clickedRow === 0) {
      if (clickedCol === 0) {
        checkIfOpened(clickedCol+1, clickedRow);
        checkIfOpened(clickedCol+1, clickedRow+1);
        checkIfOpened(clickedCol, clickedRow+1);

      } else if (clickedCol < this.COLS - 1) {
        checkIfOpened(clickedCol-1, clickedRow);
        checkIfOpened(clickedCol+1, clickedRow);
        checkIfOpened(clickedCol-1, clickedRow+1);
        checkIfOpened(clickedCol, clickedRow+1);
        checkIfOpened(clickedCol+1, clickedRow+1);
      } else if (clickedCol === this.COLS - 1) {
        checkIfOpened(clickedCol-1, clickedRow);
        checkIfOpened(clickedCol-1, clickedRow+1);
        checkIfOpened(clickedCol, clickedRow+1);
      }
    } else if (clickedRow === this.ROWS - 1) {
      if (clickedCol === 0) {
        checkIfOpened(clickedCol+1, clickedRow);
        checkIfOpened(clickedCol, clickedRow-1);
        checkIfOpened(clickedCol+1, clickedRow-1);
      } else if (clickedCol < this.COLS - 1) {
        checkIfOpened(clickedCol-1, clickedRow);
        checkIfOpened(clickedCol+1, clickedRow);
        checkIfOpened(clickedCol-1, clickedRow-1);
        checkIfOpened(clickedCol, clickedRow-1);
        checkIfOpened(clickedCol+1, clickedRow-1);

      } else if (clickedCol === this.COLS - 1) { 
        checkIfOpened(clickedCol-1, clickedRow);
        checkIfOpened(clickedCol-1, clickedRow-1);
        checkIfOpened(clickedCol, clickedRow-1);
      }
    } else {
      if (clickedCol === 0) {
        checkIfOpened(clickedCol, clickedRow-1);
        checkIfOpened(clickedCol+1, clickedRow-1);
        checkIfOpened(clickedCol+1, clickedRow);
        checkIfOpened(clickedCol, clickedRow+1);
        checkIfOpened(clickedCol+1, clickedRow+1);
      } else if (clickedCol === this.COLS - 1) {
        checkIfOpened(clickedCol-1, clickedRow-1);
        checkIfOpened(clickedCol, clickedRow-1);
        checkIfOpened(clickedCol-1, clickedRow);
        checkIfOpened(clickedCol-1, clickedRow+1);
        checkIfOpened(clickedCol, clickedRow+1);
      } else {
        checkIfOpened(clickedCol-1, clickedRow-1);
        checkIfOpened(clickedCol, clickedRow-1);
        checkIfOpened(clickedCol+1, clickedRow-1);
        checkIfOpened(clickedCol-1, clickedRow);
        checkIfOpened(clickedCol+1, clickedRow);
        checkIfOpened(clickedCol-1, clickedRow+1);
        checkIfOpened(clickedCol, clickedRow+1);
        checkIfOpened(clickedCol+1, clickedRow+1);
      }
    }
  }
}

export function paintCell(clickedCol, clickedRow) {
  const ctx = document.querySelector('canvas').getContext('2d');
  field[clickedRow][clickedCol].isOpen = true;

  if ((clickedCol + clickedRow) % 2 === 0) {
    ctx.fillStyle = FIRST_COLOR_OPEN;
  } else {
    ctx.fillStyle = SECOND_COLOR_OPEN;
  }
  ctx.fillRect(clickedCol * this.CELL_SIZE, clickedRow * this.CELL_SIZE, this.CELL_SIZE, this.CELL_SIZE);

  if (field[clickedRow][clickedCol].bombCount > 0) {
    switch (field[clickedRow][clickedCol].bombCount) {
      case 1:
        ctx.fillStyle = "#3A5FE5";
        break;
      case 2:
        ctx.fillStyle = "#073E1E";
        break;
      case 3:
        ctx.fillStyle = "#f00";
        break;
      case 4:
        ctx.fillStyle = "#1E193C";
        break;
      case 5:
        ctx.fillStyle = "#964B00";
        break;
      case 6:
        ctx.fillStyle = "#0d98ba";
        break;
      case 7:
        ctx.fillStyle = "#000";
        break;
      case 8:
        ctx.fillStyle = "#fff";
        break;
      default:
        console.log('default')
        ctx.fillStyle = "#f00";
    }
    ctx.font = 'bold 20px serif';
    ctx.fillText(`${field[clickedRow][clickedCol].bombCount}`, clickedCol * this.CELL_SIZE + this.CELL_SIZE / 3, clickedRow * this.CELL_SIZE + 2 * this.CELL_SIZE / 3);
  }
}