import { HTMLTags } from '../types/types';
import { createElem } from './view_elements';

export const MAIN = document.createElement('main');
export const WRAPPER = document.createElement('div');

export const drawMain: (cars: number, pages: number) => void = (cars, pages) => {
  MAIN.classList.add('main');
  document.body.append(MAIN);

  WRAPPER.className = 'wrapper';
  MAIN.append(WRAPPER);

  const GARAGE_HEADING = createElem(WRAPPER, HTMLTags.h2, 'garage-heading', 'Garage ');
  const PAGE_HEADING = createElem(WRAPPER, HTMLTags.h3, 'page-heading', 'Page #');
  const CARS_COUNT = createElem(GARAGE_HEADING, HTMLTags.span, 'cars-count', `(${cars})`);
  const PAGE_COUNT = createElem(PAGE_HEADING, HTMLTags.span, 'page-count', `${pages}`);
};
