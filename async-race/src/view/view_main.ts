export const MAIN = document.createElement('main');

export const drawMain: () => void = () => {
  MAIN.classList.add('main');
  document.body.append(MAIN);
};
