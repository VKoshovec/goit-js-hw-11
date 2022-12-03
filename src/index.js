import Notiflix from 'notiflix';
import './css/styles.css';
import { fetchImages } from './js/fetchImages';
import { renderImage } from './js/renderImage';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// vars
const currentPage = 1;
const refs = {
    searchForm: document.querySelector('#search-form'),
    galary:     document.querySelector('.gallery'),
};

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,    
});

// var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

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