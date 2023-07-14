import { drawGarageCars } from '../view_garage';
import { createCar, deleteCar, updateCar } from '../../garage';
import { Icar } from '../../types/types';

export const drawAddedCar: () => void = () => {
  let name = '';
  let color = '';
  const CREATE_NAME = document.querySelector('.create-name');
  const CREATE_COLOR = document.querySelector('.create-color');
  if (CREATE_NAME instanceof HTMLInputElement) name = CREATE_NAME.value;
  if (CREATE_COLOR instanceof HTMLInputElement) color = CREATE_COLOR.value;
  if (name && color) {
    const newCar: () => Promise<Icar> = async () => {
      const car = await createCar({ name, color });
      return car;
    };
    newCar().then((carID) => drawGarageCars(name, color, carID.id ? carID.id : 0));
  }
};

export const updateCarView: () => void = () => {
  console.log('updateCar');
  let name = '';
  let color = '';
  let id = 0;
  const CAR = document.querySelector('.selected');
  const CREATE_NAME = document.querySelector('.update-name');
  const CREATE_COLOR = document.querySelector('.update-color');
  if (CREATE_NAME instanceof HTMLInputElement) name = CREATE_NAME.value;
  if (CREATE_COLOR instanceof HTMLInputElement) color = CREATE_COLOR.value;
  if (name && color && CAR instanceof HTMLDivElement) {
    let carNameSpan = CAR.closest('.car-container')?.querySelector('.car-name');
    if (carNameSpan instanceof HTMLSpanElement) carNameSpan.textContent = name;
    const svgEl = CAR.firstChild;
    if (svgEl instanceof SVGElement) svgEl.style.fill = color;
    id = Number(CAR.closest('.car-container')?.getAttribute('id'));
  }
  updateCar(id, {name: name, color: color});
};

function componentToHex(c: number): string {
  const hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

function rgbToHex(rgb: string): string {
  const arr = rgb.slice(4, -1).split(', ');
  const res = `#${arr.map((el) => componentToHex(Number(el))).join('')}`;
  console.log(res)
  return res;
}

export const selectCar: (param: Event) => void = (event) => {
  document.querySelectorAll('.selected').forEach((el) => el.classList.remove('selected'));
  if (event.target instanceof HTMLElement) {
    event.target.closest('.car-container')?.querySelector('.car')?.classList.add('selected');
    const SELECTED_CAR = document.querySelector('.selected');
    if (SELECTED_CAR) {
      const styles = window.getComputedStyle(SELECTED_CAR);
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

    document.querySelectorAll('.remove-car').forEach((car, ind) => {
      if (car === event.target) id = ind + 1;
    });

    if (container?.parentNode) {
      container.parentNode.removeChild(container);
    }
  }
  deleteCar(id);
}