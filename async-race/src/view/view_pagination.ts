import { getCars } from '../api';
import { drawGarageCars } from './view_garage';
import { drawMain } from './view_main';

export const paginationGarage: (t: EventTarget | null, p1: number, p2: number) => void = (target, page, pages) => {
  let currentPage = page;
  const BTN = target;
  if (BTN instanceof HTMLButtonElement) {
    console.log('click');
    BTN.classList.contains('next') ? currentPage += 1 : currentPage -= 1;
    getCars([
      { key: '_page', value: currentPage },
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
      res.cars.forEach((car) => drawGarageCars(car.name, car.color, car.id ? car.id : 0));
    });
  }
};
