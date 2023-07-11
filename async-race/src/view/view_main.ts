const drawMain: () => void = () => {
  const MAIN = document.createElement('main');
  MAIN.classList.add('main');
  document.body.append(MAIN);
};

export default drawMain;
