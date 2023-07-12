const baseUrl = 'http://127.0.0.1:3000/';

const path = {
  garage: 'garage',
  winners: 'winners',
};

interface IqueryParams {
  key: string;
  value: number;
}
type Query = IqueryParams[] | [];
type generateStr = (a: Query) => string;

interface Icars {
  name: string;
  color: string;
  id: number;
}

const generateQueryString: generateStr = (queryParams = []) =>
  queryParams.length ? `?${queryParams.map((x) => `${x.key}=${x.value}`).join('&')}` : '';

export const getCars: (x?: Query) => Promise<Icars> = async (queryParams?: Query) => {
  let response;
  if (queryParams) {
    response = await fetch(`${baseUrl}${path.garage}${generateQueryString(queryParams)}`);
  } else {
    response = await fetch(`${baseUrl}${path.garage}`);
  }
  const data = await response.json();
  console.log(data);
  return data;
}
