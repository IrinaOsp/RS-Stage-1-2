import { HTMLTags } from '../types/types';
import { createElem } from './view_elements';
import { paginationGarage } from './view_pagination';
import { getCars } from '../api';
import { CARS_PER_PAGE } from '../store';

export const MAIN = document.createElement('main');
export const WRAPPER = document.createElement('div');

export const drawMain: (cars: number, page: number, pages: number) => void = (cars, page, pages) => {
  MAIN.classList.add('main');
  document.body.append(MAIN);

  WRAPPER.className = 'wrapper';
  MAIN.append(WRAPPER);

  const GARAGE_HEADING = createElem(WRAPPER, HTMLTags.h2, 'garage-heading', `Garage (${cars})`);
  const PAGE_HEADING = createElem(WRAPPER, HTMLTags.h3, 'page-heading', 'Page #');
  // const CARS_COUNT = createElem(GARAGE_HEADING, HTMLTags.span, 'cars-count', `(${cars})`);
  const PAGE_COUNT = createElem(PAGE_HEADING, HTMLTags.span, 'page-count', `${page} / ${pages}`);
  console.log(GARAGE_HEADING, PAGE_COUNT);
  const PAGINATION = createElem(MAIN, HTMLTags.div, 'pagination-block');
  const PREV = createElem(PAGINATION, HTMLTags.button, 'button-garage prev', 'prev');
  const NEXT = createElem(PAGINATION, HTMLTags.button, 'button-garage next', 'next');
  if (PREV instanceof HTMLButtonElement && NEXT instanceof HTMLButtonElement) {
    if (page === pages) NEXT.disabled = true;
    if (page === 1) PREV.disabled = true;
    PREV.addEventListener('click', (event) => paginationGarage(event.target, page, pages));
    NEXT.addEventListener('click', (event) => paginationGarage(event.target, page, pages));
  }
};

export const updateHeadings = () => {
  getCars([{ key: '_limit', value: CARS_PER_PAGE }])
  .then((res) => {
    const carsNumber = res.carsNumber;
    const CARS_NUM = document.querySelector('.garage-heading');
    if (CARS_NUM) CARS_NUM.textContent = `Garage (${carsNumber})`;
    const PAGES_NUM = document.querySelector('.page-count');
    if (PAGES_NUM instanceof HTMLElement && PAGES_NUM.textContent) {
      const GARAGE_TOTAL_PAGES = Math.ceil(carsNumber / CARS_PER_PAGE);
      let text = PAGES_NUM.textContent;
      text = text.slice(0, text.indexOf('/') + 2).concat(`${GARAGE_TOTAL_PAGES}`);
      PAGES_NUM.textContent = text;
    }
  });
}