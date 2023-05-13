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

  const NEW_GAME_BTN = document.createElement('button');
  NEW_GAME_BTN.className = 'button';
  NEW_GAME_BTN.innerText = 'NEW GAME';
  GAME_INFO.appendChild(NEW_GAME_BTN);

  const TIMER = document.createElement('div')
  GAME_INFO.appendChild(TIMER);

  const timerArr = ['00', ':', '00'];
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

  WRAPPER.appendChild(CANVAS);
};

export { CANVAS };