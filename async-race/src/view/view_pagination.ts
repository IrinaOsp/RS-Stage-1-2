import { getCars, getWinners } from '../api';
import { drawGarageCars } from './view_garage';
import { drawMain } from './view_main';
import { CARS_PER_PAGE, WINNERS_PER_PAGE } from '../data/app_data';
import { drawWinnersLines, setHeadings } from './view_winners';

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

function getSortOrder(currentPage: number): void {
  let sort: 'time' | 'wins' | 'id' | undefined;
  let order: string;
  const WINS_HEADING = document.querySelector('.th_wins');
  const TIME_HEADING = document.querySelector('.th_time');
  if (WINS_HEADING && WINS_HEADING.classList.length > 2) {
    const LAST_ELEM_IN_ARR = WINS_HEADING.classList[WINS_HEADING.classList.length - 1];
    if (LAST_ELEM_IN_ARR === 'ASC' || LAST_ELEM_IN_ARR === 'DESC') {
      order = WINS_HEADING.classList[WINS_HEADING.classList.length - 1];
      sort = 'wins';
      if (order === 'ASC' || order === 'DESC') {
        drawWinnersLines(currentPage, sort, order);
      }
    }
  } else if (TIME_HEADING && TIME_HEADING.classList.length > 2) {
    const LAST_ELEM_IN_ARR = TIME_HEADING.classList[TIME_HEADING.classList.length - 1];
    if (LAST_ELEM_IN_ARR === 'ASC' || LAST_ELEM_IN_ARR === 'DESC') {
      order = TIME_HEADING.classList[TIME_HEADING.classList.length - 1];
      sort = 'time';
      if (order === 'ASC' || order === 'DESC') drawWinnersLines(currentPage, sort, order);
    }
  }
}

export const paginationWinners: (t: EventTarget | null, p1: number) => void = (target, page) => {
  let currentPage = page;
  let currentPages: number;
  getWinners([{ key: '_limit', value: WINNERS_PER_PAGE }]).then((res) => {
    currentPages = Math.ceil(res.winnersNumber / WINNERS_PER_PAGE);
    const PAGES_STR = localStorage.getItem('winners pages');
    if (PAGES_STR) {
      currentPage = JSON.parse(PAGES_STR).at(0);
    }
    const BTN = target;
    if (BTN instanceof HTMLButtonElement) {
      if (BTN.classList.contains('win-next')) {
        currentPage += 1;
        if (currentPage === currentPages) BTN.disabled = true;
        const PREV = BTN.previousElementSibling;
        if (PREV instanceof HTMLButtonElement) PREV.disabled = false;
      } else {
        currentPage -= 1;
        if (currentPage === 1) BTN.disabled = true;
        const NEXT = BTN.nextElementSibling;
        if (NEXT instanceof HTMLButtonElement) NEXT.disabled = false;
      }
      const TABLE_BODY = document.querySelector('.winners_tbody');
      while (TABLE_BODY instanceof HTMLElement && TABLE_BODY.firstChild) {
        TABLE_BODY.removeChild(TABLE_BODY.firstChild);
      }
      localStorage.setItem('winners pages', JSON.stringify([currentPage, currentPages]));
      getSortOrder(currentPage);
      setHeadings(currentPage, currentPages);
    }
  });
};
