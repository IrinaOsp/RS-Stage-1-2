import { HTMLTags } from '../types/types';
import { createElem } from './view_elements';
import { WRAPPER, updateHeadings } from './view_main';
import { getWinners, getCar } from '../api';
import { WINNERS_PER_PAGE } from '../data/app_data';
import { paginationWinners } from './view_pagination';

let CONTROL = document.querySelector('.control-block');
let CARS = document.querySelectorAll('.car-container');
let TABLE: HTMLElement;
const currentWinnersPage = 1;
let PREV = document.querySelector('.prev');
let NEXT = document.querySelector('.next');
let WIN_PREV = document.querySelector('.win-prev');
let WIN_NEXT = document.querySelector('.win-next');

function hideGarage(): void {
  CONTROL = document.querySelector('.control-block');
  if (CONTROL instanceof HTMLElement) CONTROL.style.display = 'none';
  CARS = document.querySelectorAll('.car-container');
  CARS.forEach((car) => {
    const CAR = car;
    if (CAR instanceof HTMLElement) CAR.style.display = 'none';
  });
  PREV = document.querySelector('.prev');
  NEXT = document.querySelector('.next');
  if (PREV instanceof HTMLElement && NEXT instanceof HTMLElement) {
    PREV.style.display = 'none';
    NEXT.style.display = 'none';
  }
}

function setPaginationBtns(page: number, pages: number): void {
  WIN_PREV = document.querySelector('.win-prev');
  WIN_NEXT = document.querySelector('.win-next');
  if (WIN_PREV instanceof HTMLButtonElement && WIN_NEXT instanceof HTMLButtonElement) {
    WIN_PREV.style.display = 'inline-block';
    WIN_NEXT.style.display = 'inline-block';
    WIN_PREV.addEventListener('click', (event) => paginationWinners(event.target, page, pages));
    WIN_NEXT.addEventListener('click', (event) => paginationWinners(event.target, page, pages));
    if (page === 1 && pages === 1) {
      WIN_NEXT.disabled = true;
      WIN_PREV.disabled = true;
    } else if (page === 1) {
      WIN_PREV.disabled = true;
    } else if (page > 1 && page === pages) {
      WIN_NEXT.disabled = true;
    }
  }
}

const HEADING_TEXT = ['Number', 'Car', 'Name', 'Wins', 'Best time (seconds)'];

