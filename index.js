const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
    body: document.body
}

let intervalId = null;

refs.btnStart.addEventListener('click', onStartBtnClick);
refs.btnStop.addEventListener('click', onStopBtnClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartBtnClick() {
  refs.btnStart.setAttribute('disabled', true)
    intervalId = setInterval(() => {
        const randomColor = randomIntegerFromInterval(0, colors.length);
        refs.body.style.backgroundColor = colors[randomColor];
       ;
    }, 1000);
}

function onStopBtnClick() {
    clearInterval(intervalId);
    refs.btnStart.removeAttribute('disabled')
}