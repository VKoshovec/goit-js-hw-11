// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

// vars
const galary = document.querySelector('.gallery');
let activModal; 

//gallery creating
const galleryItem = galleryItems.map(({ preview, original, description })=> { 
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
  </a>`
}).join('');

galary.innerHTML = galleryItem;

//SimpleLightbox inicialization.
var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,    
});
console.log(galleryItems);
