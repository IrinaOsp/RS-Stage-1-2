import { draw } from './DOM-rendering';

const POPUP_BACK = document.createElement('div');
const POPUP = document.createElement('div');
const RESTART_GAME_BTN = document.createElement('button');
const GAME_OVER_TEXT = document.createElement('p');

export const gameOverPopUp = () => {
  POPUP_BACK.className = 'popup-background';
  document.body.appendChild(POPUP_BACK);

  POPUP.className = 'popup popup-active';
  POPUP_BACK.appendChild(POPUP);

  GAME_OVER_TEXT.className = 'popup-text popup-active';
  GAME_OVER_TEXT.innerHTML = 'Game over. Try again';
  POPUP.appendChild(GAME_OVER_TEXT);

  RESTART_GAME_BTN.className = 'restart-btn';
  RESTART_GAME_BTN.innerHTML = 'restart game';
  POPUP.appendChild(RESTART_GAME_BTN);
}

RESTART_GAME_BTN.addEventListener('click', event => {
  draw();
  POPUP.remove();
  GAME_OVER_TEXT.remove();
  POPUP_BACK.remove();
})