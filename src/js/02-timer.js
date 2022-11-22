// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
let timerStartValue = 0;

const refs = {
   timerBox: document.querySelector ('.timer'),
   timerBoxCells: document.querySelectorAll('.field'),
   timerValueFields: document.querySelectorAll('.value'),
   timerCaptionFields: document.querySelectorAll('.label'),
   timerPicker: document.querySelector('#datetime-picker'),
   timerButton: document.querySelector('[data-start]'),
};


const options = {
   enableTime: true,
   time_24hr: true,
   defaultDate: new Date(),
   minuteIncrement: 1,

   onClose(selectedDates) {

   let selectedDate = selectedDates[0].getTime();
   let currentDate = new Date().getTime();
   let comparedDate = selectedDate - currentDate;

     if (comparedDate < 0) {
      setDisabledButton (false);
      alert ("Please choose a date in the future");
      return;
     }

     setDisabledButton (true);
     timerStartValue = selectedDate;
   },

 };

// Timer styling
refs.timerBox.style.display = 'flex';
refs.timerBoxCells.forEach(elem => elem.style.cssText = 'display: flex; flex-direction: column; justify-content: center; margin: 20px;');
refs.timerValueFields.forEach(elem => elem.style.cssText = 'display: flex; justify-content: center; font-size: 24px; font-weight: 600;');
refs.timerCaptionFields.forEach(elem => elem.style.cssText = 'font-size: 20px; text-transform: uppercase');
refs.timerPicker.style.cssText = style="width: 300px; height: 40px; margin-left: 20px; font-size: 18px; border-radius: 4px"; 
refs.timerButton.style.cssText = 'width: 100px; height: 40px; font-size: 18px; font-weight: 700';

refs.timerButton.setAttribute('disabled', true);
refs.timerButton.addEventListener('click', startTimer);

// Flatpickr init
flatpickr(
   refs.timerPicker, 
   options,
);

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

function setDisabledButton(val){
   if (val) {
      refs.timerButton.removeAttribute('disabled');
   } else {
      refs.timerButton.setAttribute('disabled', true);
   }
};

function startTimer() {
   
   const timer = setInterval (() => {
      let time = convertMs(timerStartValue-new Date().getTime());
      refs.timerValueFields[0].innerHTML = addZero(time.days);
      refs.timerValueFields[1].innerHTML = addZero(time.hours);
      refs.timerValueFields[2].innerHTML = addZero(time.minutes);
      refs.timerValueFields[3].innerHTML = addZero(time.seconds);
   }, 
   1000);
} 

function addZero (val) {
   let int = Number(val);
   return int<10?"0"+val:val;
}