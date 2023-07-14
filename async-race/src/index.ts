import './main.css';
import { drawGarageInputs, drawGarageCars } from './view/view_garage';
import drawHeader from './view/view_header';
import { drawMain } from './view/view_main';
import { getCars } from './garage';
import { getCarsResult } from './types/types';

// , getCar, createCar, updateCar, deleteCar

drawHeader();
drawGarageInputs();

export const getCarsData: () => void = async () => {
  const allCars: getCarsResult = await getCars([
    { key: '_page', value: 0 },
    { key: '_limit', value: 6 },
  ]);
  const pages = Math.ceil(allCars.carsNumber / 7);
  drawMain(allCars.carsNumber, pages);
  console.log(allCars);
  allCars.cars.forEach((car) => drawGarageCars(car.name, car.color, car.id? car.id : 0));
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
