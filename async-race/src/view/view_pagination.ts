import { getCars } from '../api';
import { drawGarageCars } from './view_garage';
import { drawMain } from './view_main';
import { CARS_PER_PAGE } from '../data/app_data';
import { drawWinners } from './view_winners';

export const paginationGarage: (t: EventTarget | null, p1: number, p2: number) => void = (target, page, pages) => {
  let currentPage = page;
  const BTN = target;
  if (BTN instanceof HTMLButtonElement) {
    getCars([
      { key: '_page', value: BTN.classList.contains('next') ? (currentPage += 1) : (currentPage -= 1) },
      { key: '_limit', value: CARS_PER_PAGE },
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

export const paginationWinners: (t: EventTarget | null, p1: number, p2: number) => void = (target, page, pages) => {
  let currentPage = page;
  const BTN = target;
  if (BTN instanceof HTMLButtonElement) {
    if (BTN.classList.contains('win-next')) {
      currentPage += 1;
      if (currentPage === pages) {
        BTN.disabled = true;
      }
      const PREV = BTN.previousElementSibling;
      if (PREV instanceof HTMLButtonElement) {
        PREV.disabled = false;
      }
    } else {
      currentPage -= 1;
      if (currentPage === 1) {
        BTN.disabled = true;
      }
      const NEXT = BTN.nextElementSibling;
      if (NEXT instanceof HTMLButtonElement) {
        NEXT.disabled = false;
      }
    }
    const TABLE_BODY = document.querySelector('.winners_tbody');
    if (TABLE_BODY) {
      TABLE_BODY.remove();
      while (TABLE_BODY.firstChild) {
        TABLE_BODY.removeChild(TABLE_BODY.firstChild);
      }
    }
    drawWinners(currentPage);
    localStorage.setItem('winners pages', JSON.stringify([currentPage, pages]));
  }
};
