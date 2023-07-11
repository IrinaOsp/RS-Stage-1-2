import createButton from './view_buttons';

const drawHeader: () => void = () => {
  const HEADER = document.createElement('header');
  HEADER.classList.add('header');
  document.body.append(HEADER);

  const BUTTON_GARAGE = createButton(HEADER, 'button_header', 'to garage');
  BUTTON_GARAGE.addEventListener('click', () => console.log('to garage'));

  const BUTTON_WINNERS = createButton(HEADER, 'button_header', 'to winners');
  BUTTON_WINNERS.addEventListener('click', () => console.log('to winners'));
};

export default drawHeader;
