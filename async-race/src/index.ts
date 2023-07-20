import './main.css';
import { drawGarageInputs, drawGarageCars } from './view/view_garage';
import drawHeader from './view/view_header';
import { drawMain } from './view/view_main';
import { getCars } from './api';
import { getCarsResult } from './types/types';
import { CARS_PER_PAGE } from './store';

drawHeader();
drawGarageInputs();

export const getCarsData: () => Promise<getCarsResult> = async (page = 1, limit = CARS_PER_PAGE) => {
  const allCars: getCarsResult = await getCars([
    { key: '_page', value: page },
    { key: '_limit', value: limit },
  ]);
  const pages = Math.ceil(allCars.carsNumber / limit);
  drawMain(allCars.carsNumber, page, pages);
  console.log(allCars);
  allCars.cars.forEach((car) => drawGarageCars(car.name, car.color, car.id? car.id : 0));
  return allCars;
};
getCarsData();
// const main = async () => {
//   const car = await getCar(2);
//   console.log(car);
// }
// main();
// const newCar = async () => {
//   const car = await createCar({
//     name: 'Tesla',
//     color: '#fff',
//   });
//   console.log(car);
// }
// newCar();
// const updatedCar = async () => {
//   const car = await updateCar(5, {
//     name: 'Lada',
//     color: '#000',
//   });
//   console.log(car);
// }
// updatedCar();
// const deletedCar = async () => {
//   const car = await deleteCar(5);
//   console.log(car);
// }
// deletedCar();
// drawGarageCars();
