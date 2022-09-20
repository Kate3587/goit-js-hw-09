import Notiflix from 'notiflix';

const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');
const btnEl = document.querySelector('[type="submit"]');
const formEl = document.querySelector('.form');

function getPromise(position, delayEl) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delayEl });
      } else {
        reject({ position, delayEl });
      }
    }, delayEl);
  })
};

formEl.addEventListener('submit', onSubmitClick);

function onSubmitClick(event) {
  event.preventDefault();
  const { amount, step, delay } = event.target.elements;
  let amountValue = Number(amount.value);
  let stepValue = Number(step.value);
  let delayValue = Number(delay.value);
  for (let i = 0; i < amountValue; i += 1){
    getPromise(i+1, delayValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success()
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
      }).catch(({ position, delay }) => {
        Notiflix.Notify.failure()
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayValue += stepValue;
  }
}

