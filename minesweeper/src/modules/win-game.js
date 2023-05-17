import { POPUP_BACK, POPUP, RESTART_GAME_BTN, GAME_OVER_TEXT } from "./game-over";
import { clicksNum } from "../index";
import { minutes, seconds } from "./timer";

let gameCount = 1;

export function winGamePopup() {
  POPUP_BACK.className = 'popup-background';
  document.body.appendChild(POPUP_BACK);

  POPUP.className = 'popup popup-active';
  POPUP_BACK.appendChild(POPUP);

  GAME_OVER_TEXT.className = 'popup-text popup-active';
  GAME_OVER_TEXT.innerHTML = `Hooray! You found all mines in ${minutes>0 ? minutes+' minutes' : ''} ${seconds>0 ? seconds+' seconds' : ''}  and ${clicksNum} moves!`;
  POPUP.appendChild(GAME_OVER_TEXT);

  RESTART_GAME_BTN.className = 'restart-btn';
  RESTART_GAME_BTN.innerHTML = 'restart game';
  POPUP.appendChild(RESTART_GAME_BTN);

  localStorage.setItem(`game time ${gameCount} minutes`, minutes);
  localStorage.setItem(`game time ${gameCount} seconds`, seconds);
  localStorage.setItem(`game time ${gameCount} clicks`, clicksNum);
  if (gameCount >= 10) {
    gameCount = 1;
  } else {
    gameCount++;
  }
}
