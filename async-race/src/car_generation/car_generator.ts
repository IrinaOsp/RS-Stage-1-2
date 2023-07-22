import { CAR_MODELS } from '../data/app_data';
import { createCar } from '../api';
import { updateHeadings } from '../view/view_main';

function getRandomInt(n: number): number {
  return Math.floor(Math.random() * n);
}
function getRandomHexColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateName(): string {
  const n = Object.keys(CAR_MODELS).length - 1;
  const randomBrand = Object.keys(CAR_MODELS)[getRandomInt(n)];
  const modelsArr = CAR_MODELS[randomBrand];
  const randomModel = CAR_MODELS[randomBrand][getRandomInt(modelsArr.length - 1)];
  return `${randomBrand} ${randomModel}`;
}

export const generateCars: () => void = () => {
  for (let i = 1; i <= 10; i += 1) {
    const NAME = generateName();
    const COLOR = getRandomHexColor();
    createCar({ name: NAME, color: COLOR }).catch((e) => e.message);
  }
  updateHeadings();
};
