import { startStopEngine, driveMode } from './api';

export const startRace: (target: EventTarget | null) => Promise<void> = async (target) => {
  console.log(target);
  let id = '0';
  let container: Element | null;
  if (target instanceof HTMLElement) {
    container = target.closest('.car-container');
    if (container) {
      container.id ? id = container.id : '0'
      const TIME = await startStopEngine([{key: 'id', value: id}, {key: 'status', value: 'started'}]);
      console.log(TIME);
      const DRIVE = await driveMode([{key: 'id', value: id}, {key: 'status', value: 'drive'}]);
      console.log(DRIVE);
      const CAR = container?.childNodes[container.childNodes.length - 2];
      if (CAR instanceof HTMLElement) animationControl(CAR, TIME);
    };
  }
}

function animationControl (el: HTMLElement, time: number) {
  console.log('wrapper');
  console.log(time);
  const initialPosition = document.querySelector('.car')?.getClientRects()[0].x;
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
      requestAnimationFrame(animate);
    } else {
      el.style.left = DISTANCE + 'px';
    }
  }
  requestAnimationFrame(animate);
}
