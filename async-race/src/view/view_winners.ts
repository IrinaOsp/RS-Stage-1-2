import { HTMLTags } from '../types/types';
import { createElem } from './view_elements';
import { WRAPPER } from './view_main';

let CONTROL = document.querySelector('.control-block');
let CARS = document.querySelectorAll('.car-container');
let TABLE: HTMLElement;

export const drawWinners: () => void = () => {
  console.log('drawWinners');
  if (TABLE) TABLE.remove();
  CONTROL = document.querySelector('.control-block');
  console.log(CONTROL);
  if (CONTROL instanceof HTMLElement) CONTROL.style.display = 'none';
  CARS = document.querySelectorAll('.car-container');
  CARS.forEach((car) => {
    if (car instanceof HTMLElement) car.style.display = 'none';
  })
  TABLE = createElem(WRAPPER, HTMLTags.table, 'winners_table');
  const THEAD = createElem(TABLE, HTMLTags.thead, 'winners_thead');
  const TR = createElem(THEAD, HTMLTags.tr, '');
  const headingText = ['Number', 'Car', 'Name', 'Wins', 'Best time (seconds)'];
  headingText.forEach((colName) => {
    const TH = createElem(TR, HTMLTags.th, '', colName);
  })
}

export const hideWinners: () => void = () => {
  console.log('hideWinners');
  if (CONTROL instanceof HTMLElement) CONTROL.style.display = 'grid';
  CARS.forEach((car) => {
    if (car instanceof HTMLElement) car.style.display = 'flex';
  })
  if (TABLE) TABLE.remove();
}