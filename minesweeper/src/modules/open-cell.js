import { field, CANVAS_PARAMS } from "../index";


export function openCell(clickedCol, clickedRow) {
  console.log('start openCell');
  const ctx = document.querySelector('canvas').getContext('2d');

  const CLICKED_CELL = field[clickedRow][clickedCol];
  if (CLICKED_CELL.hasBomb) {
    return;
  }

  paintCell.call(CANVAS_PARAMS, clickedCol, clickedRow);

  function checkIfOpened (Col, Row) {
    if (!field[Row][Col].isOpen) {
      paintCell.call(CANVAS_PARAMS, Col, Row);
      openCell.call(CANVAS_PARAMS, Col, Row);
    }
  }

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
        checkIfOpened(clickedCol, clickedRow);
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


  if (field[clickedRow][clickedCol].bombCount > 0) {
    ctx.fillStyle = "#f00";
    ctx.fillText(`${field[clickedRow][clickedCol].bombCount}`, clickedCol * this.CELL_SIZE + this.CELL_SIZE / 3, clickedRow * this.CELL_SIZE + 2 * this.CELL_SIZE / 3);
  }

}

function paintCell(clickedCol, clickedRow) {
  const ctx = document.querySelector('canvas').getContext('2d');
  field[clickedRow][clickedCol].isOpen = true;

  if ((clickedCol + clickedRow) % 2 === 0) {
    ctx.fillStyle = '#FFE5CC';
  } else {
    ctx.fillStyle = '#FFCC99';
  }

  ctx.fillRect(clickedCol * this.CELL_SIZE, clickedRow * this.CELL_SIZE, this.CELL_SIZE, this.CELL_SIZE);
  if (field[clickedRow][clickedCol].bombCount > 0) {
    ctx.fillStyle = "#f00";
    ctx.fillText(`${field[clickedRow][clickedCol].bombCount}`, clickedCol * this.CELL_SIZE + this.CELL_SIZE / 3, clickedRow * this.CELL_SIZE + 2 * this.CELL_SIZE / 3);
  }

}