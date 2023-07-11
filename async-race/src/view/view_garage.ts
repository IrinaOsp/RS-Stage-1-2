import { MAIN, WRAPPER } from './view_main';
import createButton from './view_buttons';

const drawGarageInputs: () => void = () => {
  const CONTROL_BLOCK = document.createElement('div');
  CONTROL_BLOCK.classList.add('control-block');
  MAIN.prepend(CONTROL_BLOCK);

  const CREATE_NAME = document.createElement('input');
  CREATE_NAME.setAttribute('type', 'text');
  CREATE_NAME.classList.add('input-name');
  CONTROL_BLOCK.append(CREATE_NAME);

  const CREATE_COLOR = document.createElement('input');
  CREATE_COLOR.setAttribute('type', 'color');
  CREATE_COLOR.setAttribute('value', '#ffffff');
  CREATE_COLOR.classList.add('input-color');
  CONTROL_BLOCK.append(CREATE_COLOR);

  const BUTTON_CREATE = createButton(CONTROL_BLOCK, 'button-garage', 'create');
  BUTTON_CREATE.addEventListener('click', () => console.log('create'));

  const UPDATE_NAME = document.createElement('input');
  UPDATE_NAME.setAttribute('type', 'text');
  UPDATE_NAME.classList.add('input-name');
  CONTROL_BLOCK.append(UPDATE_NAME);

  const UPDATE_COLOR = document.createElement('input');
  UPDATE_COLOR.setAttribute('type', 'color');
  UPDATE_COLOR.setAttribute('value', '#bcbcbc');
  UPDATE_COLOR.classList.add('input-color');
  CONTROL_BLOCK.append(UPDATE_COLOR);

  const BUTTON_UPDATE = createButton(CONTROL_BLOCK, 'button-garage', 'update');
  BUTTON_UPDATE.addEventListener('click', () => console.log('update'));
  const BUTTON_RACE = createButton(CONTROL_BLOCK, 'button-garage button-yellow', 'race');
  BUTTON_RACE.addEventListener('click', () => console.log('race'));
  const BUTTON_RESET = createButton(CONTROL_BLOCK, 'button-garage button-yellow', 'reset');
  BUTTON_RESET.addEventListener('click', () => console.log('reset'));
  const BUTTON_GENERATE = createButton(CONTROL_BLOCK, 'button-garage', 'generate cars');
  BUTTON_GENERATE.addEventListener('click', () => console.log('generate cars'));
};

const drawGarageCars = () => {
  const CAR_CONTAINER = document.createElement('div');
  CAR_CONTAINER.className = 'car-container';
  WRAPPER.appendChild(CAR_CONTAINER);
  const BUTTON_SELECT = createButton(CAR_CONTAINER, 'button-garage', 'select');
  const BUTTON_REMOVE = createButton(CAR_CONTAINER, 'button-garage', 'remove');
  const CAR_NAME = document.createElement('span');
  CAR_NAME.className = 'car-name';
  CAR_NAME.textContent = 'Porshe';
  const BUTTON_START = createButton(CAR_CONTAINER, 'button-move', 'a');
  const BUTTON_STOP = createButton(CAR_CONTAINER, 'button-move', 'b');
  const CAR = document.createElement('div');
  CAR.className = 'car';
  CAR.setAttribute('backdround-image', '');
  CAR_CONTAINER.append(BUTTON_SELECT, BUTTON_REMOVE, CAR_NAME, BUTTON_START, BUTTON_STOP, CAR);
};

const drawGarage = () => {
  drawGarageInputs();
  drawGarageCars();
}

export default drawGarage;
