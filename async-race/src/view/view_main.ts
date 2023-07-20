import { HTMLTags } from '../types/types';
import { createElem } from './view_elements';
import { paginationGarage } from './view_pagination';

export const MAIN = document.createElement('main');
export const WRAPPER = document.createElement('div');

export const drawMain: (cars: number, page: number, pages: number) => void = (cars, page, pages) => {
  MAIN.classList.add('main');
  document.body.append(MAIN);

  WRAPPER.className = 'wrapper';
  MAIN.append(WRAPPER);

  const GARAGE_HEADING = createElem(WRAPPER, HTMLTags.h2, 'garage-heading', 'Garage ');
  const PAGE_HEADING = createElem(WRAPPER, HTMLTags.h3, 'page-heading', 'Page #');
  const CARS_COUNT = createElem(GARAGE_HEADING, HTMLTags.span, 'cars-count', `(${cars})`);
  const PAGE_COUNT = createElem(PAGE_HEADING, HTMLTags.span, 'page-count', `${page} / ${pages}`);
  const PAGINATION = createElem(MAIN, HTMLTags.div, 'pagination-block');
  const PREV = createElem(PAGINATION, HTMLTags.button, 'button-garage prev', 'prev');
  const NEXT = createElem(PAGINATION, HTMLTags.button, 'button-garage next', 'next');
  if (PREV instanceof HTMLButtonElement && NEXT instanceof HTMLButtonElement) {
    if (page === pages) NEXT.disabled = true;
    if (page === 1) PREV.disabled = true;
    PREV.addEventListener('click', (event) => paginationGarage(event.target, page, pages));
    NEXT.addEventListener('click', (event) => paginationGarage(event.target, page, pages));
  }
  console.log(CARS_COUNT, PAGE_COUNT);
};
