let timerInterval;
let minutes = 0;
let seconds = 0;

export const startTimer = () => {
  setInterval(function() {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    document.querySelector('.minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
    document.querySelector('.seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;
  }, 1000);
}

export const stopTimer = () => {
  minutes = 0;
  seconds = 0;
  document.querySelector('.minutes').innerHTML = '00';
  document.querySelector('.seconds').innerHTML = '00';
}
