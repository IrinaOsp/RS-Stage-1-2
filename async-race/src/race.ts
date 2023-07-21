import { startStopEngine, driveMode, createWinner, getWinner, updateWinner } from './api';
import { HTMLTags } from './types/types';
import { createElem } from './view/view_elements';
import { MAIN } from './view/view_main';

export let abortController = new AbortController();

let ANIMATION_ID: number;
const promisesArr: (number | string | Promise<string>)[][] = [];

async function animationControl(el: HTMLElement, time: number, id: string): Promise<void> {
  console.log(id, 'time', time);
  try {
    const initialPosition = el.getClientRects()[0].x;
    const startTime = performance.now();
    let DISTANCE: number;
    const CONTAINER = document.querySelector('.car-container');
    if (CONTAINER instanceof HTMLElement && initialPosition) {
      DISTANCE = CONTAINER.getClientRects()[0].width - el.clientWidth - initialPosition;
    }
    function animate(currentTime: number) {
      console.log('animate');
      const timeDelta = currentTime - startTime;
      const progress = timeDelta / time;
      if (progress < 1 && DISTANCE) {
        const newPosition = DISTANCE * progress;
        el.style.left = newPosition + 'px';
        ANIMATION_ID = requestAnimationFrame(animate);
      } else {
        el.style.left = DISTANCE + 'px';
      }
    }
    ANIMATION_ID = requestAnimationFrame(animate);
    const drivePromise = driveMode([{key: 'id', value: id}, {key: 'status', value: 'drive'}]);
    promisesArr.push([drivePromise, id, time]);
    console.log('-------------------------------------------', promisesArr.length);
    if (promisesArr.length === 7) getResult();
    drivePromise.then((res) => {
        console.log(id, res);
        if (res === 'Error 500') {
          console.log('cancelAnimationFrame');
          cancelAnimationFrame(ANIMATION_ID);
        }
      });
  } catch (error) {
    console.log(error);
  }
}
export const startDrive: (target: EventTarget | null) => Promise<void> = async (target) => {
  let id = '0';
  let container: Element | null;
  const BTN_MOVE = target;
  if (BTN_MOVE instanceof HTMLButtonElement) {
    BTN_MOVE.disabled = true;
    container = BTN_MOVE.closest('.car-container');
    if (container) {
      id = container.id.slice(1);
      const TIME = await startStopEngine([
        { key: 'id', value: id },
        { key: 'status', value: 'started' },
      ]);
      const BUTTON_STOP = BTN_MOVE.nextElementSibling;
      if (BUTTON_STOP instanceof HTMLButtonElement) BUTTON_STOP.disabled = false;
      const CAR = container?.childNodes[container.childNodes.length - 2];
      if (CAR instanceof HTMLElement) animationControl(CAR, TIME, id);
    };
  }
}


export const stopDrive: (target: EventTarget | null) => Promise<void> = async (target) => {
  let id = '0';
  let container: Element | null;
  promisesArr.length = 0;
  if (target instanceof HTMLButtonElement) {
    target.disabled = true;
    const BTN_MOVE = target.previousSibling;
    if (BTN_MOVE instanceof HTMLButtonElement) BTN_MOVE.disabled = false;
    container = target.closest('.car-container');
    if (container) {
      container.id ? id = container.id.slice(1) : '0'
      const CAR = container?.childNodes[container.childNodes.length - 2];
      cancelAnimationFrame(ANIMATION_ID);
      if (CAR instanceof HTMLElement) CAR.style.left = '0';
      abortController.abort();
      const STOP = await startStopEngine([{key: 'id', value: id}, {key: 'status', value: 'stopped'}]);
      abortController = new AbortController();
    }
  }
}

export const startRace: (t: EventTarget | null) => void = (target) => {
  console.log('start race');
  const BUTTON_RESET = document.querySelector('.reset');
  if (target instanceof HTMLButtonElement) target.disabled = true;
  if (BUTTON_RESET instanceof HTMLButtonElement) BUTTON_RESET.disabled = false;
  document.querySelectorAll('.move').forEach((btn) => {
    if (btn instanceof HTMLButtonElement) btn.click();
  });
};

function getResult() {
  console.log(promisesArr.length);
  console.log(promisesArr);
  Promise.race(promisesArr).then((res) => {
    console.log(res[0]);
    console.log(res[1]);
    let WINNER_NAME = '';
    const NODE_NAME = document.querySelector(`.car-container#a${res[1]} .car-name`)
    if (NODE_NAME && NODE_NAME.textContent) WINNER_NAME = NODE_NAME.textContent;
    const ID = Number(res[1]);
    console.log(WINNER_NAME);
    console.log(res[2]);
    const WINNER_TIME = Math.round(res[2] as number / 10) / 100;
    let POPUP: HTMLElement;
    setTimeout(() => {
      POPUP = createElem(MAIN, HTMLTags.div, 'popup', `Winner ${WINNER_NAME}, time ${WINNER_TIME} s`);
    }, WINNER_TIME);
    setTimeout(() => {
      POPUP.remove();
    }, 3000);
    promisesArr.length = 0;
    getWinner(ID).then((res) => {
      if (res === 'Winner not found') {
        createWinner({id: ID, wins: 1, time: WINNER_TIME});
      } else if (typeof res !== 'string') {
        let newTime: number;
        const newWins = res.wins + 1;
        res.time > WINNER_TIME ? newTime = WINNER_TIME : newTime = res.time;
        updateWinner(ID, {wins: newWins, time: newTime})
      }
  });
  });
}
export const resetCars: (t: EventTarget | null) => void = (target) => {
  console.log('stop race');
  const BUTTON_RACE = document.querySelector('.race');
  if (target instanceof HTMLButtonElement) target.disabled = true;
  if (BUTTON_RACE instanceof HTMLButtonElement) BUTTON_RACE.disabled = false;
  document.querySelectorAll('.stop').forEach((btn) => {
    if (btn instanceof HTMLButtonElement) {
      btn.disabled = false;
      btn.click();
      btn.disabled = true;
    }
  });
};
