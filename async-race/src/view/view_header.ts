const drawHeader: () => void = () => {
  const HEADER = document.createElement('header');
  HEADER.classList.add('header');

  const BUTTON_GARAGE = document.createElement('button');
  BUTTON_GARAGE.className = 'button_header button_garage';
  BUTTON_GARAGE.textContent = 'to garage';

  const BUTTON_WINNERS = document.createElement('button');
  BUTTON_WINNERS.className = 'button_header button_winners';
  BUTTON_WINNERS.textContent = 'to winners';

  document.body.append(HEADER);
  HEADER.append(BUTTON_GARAGE);
  HEADER.append(BUTTON_WINNERS);
};

export default drawHeader;
