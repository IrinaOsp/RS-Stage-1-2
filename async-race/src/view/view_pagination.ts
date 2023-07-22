import { getCars } from '../api';
import { drawGarageCars } from './view_garage';
import { drawMain } from './view_main';

export const paginationGarage: (t: EventTarget | null, p1: number, p2: number) => void = (target, page, pages) => {
  let currentPage = page;
  const BTN = target;
  if (BTN instanceof HTMLButtonElement) {
    getCars([
      { key: '_page', value: BTN.classList.contains('next') ? (currentPage += 1) : (currentPage -= 1) },
      { key: '_limit', value: 7 },
    ]).then((res) => {
      const WRAPPER = document.querySelector('.wrapper');
      if (WRAPPER) {
        WRAPPER.remove();
        while (WRAPPER.firstChild) {
          WRAPPER.removeChild(WRAPPER.firstChild);
        }
      }
      document.querySelector('.pagination-block')?.remove();
      drawMain(res.carsNumber, currentPage, pages);
      localStorage.setItem('garage pages', JSON.stringify([currentPage, pages]));
      res.cars.forEach((car) => drawGarageCars(car.name, car.color, car.id ? car.id : 0));
    });
  }
};
