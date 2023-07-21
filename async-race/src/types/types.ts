export interface IqueryParams {
  key: string;
  value: number | string;
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
export interface Iwinner {
  id?: number;
  wins: number;
  time: number;
}
export interface getWinnersResult {
  winners: Iwinner[];
  winnersNumber: number;
}

export enum HTMLTags {
  div = 'div',
  span = 'span',
  input = 'input',
  button = 'button',
  table = 'table',
  thead = 'thead',
  tr = 'tr',
  th = 'th',
  tbody = 'tbody',
  td = 'td',
  h2 = 'h2',
  h3 = 'h3',
}
