import { trim } from 'lodash';
import debounce from 'lodash.debounce';
import './css/styles.css';
import { fetchCountry } from './js/fetchCountries';

//vars
const DEBOUNCE_DELAY = 300;

const refs = {
    inputCountry: document.querySelector('#search-box'),
    countryInfo: document.querySelector('.country-list'),
}

//add style
document.body.style.backgroundColor = '#ffffff';
refs.inputCountry.style.margin = '30px';

//events
refs.inputCountry.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

//functions
function onInput (event) {

    if(trim(event.target.value)){

        fetchCountry(refs.inputCountry.value).then(json =>{
            console.log(json);
            parseJson (json)}
          ).catch(
            error => console.log(error)
        );
        
    }
}

function parseJson (jsonArr) {
  
    const htmlMap = jsonArr.map(element => {
       return `<div style="display: block; width: 400px; height:250px; padding:10px">
        <ul style="list-style: none; margin:0px; padding:0px">
          <li style="display: flex;">
            <img style="width: 30px; height: 30px; margin-right: 10px" src=${element.flags.svg}>
            <p style="font-size: 24px; font-weight: bold; margin: 0px">${element.name}</p>
          </li>
          <li style="display: flex;">
            <p style="font-size: 18px; font-weight: bold; ">Capital: </p>
            <p style="font-size: 18px;">${element.capital}</p>
          </li>
          <li style="display: flex;">
            <p style="font-size: 18px; font-weight: bold;">Population: </p>
            <p style="font-size: 18px;">${element.population}</p>
          </li>
          <li style="display: flex;">
            <p style="font-size: 18px; font-weight: bold;">Languages: </p>
            <p style="font-size: 18px;">${ element.languages }</p>
          </li>
        </ul>
      </div>`
    }).join("");
    
    console.log(htmlMap)
  
   refs.countryInfo.innerHTML = htmlMap;
  
};