import debounce from 'lodash.debounce';
import './css/styles.css';
import { fetchCountry } from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

const refs = {
    inputCountry: document.querySelector('#search-box'),
}

//add style
document.body.style.backgroundColor = '#ffffff';
refs.inputCountry.style.margin = '30px';

refs.inputCountry.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));


function onInput () {
    console.log(fetchCountry(refs.inputCountry.value).catch(
        error => console.log(error)
    ));
}