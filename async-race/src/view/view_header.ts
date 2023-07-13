import { HTMLTags } from '../types/types';
import { createElem } from './view_elements';

const drawHeader: () => void = () => {
  const HEADER = document.createElement('header');
  HEADER.classList.add('header');
  document.body.append(HEADER);

  const BUTTON_GARAGE = createElem(HEADER, HTMLTags.button, 'button_header', 'to garage');
  BUTTON_GARAGE.addEventListener('click', () => console.log('to garage'));

  const BUTTON_WINNERS = createElem(HEADER, HTMLTags.button, 'button_header', 'to winners');
  BUTTON_WINNERS.addEventListener('click', () => console.log('to winners'));
};

export default drawHeader;
