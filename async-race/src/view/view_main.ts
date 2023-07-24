import { HTMLTags } from '../types/types';
import { createElem } from './view_elements';
import { paginationGarage } from './view_pagination';
import { getCars } from '../api';
import { CARS_PER_PAGE } from '../data/app_data';

export const MAIN = document.createElement('main');
export const WRAPPER = document.createElement('div');

export const drawMain: (cars: number, page: number, pages: number) => void = (cars, page, pages) => {
  MAIN.classList.add('main');
  document.body.append(MAIN);

  WRAPPER.className = 'wrapper';
  MAIN.append(WRAPPER);
  // const GARAGE_HEADING =
  createElem(WRAPPER, HTMLTags.h2, 'garage-heading', `Garage (${cars})`);
  const PAGE_HEADING = createElem(WRAPPER, HTMLTags.h3, 'page-heading', 'Page #');
  // const CARS_COUNT = createElem(GARAGE_HEADING, HTMLTags.span, 'cars-count', `(${cars})`);
  // const PAGE_COUNT =
  createElem(PAGE_HEADING, HTMLTags.span, 'page-count', `${page} / ${pages}`);
  const PAGINATION = createElem(MAIN, HTMLTags.div, 'pagination-block');
  const PREV = createElem(PAGINATION, HTMLTags.button, 'button-garage prev', 'prev');
  const NEXT = createElem(PAGINATION, HTMLTags.button, 'button-garage next', 'next');
  const WIN_PREV = createElem(PAGINATION, HTMLTags.button, 'button-garage win-prev', 'prev');
  const WIN_NEXT = createElem(PAGINATION, HTMLTags.button, 'button-garage win-next', 'next');
  WIN_PREV.style.display = 'none';
  WIN_NEXT.style.display = 'none';
  if (PREV instanceof HTMLButtonElement && NEXT instanceof HTMLButtonElement) {
    if (page === pages) NEXT.disabled = true;
    if (page === 1) PREV.disabled = true;
    PREV.addEventListener('click', (event) => paginationGarage(event.target, page, pages));
    NEXT.addEventListener('click', (event) => paginationGarage(event.target, page, pages));
  }
};

export const updateHeadings: () => void = () => {
  getCars([{ key: '_limit', value: CARS_PER_PAGE }]).then((res) => {
    const CARS_NUM = document.querySelector('.garage-heading');
    if (CARS_NUM) CARS_NUM.textContent = `Garage (${res.carsNumber})`;
    const PAGES_NUM = document.querySelector('.page-count');
    if (PAGES_NUM instanceof HTMLElement && PAGES_NUM.textContent) {
      const GARAGE_TOTAL_PAGES = Math.ceil(res.carsNumber / CARS_PER_PAGE);
      const PAGES_INFO = localStorage.getItem('garage pages');
      if (PAGES_INFO) {
        const PAGES_ARR = JSON.parse(PAGES_INFO);
        if (PAGES_ARR instanceof Array) {
          const CURRENT_PAGE = PAGES_ARR[0];
          PAGES_NUM.textContent = `${CURRENT_PAGE} / ${GARAGE_TOTAL_PAGES}`;
        }
      } else {
        let text = PAGES_NUM.textContent;
        text = text.slice(0, text.indexOf('/') + 2).concat(`${GARAGE_TOTAL_PAGES}`);
        PAGES_NUM.textContent = text;
      }
    }
  });
};
