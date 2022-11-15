const throttle = require("lodash.throttle");

const form = document.querySelector('.feedback-form');
const keyForStorage = 'feedback-form-state';
const { email, message } = form.elements;

email.value = onPageLoad().email;
message.value  = onPageLoad().message;

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

  if (savedObjFromStorage === null) {
     return { email: "", message: "" };
  }  else {
     const savedObjFromStorage = localStorage.getItem('feedback-form-state');
     return JSON.parse(savedObjFromStorage);
  }
  
}