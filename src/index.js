import Notiflix from 'notiflix';
import './css/styles.css';
import { fetchImages } from './js/fetchImages';
import { renderImage } from './js/renderImage';

// vars
const currentPage = 1;
const refs = {
    searchForm: document.querySelector('#search-form'),
    galary:     document.querySelector('.gallery'),
};

//events
refs.searchForm.addEventListener('submit', onSubmit);


//functions
function onSubmit (e) {

  e.preventDefault();
  const queryText = e.target.elements.searchQuery.value;

  fetchImages(queryText, currentPage).then(response => {
    console.log(response.hits);
    renderImage (response.hits, refs.galary);
  }).catch (err => console.log("Bad request"));

}