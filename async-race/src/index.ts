import './main.css';
import { drawGarageInputs, drawGarageCars } from './view/view_garage';
import drawHeader from './view/view_header';
import { drawMain } from './view/view_main';
import { getCars } from './api';
import { CARS_PER_PAGE } from './data/app_data';
import { popupMessage } from './util/popup_message';

localStorage.removeItem('garage pages');
localStorage.removeItem('winners pages');
drawHeader();
drawGarageInputs();

export const getCarsData: () => Promise<void> = async (page = 1, limit = CARS_PER_PAGE) => {
  await getCars([
    { key: '_page', value: page },
    { key: '_limit', value: limit },
  ])
    .then((res) => {
      const pages = Math.ceil(res.carsNumber / limit);
      drawMain(res.carsNumber, page, pages);
      res.cars.forEach((car) => drawGarageCars(car.name, car.color, car.id ? car.id : 0));
      return res;
    })
    .catch((error) => popupMessage(error.message.toString()));
};
getCarsData();
