import { MAIN, WRAPPER } from './view_main';
import { createElem } from './view_elements';
import { HTMLTags } from '../types/types';
import { drawAddedCar, updateCar } from './change_view/change cars';

export const drawGarageInputs: () => void = () => {
  const CONTROL_BLOCK = createElem(MAIN, HTMLTags.div, 'control-block');
  const CREATE_NAME = createElem(CONTROL_BLOCK, HTMLTags.input, 'input-name create-name');

  const CREATE_COLOR = createElem(CONTROL_BLOCK, HTMLTags.input, 'input-color create-color');
  CREATE_COLOR.setAttribute('type', 'color');
  CREATE_COLOR.setAttribute('value', '#ffffff');

  const BUTTON_CREATE = createElem(CONTROL_BLOCK, HTMLTags.button, 'button-garage', 'create');
  BUTTON_CREATE.addEventListener('click', () => drawAddedCar());

  const UPDATE_NAME = createElem(CONTROL_BLOCK, HTMLTags.input, 'input-name update-name');
  UPDATE_NAME.setAttribute('type', 'text');

  const UPDATE_COLOR = createElem(CONTROL_BLOCK, HTMLTags.input, 'input-color update-color');
  UPDATE_COLOR.setAttribute('type', 'color');
  UPDATE_COLOR.setAttribute('value', '#bcbcbc');

  const BUTTON_UPDATE = createElem(CONTROL_BLOCK, HTMLTags.button, 'button-garage', 'update');
  BUTTON_UPDATE.addEventListener('click', () => updateCar());
  const BUTTON_RACE = createElem(CONTROL_BLOCK, HTMLTags.button, 'button-garage button-yellow', 'race');
  BUTTON_RACE.addEventListener('click', () => console.log('race'));
  const BUTTON_RESET = createElem(CONTROL_BLOCK, HTMLTags.button, 'button-garage button-yellow', 'reset');
  BUTTON_RESET.addEventListener('click', () => console.log('reset'));
  const BUTTON_GENERATE = createElem(CONTROL_BLOCK, HTMLTags.button, 'button-garage', 'generate cars');
  BUTTON_GENERATE.addEventListener('click', () => console.log('generate cars'));
};

export const drawGarageCars = (name: string, color: string) => {
  console.log('drawGarageCars');
  const CAR_CONTAINER = createElem(WRAPPER, HTMLTags.div, 'car-container');
  const CONTAINER_HEAD = createElem(CAR_CONTAINER, HTMLTags.div, 'car_subcontainer');

  const BUTTON_SELECT = createElem(CONTAINER_HEAD, HTMLTags.button, 'button-garage select-car', 'select');
  BUTTON_SELECT.addEventListener('click', () => {
    document.querySelectorAll('.selected').forEach((el) => el.classList.remove('.selected'));
    BUTTON_SELECT.closest('.car-container')?.querySelector('.car')?.classList.add('selected');
  });

  const BUTTON_REMOVE = createElem(CONTAINER_HEAD, HTMLTags.button, 'button-garage remove-car', 'remove');
  const CAR_NAME = createElem(CONTAINER_HEAD, HTMLTags.span, 'car-name', name);

  const BUTTON_START = createElem(CAR_CONTAINER, HTMLTags.button, 'button-move', 'a');
  const BUTTON_STOP = createElem(CAR_CONTAINER, HTMLTags.button, 'button-move', 'b');
  const CAR = document.createElement('div');
  CAR.className = 'car';
  // const img = document.createElement('img');
  // img.src = imageSrc;
  // img.alt = 'car';
  // CAR.append(img);
  // CAR.innerHTML = '<img src="../assets/car-hatchback-svgrepo-com.svg" alt="car">';
  CAR.style.backgroundColor = color;
  CAR_CONTAINER.append(BUTTON_START, BUTTON_STOP, CAR);
};
