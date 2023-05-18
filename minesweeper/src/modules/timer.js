export let minutes = 0;
export let seconds = 0;
let timer;

export function startTimer(minutes = 0, seconds = 0) {
  console.log('start timer')
  timer = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes === 0) {
      document.querySelector('.minutes').textContent = '00';
    }
    document.querySelector('.minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    let minutesTextcontent = document.querySelector('.minutes').textContent;
    document.querySelector('.minutes').textContent = minutesTextcontent.slice(minutesTextcontent.length-2, minutesTextcontent.length);
    document.querySelector('.seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
  }, 1000);
}

export function stopTimer () {
  console.log('stop timer');
  clearInterval(timer);
  timer = null;
  minutes = 0;
  seconds = 0;
  document.querySelector('.minutes').textContent = '00';
  document.querySelector('.seconds').textContent = '00';
}
