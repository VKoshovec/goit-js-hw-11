export function renderImage (imageArr, collectionElement, firstRender) {

const imgHTML = imageArr.map (elem =>
`<a href="${elem.largeImageURL}">
<div class="photo-card">

<img src="${elem.webformatURL}" alt="${elem.tags}" loading="lazy" class="card-img"/>

<div class="info">
  <p class="info-item">
    <b>Likes</b>
    <span>${elem.likes}</span>
  </p>
  <p class="info-item">
    <b>Views</b>
    <span>${elem.views}</span>
  </p>
  <p class="info-item">
    <b>Comments</b>
    <span>${elem.comments}</span>
  </p>
  <p class="info-item">
    <b>Downloads</b>
    <span>${elem.downloads}</span>
  </p>
</div>
</div>
</a>`    
).join("");

// console.log(imgHTML);

if (firstRender) {
  collectionElement.innerHTML = "";
  collectionElement.innerHTML = imgHTML;
} else if (!firstRender){
  collectionElement.insertAdjacentHTML('beforeend', imgHTML);
}

};