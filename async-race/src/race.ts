import { startStopEngine, driveMode } from './api';

export let abortController = new AbortController();

export const startRace: (target: EventTarget | null) => Promise<void> = async (target) => {
  console.log(target);
  let id = '0';
  let container: Element | null;
  if (target instanceof HTMLButtonElement) {
    target.disabled = true;
    container = target.closest('.car-container');
    if (container) {
      container.id ? id = container.id : '0'
      const TIME = await startStopEngine([{key: 'id', value: id}, {key: 'status', value: 'started'}]);
      console.log(TIME);
      const CAR = container?.childNodes[container.childNodes.length - 2];
      if (CAR instanceof HTMLElement) animationControl(CAR, TIME, id).then(() => target.disabled = false);
    };
  }
}

let ANIMATION_ID: number;
async function animationControl (el: HTMLElement, time: number, id: string) {
  console.log('wrapper');
  console.log(time);
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
    await driveMode([{key: 'id', value: id}, {key: 'status', value: 'drive'}])
      .then((res: any) => {
        console.log(res);
        console.log(res === 'Error 500');
        if (res === 'Error 500') {
          console.log('cancelAnimationFrame');
          cancelAnimationFrame(ANIMATION_ID);
        }
      });
  } catch (error) {
    console.log('animation error');
  }
}

export const stopRace: (target: EventTarget | null) => Promise<void> = async (target) => {
  let id = '0';
  let container: Element | null;
  if (target instanceof HTMLButtonElement) {
    target.disabled = true;
    container = target.closest('.car-container');
    if (container) {
      container.id ? id = container.id : '0'
      const CAR = container?.childNodes[container.childNodes.length - 2];
      cancelAnimationFrame(ANIMATION_ID);
      if (CAR instanceof HTMLElement) CAR.style.left = '0';
      abortController.abort();
      const STOP = await startStopEngine([{key: 'id', value: id}, {key: 'status', value: 'stopped'}]);
      abortController = new AbortController();
    }
    target.disabled = false;
  }
}