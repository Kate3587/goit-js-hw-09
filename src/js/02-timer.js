import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputEl = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const timerDayEl = document.querySelector('[data-days]');
const timeHourEl = document.querySelector('[data-hours]');
const timeMinuteEl = document.querySelector('[data-minutes]');
const timeSecondEl = document.querySelector('[data-seconds]');