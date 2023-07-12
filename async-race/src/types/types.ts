interface IqueryParams {
  key: string;
  value: number;
}
export type Query = IqueryParams[] | [];
export type generateStr = (a: Query) => string;

export interface Icars {
  name: string;
  color: string;
  id: number;
}