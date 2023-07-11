import { MAIN } from './view_main';
import createButton from './view_buttons';

const drawGarageInputs: () => void = () => {
  const CONTROL_BLOCK = document.createElement('div');
  CONTROL_BLOCK.classList.add('control-block');
  MAIN.append(CONTROL_BLOCK);

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
  const GARAGE_HEADING = document.createElement('h2');
  GARAGE_HEADING.className = 'garage-heading';
  GARAGE_HEADING.textContent = 'Garage';
};

const drawGarage = () => {
  drawGarageInputs();
  drawGarageCars();
}

export default drawGarage;
