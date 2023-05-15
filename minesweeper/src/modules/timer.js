export let minutes = 0;
export let seconds = 0;
let timer;

export function startTimer() {
  console.log('start timer')
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    document.querySelector('.minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
    document.querySelector('.seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;
  }, 1000);
}

export function stopTimer () {
  console.log('stop timer');
  clearInterval(timer);
  timer = null;
  minutes = 0;
  seconds = 0;
  document.querySelector('.minutes').innerHTML = '00';
  document.querySelector('.seconds').innerHTML = '00';
}
