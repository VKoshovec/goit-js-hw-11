
const refs = {
   timerBox: document.querySelector ('.timer'),
   timerBoxCells: document.querySelectorAll('.field'),
   timerValueFields: document.querySelectorAll('.value'),
   timerCaptionFields: document.querySelectorAll('.label'),
};

// Timer styling
refs.timerBox.style.display = 'flex';
refs.timerBoxCells.forEach(elem => elem.style.cssText = 'display: flex; flex-direction: column; justify-content: center; margin: 20px;');
refs.timerValueFields.forEach(elem => elem.style.cssText = 'display: flex; justify-content: center; font-size: 24px; font-weight: 600;');
refs.timerCaptionFields.forEach(elem => elem.style.cssText = 'font-size: 20px; text-transform: uppercase');
// font-size: 20px; text-transform: uppercase;
// Timer styling



