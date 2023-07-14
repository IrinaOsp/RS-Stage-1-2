export const MAIN = document.createElement('main');
export const WRAPPER = document.createElement('div');

export const drawMain: (cars: number, pages: number) => void = (cars, pages) => {
  MAIN.classList.add('main');
  document.body.append(MAIN);

  WRAPPER.className = 'wrapper';
  MAIN.append(WRAPPER);

  const GARAGE_HEADING = document.createElement('h2');
  GARAGE_HEADING.className = 'garage-heading';
  GARAGE_HEADING.textContent = 'Garage ';
  const PAGE_HEADING = document.createElement('h3');
  PAGE_HEADING.className = 'page-heading';
  PAGE_HEADING.textContent = 'Page #';

  WRAPPER.prepend(GARAGE_HEADING, PAGE_HEADING);

  const CARS_COUNT = document.createElement('span');
  CARS_COUNT.className = 'cars-count';
  CARS_COUNT.textContent = `(${cars})`;
  GARAGE_HEADING.appendChild(CARS_COUNT);

  const PAGE_COUNT = document.createElement('span');
  PAGE_COUNT.className = 'page-count';
  PAGE_COUNT.textContent = `${pages}`;
  PAGE_HEADING.appendChild(PAGE_COUNT);
};
