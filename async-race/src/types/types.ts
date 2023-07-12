interface IqueryParams {
  key: string;
  value: number;
}
export type Query = IqueryParams[];
export type generateStr = (a: Query) => string;

export interface Icar {
  name: string;
  color: string;
  id?: number;
}
export interface getCarsResult {
  cars: Icar[];
  carsNumber: number;
}