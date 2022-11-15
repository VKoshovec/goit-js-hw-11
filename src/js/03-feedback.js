const throttle = require("lodash.throttle");

const form = document.querySelector('.feedback-form');
const keyForStorage = 'feedback-form-state';
const { email, message } = form.elements;

onPageLoad ()

// console.log (storedObj.email);
// console.log (storedObj.message);

form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));



function onSubmit (e) {
  e.preventDefault();

  const objFromStorage = localStorage.getItem('feedback-form-state');
  console.log (JSON.parse(objFromStorage));
  
  email.value = "";
  message.value = "";

  localStorage.removeItem ('feedback-form-state');
}

function onInput () {

  const objForStorage = {
    [email.name]: email.value,
    [message.name]: message.value,
  };

  localStorage.setItem (keyForStorage, JSON.stringify(objForStorage));
}

function onPageLoad () {
    const savedObjFromStorage = localStorage.getItem('feedback-form-state');
    const storedObj = JSON.parse(savedObjFromStorage);
    return storedObj;
}