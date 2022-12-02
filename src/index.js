import { trim } from 'lodash';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import './css/styles.css';
import { fetchImages } from './js/fetchImages';

// //vars
// const DEBOUNCE_DELAY = 500;

const refs = {
    searchForm: document.querySelector('#search-form'),
};

//events
refs.searchForm.addEventListener('submit', onSubmit);


//functions
function onSubmit (e) {
  e.preventDefault();
  
}

// //functions
// function onInput (event) {
//     clearAllInfo ();

//     const searchName = trim(event.target.value);

//     if(trim(searchName)) {

//         searcStart();
//         fetchCountry(searchName).then(json => {

//             chackJson (json, renderArrJson, renderOneCountryJson);  
//             searchFinish ();
              
//         }).catch(err => {
            
//             searchFinish ();
//             Notiflix.Notify.failure(`Oops, there is no country with that name "${searchName}`);

//         });  
//     }
// }

// function chackJson (testJson, callbackTenToOne, callbackOne) {

//     if (testJson.length < 10 && testJson.length !==1) {
//         callbackTenToOne(testJson);
//     } else if (testJson.length == 1) {
//         callbackOne(testJson);
//     } else {
//         Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
//     }
// }

// function renderArrJson (jsonArr) {
  
//     const htmlMap = jsonArr.map(element => 
//        `<li style="display: flex; margin: 5px">
//             <img style="width: 30px; height: 30px; margin-right: 10px" src=${element.flags.svg}>
//             <p style="font-size: 20px; margin: 0px">${element.name}</p>
//         </li>`
//     ).join("");
      
//     refs.countryList.insertAdjacentHTML('beforeend', htmlMap);
  
// };

// function renderOneCountryJson (jsonArr) {
  
//     const htmlMap = jsonArr.map(element => {

//        const langs = element.languages.map(lang => lang.name).join(', ');

//        return `<ul><li style="display: flex; align-items: center">
//             <img style="width: 30px; height: 30px; margin-right: 10px" src=${element.flags.svg}>
//             <p style="font-size: 30px; font-weight: bold; margin: 0px">${element.name}</p>
//           </li>
//           <li style="display: flex;">
//             <p style="font-size: 18px; font-weight: bold; margin: 0px 10px 0px 0px; padding:0px;" >Capital: </p>
//             <p style="font-size: 18px; margin:0px 10px 0px 0px; padding:0px;">${element.capital}</p>
//           </li>
//           <li style="display: flex;">
//             <p style="font-size: 18px; font-weight: bold; margin:0px 10px 0px 0px; padding:0px; ">Population: </p>
//             <p style="font-size: 18px; margin:0px; padding:0px 10px 0px 0px;">${element.population}</p>
//           </li>
//           <li style="display: flex;">
//             <p style="font-size: 18px; font-weight: bold; margin:0px 10px 0px 0px; padding:0px; ">Languages: </p>
//             <p style="font-size: 18px; margin:0px; padding:0px 10px 0px 0px;">${ langs }</p>
//           </li></ul>`
//      }    
//     );
     
//     refs.countryInfo.insertAdjacentHTML('beforeend', htmlMap);
  
//     console.log(jsonArr);
// };

// function clearAllInfo () {

//     refs.countryInfo.innerHTML = '';
//     refs.countryList.innerHTML = '';

// }

// function searcStart () {
//     Notiflix.Loading.standard("Searching...");
//     // refs.inputCountry.setAttribute ('disabled', true);
// }

// function searchFinish () {
//     Notiflix.Loading.remove();
//     // refs.inputCountry.removeAttribute('disabled');
//     refs.inputCountry.focus();
// }

