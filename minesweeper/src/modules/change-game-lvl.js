import { draw } from './DOM-rendering'

export const SELECT = document.querySelector('.select');
const GAME_LVL = SELECT.value;

export const changeGameLvl = SELECT.addEventListener('input', event => {
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



