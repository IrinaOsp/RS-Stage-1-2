import { startTimer } from "./timer";

// create basic layout
const CANVAS = document.createElement('canvas');

export function createLayout() {
  const WRAPPER = document.createElement('div');
  WRAPPER.className = 'wrapper';

  const GAME_INFO = document.createElement('div');
  GAME_INFO.className = 'game-info';

  const SELECT_LEVEL = document.createElement('select');
  SELECT_LEVEL.className = 'select';
  SELECT_LEVEL.setAttribute('name', 'select level');

  CANVAS.className = 'canvas';

  document.body.appendChild(WRAPPER);
  WRAPPER.appendChild(GAME_INFO);
  GAME_INFO.appendChild(SELECT_LEVEL);

  const gameLevelsArr = ['easy', 'medium', 'hard']
  gameLevelsArr.forEach(lvl => {
    const LEVEL = document.createElement('option');
    LEVEL.className = 'level-option';
    LEVEL.setAttribute('value', lvl);
    LEVEL.innerText = lvl;
    SELECT_LEVEL.appendChild(LEVEL);
  })

  const SELECT_MINES = document.createElement('select');
  SELECT_MINES.className = 'mines-input';
  SELECT_MINES.setAttribute('name', 'custom mines');
  GAME_INFO.appendChild(SELECT_MINES);

  for (let i = 10; i < 100; i++) {
    const MINES_NUM = document.createElement('option');
    MINES_NUM.className = 'mines-num';
    MINES_NUM.setAttribute('value', i);
    MINES_NUM.innerText = i;
    SELECT_MINES.appendChild(MINES_NUM);
  }

  const NEW_GAME_BTN = document.createElement('button');
  NEW_GAME_BTN.className = 'button new-game-button';
  NEW_GAME_BTN.innerText = 'NEW GAME';
  GAME_INFO.appendChild(NEW_GAME_BTN);

  const clicksField = document.createElement('p');
  clicksField.className = 'clicks-field';
  clicksField.innerHTML = 'number of clicks ';
  GAME_INFO.appendChild(clicksField);

  const numOfClicks = document.createElement('span');
  numOfClicks.className = 'clicks-num';
  numOfClicks.innerHTML = '0';
  clicksField.appendChild(numOfClicks);

  const TIMER = document.createElement('div');
  TIMER.className = 'timer';
  GAME_INFO.appendChild(TIMER);
  const timerArr = ['00', ':', '00'];
  if (localStorage.getItem('Time')) {
    let currentTime = JSON.parse(localStorage.getItem('Time'));
    let ind = 0;
    for (let el of currentTime) {
      timerArr[ind] = el;
      ind++;
    }
    startTimer(timerArr[0], timerArr[2]);
  }
  timerArr.forEach((el, index) => {
    const El = document.createElement('span');
    El.className = 'time';
    if (index === 0) {
      El.classList.add('minutes');
    } else if (index === 2) {
      El.classList.add('seconds');
    }
    El.innerHTML = el;
    TIMER.appendChild(El);
  })

  const resultsBtn = document.createElement('button');
  resultsBtn.className = 'button results-button';
  resultsBtn.innerHTML = 'results';
  GAME_INFO.appendChild(resultsBtn);

  WRAPPER.appendChild(CANVAS);
};

export { CANVAS };