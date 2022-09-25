function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const bodyEl = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
btnStop.disabled = true;

btnStart.addEventListener('click', onStartCklick);

let timerId;

function btnSwitch(bool) {
    btnStart.disabled = bool;
    btnStop.disabled = !bool;
}

function onStartCklick(event) {
    btnSwitch(true);
    timerId = setInterval(() => {
        const bodyColor = getRandomHexColor();
        bodyEl.style.background = bodyColor;
    }, 1000);
};

btnStop.addEventListener('click', onStopClick);

function onStopClick(event) {
    btnSwitch(!true) 
    clearInterval(timerId);
};

