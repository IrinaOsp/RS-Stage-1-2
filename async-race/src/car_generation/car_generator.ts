import CAR_MODELS from '../data/car_names_data';
import { getCars, createCar } from '../api';
import { CARS_PER_PAGE } from '../store';

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
  console.log('click');
  for (let i = 1; i <= 10; i += 1) {
    const NAME = generateName();
    const COLOR = getRandomHexColor();
    createCar({name: NAME, color: COLOR})
      .catch((e) => e.message);
  }
  getCars([{ key: '_limit', value: CARS_PER_PAGE }])
  .then((res) => {
    const carsNumber = res.carsNumber;
    const CARS_NUM = document.querySelector('.cars-count');
    if (CARS_NUM) CARS_NUM.textContent = `(${carsNumber})`;
    const PAGES_NUM = document.querySelector('.page-count');
    if (PAGES_NUM instanceof HTMLElement && PAGES_NUM.textContent) {
        const pages = Math.ceil(carsNumber / CARS_PER_PAGE);
        let text = PAGES_NUM.textContent;
        text = text.slice(0, text.indexOf('/') + 2).concat(`${pages}`);
        PAGES_NUM.textContent = text;
      }
  });
};
