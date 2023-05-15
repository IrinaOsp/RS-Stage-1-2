import { POPUP_BACK, POPUP, RESTART_GAME_BTN, GAME_OVER_TEXT } from "./game-over";

export function winGamePopup() {
  POPUP_BACK.className = 'popup-background';
  document.body.appendChild(POPUP_BACK);

  POPUP.className = 'popup popup-active';
  POPUP_BACK.appendChild(POPUP);

  GAME_OVER_TEXT.className = 'popup-text popup-active';
  GAME_OVER_TEXT.innerHTML = 'Hooray! You found all mines in ## seconds and N moves!';
  POPUP.appendChild(GAME_OVER_TEXT);

  RESTART_GAME_BTN.className = 'restart-btn';
  RESTART_GAME_BTN.innerHTML = 'restart game';
  POPUP.appendChild(RESTART_GAME_BTN);
}