import { POPUP_BACK, POPUP, RESTART_GAME_BTN, GAME_OVER_TEXT } from "./game-over";
import { clicksNum } from "../index";
import audioWin from "../assets/sounds/Stranger_Things.mp3"
// import { minutes, seconds } from "./timer";

let gameCount = 1;
const winnedGames = [];

export const musicWin = new Audio(audioWin);

export function winGamePopup() {
  POPUP_BACK.className = 'popup-background';
  document.body.appendChild(POPUP_BACK);

  POPUP.className = 'popup popup-active';
  POPUP_BACK.appendChild(POPUP);
  let minutes = document.querySelector('.minutes').textContent;
  let seconds = document.querySelector('.seconds').textContent;
  GAME_OVER_TEXT.className = 'popup-text popup-active';
  GAME_OVER_TEXT.innerHTML = `Hooray! You found all mines in ${minutes > 0 ? minutes + ' minutes' : ''} ${seconds > 0 ? seconds + ' seconds' : ''}  and ${clicksNum} moves!`;
  POPUP.appendChild(GAME_OVER_TEXT);

  RESTART_GAME_BTN.className = 'restart-btn';
  RESTART_GAME_BTN.innerHTML = 'restart game';
  POPUP.appendChild(RESTART_GAME_BTN);
  musicWin.play();

  winnedGames.push(gameCount);
  winnedGames.push(minutes);
  winnedGames.push(seconds);
  winnedGames.push(clicksNum);

  let winnedGamesString = JSON.stringify(winnedGames);
  localStorage.setItem(`game ${gameCount}`, winnedGamesString);

  if (gameCount >= 10) {
    gameCount = 1;
  } else {
    gameCount++;
  }
  winnedGames.splice(0, winnedGames.length);
}
