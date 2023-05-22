export const POPUP_BACK = document.createElement('div');
export const POPUP = document.createElement('div');
export const RESTART_GAME_BTN = document.createElement('button');
export const GAME_OVER_TEXT = document.createElement('p');

export function gameOverPopUp() {
  POPUP_BACK.classList.add('popup-background');
  document.body.appendChild(POPUP_BACK);
  POPUP_BACK.style.opacity = 1;

  setTimeout(() => {
    POPUP.className = 'popup popup-active';
    POPUP_BACK.appendChild(POPUP);

    GAME_OVER_TEXT.className = 'popup-text popup-active';
    GAME_OVER_TEXT.innerHTML = 'Game over. Try again';
    POPUP.appendChild(GAME_OVER_TEXT);

    RESTART_GAME_BTN.className = 'restart-btn button';
    RESTART_GAME_BTN.innerHTML = 'restart game';
    POPUP.appendChild(RESTART_GAME_BTN);
  }, 1000);
}