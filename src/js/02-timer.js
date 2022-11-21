const { forEach } = require("lodash");

const refs = {
   timerBox: document.querySelector ('.timer'),
   timerBoxCells: document.querySelectorAll('.field'),
};

refs.timerBox.style.display = 'flex';
// refs.timerBoxCells.forEach( elem => {elem.style.cssText = 'display: flex; flex-direction: column; justify-content: center;'});



// refs.timerBox.children.style = '"display: flex; flex-direction: column; justify-content: center;"';
// refs.timerBox.children.style.flex-direction = 'column';