export const drawWinners: (p?: number) => void = (page = currentWinnersPage) => {
  if (TABLE) TABLE.remove();
  hideGarage();
  TABLE = createElem(WRAPPER, HTMLTags.table, 'winners_table');
  const THEAD = createElem(TABLE, HTMLTags.thead, 'winners_thead');
  const TR = createElem(THEAD, HTMLTags.tr, '');
  HEADING_TEXT.forEach((colName) => createElem(TR, HTMLTags.th, '', colName));
  const TBODY = createElem(TABLE, HTMLTags.tbody, 'winners_tbody');
  getWinners([
    { key: '_page', value: page },
    { key: '_limit', value: WINNERS_PER_PAGE },
    { key: '_sort', value: 'time' },
  ]).then((response) => {
    response.winners.forEach((winner, ind) => {
      const TR_BODY = createElem(TBODY, HTMLTags.tr, '');
      createElem(TR_BODY, HTMLTags.td, '', (ind + 1).toString());
      const TD_CAR = createElem(TR_BODY, HTMLTags.td, 'winners_car');
      TD_CAR.innerHTML =
        '<svg fill="#000000" width="45px" height="40px" viewBox="0 -39.69 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  style="enable-background:new 0 0 122.88 43.49" xml:space="preserve"> <style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style> <g> <path class="st0" d="M103.94,23.97c5.39,0,9.76,4.37,9.76,9.76c0,5.39-4.37,9.76-9.76,9.76c-5.39,0-9.76-4.37-9.76-9.76 C94.18,28.34,98.55,23.97,103.94,23.97L103.94,23.97z M23,29.07v3.51h3.51C26.09,30.86,24.73,29.49,23,29.07L23,29.07z M26.52,34.87H23v3.51C24.73,37.97,26.09,36.6,26.52,34.87L26.52,34.87z M20.71,38.39v-3.51H17.2 C17.62,36.6,18.99,37.96,20.71,38.39L20.71,38.39z M17.2,32.59h3.51v-3.51C18.99,29.49,17.62,30.86,17.2,32.59L17.2,32.59z M105.09,29.07v3.51h3.51C108.18,30.86,106.82,29.49,105.09,29.07L105.09,29.07z M108.6,34.87h-3.51v3.51 C106.82,37.97,108.18,36.6,108.6,34.87L108.6,34.87z M102.8,38.39v-3.51h-3.51C99.71,36.6,101.07,37.96,102.8,38.39L102.8,38.39z M99.28,32.59h3.51v-3.51C101.07,29.49,99.71,30.86,99.28,32.59L99.28,32.59z M49.29,12.79c-1.54-0.35-3.07-0.35-4.61-0.28 C56.73,6.18,61.46,2.07,75.57,2.9l-1.94,12.87L50.4,16.65c0.21-0.61,0.33-0.94,0.37-1.55C50.88,13.36,50.86,13.15,49.29,12.79 L49.29,12.79z M79.12,3.13L76.6,15.6l24.13-0.98c2.48-0.1,2.91-1.19,1.41-3.28c-0.68-0.95-1.44-1.89-2.31-2.82 C93.59,1.86,87.38,3.24,79.12,3.13L79.12,3.13z M0.46,27.28H1.2c0.46-2.04,1.37-3.88,2.71-5.53c2.94-3.66,4.28-3.2,8.65-3.99 l24.46-4.61c5.43-3.86,11.98-7.3,19.97-10.2C64.4,0.25,69.63-0.01,77.56,0c4.54,0.01,9.14,0.28,13.81,0.84 c2.37,0.15,4.69,0.47,6.97,0.93c2.73,0.55,5.41,1.31,8.04,2.21l9.8,5.66c2.89,1.67,3.51,3.62,3.88,6.81l1.38,11.78h1.43v6.51 c-0.2,2.19-1.06,2.52-2.88,2.52h-2.37c0.92-20.59-28.05-24.11-27.42,1.63H34.76c3.73-17.75-14.17-23.91-22.96-13.76 c-2.67,3.09-3.6,7.31-3.36,12.3H2.03c-0.51-0.24-0.91-0.57-1.21-0.98c-1.05-1.43-0.82-5.74-0.74-8.23 C0.09,27.55-0.12,27.28,0.46,27.28L0.46,27.28z M21.86,23.97c5.39,0,9.76,4.37,9.76,9.76c0,5.39-4.37,9.76-9.76,9.76 c-5.39,0-9.76-4.37-9.76-9.76C12.1,28.34,16.47,23.97,21.86,23.97L21.86,23.97z"/></g> </svg>';
      const svgEl = TD_CAR.firstChild;
      if (winner.id) {
        getCar(winner.id).then((res) => {
          if (svgEl instanceof SVGElement) svgEl.style.fill = res.color;
          createElem(TR_BODY, HTMLTags.td, '', res.name);
          createElem(TR_BODY, HTMLTags.td, '', winner.wins.toString());
          createElem(TR_BODY, HTMLTags.td, '', winner.time.toString());
        });
      }
    });
    const GARAGE_HEADING = document.querySelector('.garage-heading');
    if (GARAGE_HEADING) GARAGE_HEADING.textContent = `Winners (${response.winnersNumber})`;
    const PAGE_HEADING = document.querySelector('.page-count');
    const winnersPages = Math.ceil(response.winnersNumber / WINNERS_PER_PAGE);
    if (PAGE_HEADING) PAGE_HEADING.textContent = `${page} / ${winnersPages}`;
    setPaginationBtns(page, winnersPages);
  });
};

export const hideWinners: () => void = () => {
  if (CONTROL instanceof HTMLElement) CONTROL.style.display = 'grid';
  CARS.forEach((car) => {
    const CAR = car;
    if (CAR instanceof HTMLElement) CAR.style.display = 'flex';
  });
  if (TABLE) TABLE.remove();
  updateHeadings();
  if (PREV instanceof HTMLElement && NEXT instanceof HTMLElement) {
    PREV.style.display = 'inline-block';
    NEXT.style.display = 'inline-block';
  }
  if (WIN_PREV instanceof HTMLElement && WIN_NEXT instanceof HTMLElement) {
    WIN_PREV.style.display = 'none';
    WIN_NEXT.style.display = 'none';
  }
};
