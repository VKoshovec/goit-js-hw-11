// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

const refs = {
   timerBox: document.querySelector ('.timer'),
   timerBoxCells: document.querySelectorAll('.field'),
   timerValueFields: document.querySelectorAll('.value'),
   timerCaptionFields: document.querySelectorAll('.label'),
   timerPicker: document.querySelector('#datetime-picker'),
   timerButton: document.querySelector('[data-start]'),
};

// Timer styling
refs.timerBox.style.display = 'flex';
refs.timerBoxCells.forEach(elem => elem.style.cssText = 'display: flex; flex-direction: column; justify-content: center; margin: 20px;');
refs.timerValueFields.forEach(elem => elem.style.cssText = 'display: flex; justify-content: center; font-size: 24px; font-weight: 600;');
refs.timerCaptionFields.forEach(elem => elem.style.cssText = 'font-size: 20px; text-transform: uppercase');
refs.timerPicker.style.cssText = style="width: 300px; height: 40px; margin-left: 20px; font-size: 18px; border-radius: 4px"; 
refs.timerButton.style.cssText = 'width: 100px; height: 40px; font-size: 18px; font-weight: 700';




