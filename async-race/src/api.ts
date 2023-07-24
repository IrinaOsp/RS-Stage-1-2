import { generateStr, Query, Icar, getCarsResult, getWinnersResult, Iwinner } from './types/types';
import { abortController } from './race';

const baseUrl = 'http://127.0.0.1:3000/';

const path = {
  garage: 'garage',
  winners: 'winners',
  engine: 'engine',
};

const generateQueryString: generateStr = (queryParams = []) =>
  queryParams.length ? `?${queryParams.map((x) => `${x.key}=${x.value}`).join('&')}` : '';

export const getCars: (x: Query) => Promise<getCarsResult> = async (queryParams) => {
  const response = await fetch(`${baseUrl}${path.garage}${generateQueryString(queryParams)}`);
  const carsNumber = Number(response.headers.get('X-Total-Count'));
  console.log(carsNumber);

  const cars: Icar[] = await response.json();
  console.log({ cars, carsNumber });
  return { cars, carsNumber };
}
export const getCar: (param: number) => Promise<Icar> = async (id) => {
  const response = await fetch(`${baseUrl}${path.garage}/${id}`);
  const car: Icar = await response.json();
  return car;
}
export const createCar: (param: Icar) => Promise<Icar> = async (body) => {
  const response = await fetch(`${baseUrl}${path.garage}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const car: Icar = await response.json();
  return car;
}

export const updateCar: (param1: number, param2: Icar) => Promise<Icar> = async (id, body) => {
  const response = await fetch(`${baseUrl}${path.garage}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const car: Icar = await response.json();
  return car;
}
export const deleteCar: (param: number) => Promise<Record<never, never>> = async (id) => {
  const response = await fetch(`${baseUrl}${path.garage}/${id}`, {
    method: 'DELETE',
  }).then((res) => {
    if (res.ok) return res.json();
    if (res.status === 404) throw new Error(res.statusText)
  }).catch((e) => e.message);
  console.log(response);
  return response;
}
export const startStopEngine: (queryParams: Query) => Promise<number>  = async (queryParams) => {
  const response = await fetch(`${baseUrl}${path.engine}${generateQueryString(queryParams)}`, {
    method: 'PATCH',
  });
  const startParams = await response.json();
  console.log(startParams);
  return startParams.distance / startParams.velocity;
}

export const driveMode: (queryParams: Query) => Promise<Response>  = async (queryParams) => {
  const result: Promise<Response> = await fetch(`${baseUrl}${path.engine}${generateQueryString(queryParams)}`, {
    method: 'PATCH',
    signal: abortController.signal,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else if (res.status === 500) {
        throw new Error('Error 500');
      } else if (res.status === 400 || res.status === 404 || res.status === 429) {
        console.error('Error 4xx');
      } else {
        console.error('fetch error');
      }
    });
    // .catch(() => null);
    return result;
}
export const getWinners: (x: Query) => Promise<getWinnersResult> = async (queryParams) => {
  const response = await fetch(`${baseUrl}${path.winners}${generateQueryString(queryParams)}`);
  const winnersNumber = Number(response.headers.get('X-Total-Count'));
  console.log(winnersNumber);

  const winners: Iwinner[] = await response.json();
  console.log({ winners, winnersNumber });
  return { winners, winnersNumber };
}
export const getWinner: (param: number) => Promise<Iwinner | string> = async (id) => {
  const result = await fetch(`${baseUrl}${path.winners}/${id}`)
    .then((res) => {
      if(res.ok) {
        return res.json();
      } else if (res.status === 404) {
        throw new Error('Winner not found');
      } else {
        throw new Error('getWinner fetch error');
      }
    })
    .catch((e) => e.message);
  return result;
}
export const createWinner: (param: Iwinner) => Promise<Iwinner> = async (body) => {
  const result = await fetch(`${baseUrl}${path.winners}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else if (res.status === 500) {
        throw new Error('Error 500');
      } else {
        throw new Error('createWinner fetch error');
      }
    })
    .catch((e) => e.message);
  return result;
}
export const deleteWinner: (param: number) => Promise<Record<never, never>> = async (id) => {
  const result = await fetch(`${baseUrl}${path.winners}/${id}`, {
    method: 'DELETE',
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else if (res.status === 404) {
        throw new Error('Error 404 Not found');
      }
    })
    .catch((e) => e.message);
  return result;
}
export const updateWinner: (param1: number, param2: Iwinner) => Promise<Iwinner> = async (id, body) => {
  const result = await fetch(`${baseUrl}${path.winners}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else if (res.status === 404) {
      throw new Error('Error 404 Not found');
    }
  })
  .catch((e) => e.message);
return result;
}