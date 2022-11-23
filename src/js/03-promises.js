import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('form'),
};

const {delay, step, amount} = refs.form.elements;

refs.form.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
  setTimeout(() => { 
    if (shouldResolve) {
      // Fulfill
      resolve({position, delay})
    }
    else {
      // Reject
      reject({position, delay});
    }
  }, delay);
});
};

function onSubmit (e) {
  e.preventDefault();
 
  for (let index = 1; index <= amount.value; index++) {

   let totalDelay = Number(delay.value) + ((index-1) * Number(step.value));

     createPromise(index, totalDelay).then(({ position, delay }) => {
     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
     Notiflix.Notify.success (`✅ Fulfilled promise ${position} in ${delay}ms`);
     }).catch(({ position, delay }) => {
     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
     Notiflix.Notify.failure (`❌ Rejected promise ${position} in ${delay}ms`);
    });  
  }  
};