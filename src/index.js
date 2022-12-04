import Notiflix from 'notiflix';
import './css/styles.css';
import { fetchImages } from './js/fetchImages';
import { renderImage } from './js/renderImage';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { throttle } from 'lodash';


// vars
let currentPage = 1;
const refs = {
    searchForm: document.querySelector('#search-form'),
    galary:     document.querySelector('.gallery'),
};

//lightBox init
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,    
});

//events
refs.searchForm.addEventListener('submit', onSubmit);
window.addEventListener('scroll', throttle(onScroll, 500));

//functions
function onSubmit (e) {
  
  currentPage = 1;
    
  e.preventDefault();
  const queryText = e.target.elements.searchQuery.value;

  fetchImages(queryText, currentPage).then(response => {

    renderImage (response.hits, refs.galary, true);
    lightbox.refresh();
    currentPage += 1;

  }).catch (err => console.log("Bad request"));

};


function onScroll (e) {

if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  
  const queryText = refs.searchForm.elements.searchQuery.value;

  fetchImages(queryText, currentPage).then(response => {

    renderImage (response.hits, refs.galary, false);
    lightbox.refresh();
    currentPage += 1;

  }).catch (err => console.log("Bad request"));
  
 }
  
}

