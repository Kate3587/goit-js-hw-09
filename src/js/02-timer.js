import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputEl = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const timeDayEl = document.querySelector('[data-days]');
const timeHourEl = document.querySelector('[data-hours]');
const timeMinuteEl = document.querySelector('[data-minutes]');
const timeSecondEl = document.querySelector('[data-seconds]');
let selectedTimeMs = null;
let timeInterval;

btnStart.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
            Notiflix.Notify.warning('Please choose a date in the future');
        } else {
            btnStart.disabled = false; 
            selectedTimeMs = selectedDates[0].getTime();
      }
  },
};

flatpickr(inputEl, options);

btnStart.addEventListener('click', onBtnStartClick);

function onBtnStartClick(event) {
    btnStart.disabled = true; 
    let deltaTime = selectedTimeMs - Date.now();
    console.log(deltaTime);
    
  
  timeInterval = setInterval(() => {
    if (deltaTime < 0) {
    return;
   }
  reWrite(convertMs(deltaTime));
   deltaTime -= 1000;
    
  }, 1000);
  

};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

function reWrite ({days, hours, minutes, seconds}) {
  timeDayEl.textContent = addLeadingZero(days);
  timeHourEl.textContent = addLeadingZero(hours);
  timeMinuteEl.textContent = addLeadingZero(minutes);
  timeSecondEl.textContent = addLeadingZero(seconds);
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};
