export function renderImage (imageArr, collectionElement) {
  // largeImageURL

const imgHTML = imageArr.map(elem =>
`<div class="photo-card">
<img src="${elem.webformatURL}" alt="${elem.tags}" loading="lazy" class="card-img"/>
<div class="info">
  <p class="info-item">
    <b>Likes</b>
    <p>${elem.likes}</p>
  </p>
  <p class="info-item">
    <b>Views</b>
    <p>${elem.views}</p>
  </p>
  <p class="info-item">
    <b>Comments</b>
    <p>${elem.comments}</p>
  </p>
  <p class="info-item">
    <b>Downloads</b>
    <p>${elem.downloads}</p>
  </p>
</div>
</div>`    
).join("");

console.log(imgHTML);
collectionElement.innerHTML = imgHTML;

};