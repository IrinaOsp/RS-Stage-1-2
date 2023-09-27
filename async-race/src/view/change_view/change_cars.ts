import { drawGarageCars } from '../view_garage';
import { getCars, createCar, deleteCar, updateCar, deleteWinner } from '../../api';
import { CARS_PER_PAGE } from '../../data/app_data';
import { updateHeadings } from '../view_main';
import { popupMessage } from '../../util/popup_message';

export const drawAddedCar: () => void = () => {
  let name = '';
  let color = '';
  const CREATE_NAME = document.querySelector('.create-name');
  const CREATE_COLOR = document.querySelector('.create-color');
  if (CREATE_NAME instanceof HTMLInputElement) name = CREATE_NAME.value;
  if (CREATE_COLOR instanceof HTMLInputElement) color = CREATE_COLOR.value;
  if (name && color) {
    createCar({ name, color }).then((carID) => {
      if (document.querySelectorAll('.car-container').length < CARS_PER_PAGE)
        drawGarageCars(carID.name, carID.color, carID.id ? carID.id : 0);
      updateHeadings();
    });
  }
};

export const updateCarView: () => void = () => {
  let name = '';
  let color = '';
  let id = 0;
  const CAR = document.querySelector('.selected');
  const CREATE_NAME = document.querySelector('.update-name');
  const CREATE_COLOR = document.querySelector('.update-color');
  if (CREATE_NAME instanceof HTMLInputElement) name = CREATE_NAME.value;
  if (CREATE_COLOR instanceof HTMLInputElement) color = CREATE_COLOR.value;
  if (name && color && CAR instanceof HTMLDivElement) {
    const carNameSpan = CAR.closest('.car-container')?.querySelector('.car-name');
    if (carNameSpan instanceof HTMLSpanElement) carNameSpan.textContent = name;
    const svgEl = CAR.firstChild;
    if (svgEl instanceof SVGElement) svgEl.style.fill = color;
    id = Number(CAR.closest('.car-container')?.getAttribute('id')?.slice(1));
  }
  updateCar(id, { name, color });
};

function componentToHex(c: number): string {
  const hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

function rgbToHex(rgb: string): string {
  const arr = rgb.slice(4, -1).split(', ');
  const res = `#${arr.map((el) => componentToHex(Number(el))).join('')}`;
  return res;
}

export const selectCar: (param: Event) => void = (event) => {
  document.querySelectorAll('.selected').forEach((el) => el.classList.remove('selected'));
  if (event.target instanceof HTMLElement) {
    event.target.closest('.car-container')?.querySelector('.car')?.classList.add('selected');
    const SELECTED_CAR = document.querySelector('.selected');
    if (SELECTED_CAR) {
      const UPDATE_NAME = document.querySelector('.update-name');
      const UPDATE_COLOR = document.querySelector('.update-color');
      if (UPDATE_NAME instanceof HTMLInputElement && UPDATE_COLOR instanceof HTMLInputElement) {
        UPDATE_NAME.value = event.target.closest('.car-container')?.querySelector('.car-name')?.textContent || '';
        const color = event.target.closest('.car-container')?.querySelector('svg')?.style.fill;
        if (color) UPDATE_COLOR.value = rgbToHex(color);
      }
    }
  }
};

export const removeCar: (param: Event) => void = (event) => {
  let id = 0;
  if (event.target instanceof HTMLElement) {
    const container = event.target.closest('.car-container');
    if (container?.hasAttribute('id')) id = Number(container.getAttribute('id')?.slice(1));
    deleteCar(id).then((response) => {
      if (response === 'Not Found') {
        popupMessage('car is not found');
      } else {
        if (container?.parentNode) container.parentNode.removeChild(container);
        updateHeadings();
        if (document.querySelectorAll('.car-container').length < CARS_PER_PAGE) {
          const page = Number(document.querySelector('.page-count')?.textContent?.slice(0, 1));
          getCars([
            { key: '_page', value: page + 1 },
            { key: '_limit', value: CARS_PER_PAGE },
          ]).then((res) => {
            if (res.cars.length > 0) {
              drawGarageCars(res.cars[0].name, res.cars[0].color, res.cars[0].id ? res.cars[0].id : 0);
            }
          });
        }
      }
    });
    deleteWinner(id);
  }
};
