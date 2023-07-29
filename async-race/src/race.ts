import { startStopEngine, driveMode, createWinner, getWinner, updateWinner } from './api';
import { HTMLTags } from './types/types';
import { createElem } from './view/view_elements';
import { MAIN } from './view/view_main';

export let abortController = new AbortController();

let ANIMATION_ID: number;
let count = 1;
// const promisesArr: Promise<void | null | (Response | string | number)[]>[] = []; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function getResult(id: string, time: number): void {
  let WINNER_NAME = '';
  const NODE_NAME = document.querySelector(`.car-container#a${id} .car-name`);
  if (NODE_NAME && NODE_NAME.textContent) WINNER_NAME = NODE_NAME.textContent;
  const ID = Number(id);
  const WINNER_TIME = Math.round(time / 10) / 100;
  let POPUP: HTMLElement;
  setTimeout(() => {
    POPUP = createElem(MAIN, HTMLTags.div, 'popup', `Winner ${WINNER_NAME}, time ${WINNER_TIME} s`);
  }, WINNER_TIME);
  setTimeout(() => {
    POPUP.remove();
  }, 3000);
  getWinner(ID).then((res) => {
    if (res === 'Winner not found') {
      createWinner({ id: ID, wins: 1, time: WINNER_TIME });
    } else if (typeof res !== 'string') {
      let newTime: number;
      const newWins = res.wins + 1;
      if (res.time > WINNER_TIME) {
        newTime = WINNER_TIME;
      } else {
        newTime = res.time;
      }
      updateWinner(ID, { wins: newWins, time: newTime });
    }
  });
}

async function animationControl(el: HTMLElement, time: number, id: string): Promise<void> {
  const initialPosition = el.getClientRects()[0].x;
  const startTime = performance.now();
  let DISTANCE: number;
  const CONTAINER = document.querySelector('.car-container');
  if (CONTAINER instanceof HTMLElement && initialPosition) {
    DISTANCE = CONTAINER.getClientRects()[0].width - el.clientWidth - initialPosition;
  }
  function animate(currentTime: number): void {
    const timeDelta = currentTime - startTime;
    const progress = timeDelta / time;
    const ELEMENT = el;
    if (progress < 1 && DISTANCE) {
      const newPosition = DISTANCE * progress;
      ELEMENT.style.left = `${newPosition}px`;
      ANIMATION_ID = requestAnimationFrame(animate);
    } else {
      ELEMENT.style.left = `${DISTANCE}px`;
    }
  }
  ANIMATION_ID = requestAnimationFrame(animate);
  driveMode([
    { key: 'id', value: id },
    { key: 'status', value: 'drive' },
  ])
    .then((res) => {
      if (res && count === 0) {
        getResult(id, time);
        count += 1;
      }
    })
    .catch(() => {
      cancelAnimationFrame(ANIMATION_ID);
    });
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
    }
  }
};

export const stopDrive: (target: EventTarget | null) => Promise<void> = async (target) => {
  let id = '0';
  const TARGET = target;
  let container: Element | null;
  if (TARGET instanceof HTMLButtonElement) {
    TARGET.disabled = true;
    const BTN_MOVE = TARGET.previousSibling;
    if (BTN_MOVE instanceof HTMLButtonElement) BTN_MOVE.disabled = false;
    container = TARGET.closest('.car-container');
    if (container) {
      if (container.id) id = container.id.slice(1);
      const CAR = container?.childNodes[container.childNodes.length - 2];
      cancelAnimationFrame(ANIMATION_ID);
      if (CAR instanceof HTMLElement) CAR.style.left = '0';
      abortController.abort();
      await startStopEngine([
        { key: 'id', value: id },
        { key: 'status', value: 'stopped' },
      ]);
      abortController = new AbortController();
    }
  }
};

export const startRace: (t: EventTarget | null) => void = (target) => {
  const TARGET = target;
  const BUTTON_RESET = document.querySelector('.reset');
  if (TARGET instanceof HTMLButtonElement) TARGET.disabled = true;
  if (BUTTON_RESET instanceof HTMLButtonElement) BUTTON_RESET.disabled = false;
  count = 0;
  document.querySelectorAll('.move').forEach((btn) => {
    if (btn instanceof HTMLButtonElement) btn.click();
  });
};

export const resetCars: (t: EventTarget | null) => void = (target) => {
  const TARGET = target;
  const BUTTON_RACE = document.querySelector('.race');
  if (TARGET instanceof HTMLButtonElement) TARGET.disabled = true;
  if (BUTTON_RACE instanceof HTMLButtonElement) BUTTON_RACE.disabled = false;
  document.querySelectorAll('.stop').forEach((btn) => {
    const BUTTON = btn;
    if (BUTTON instanceof HTMLButtonElement) {
      BUTTON.disabled = false;
      BUTTON.click();
      BUTTON.disabled = true;
    }
  });
};
