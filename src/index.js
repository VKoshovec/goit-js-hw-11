import throttle from 'lodash.throttle';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const refs = {
    inputCountry: document.querySelector('#search-box'),
}

refs.inputCountry.addEventListener('input', onInput);

function onInput () {
    console.log("Auch!");
}