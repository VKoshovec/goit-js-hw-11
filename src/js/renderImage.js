export function renderImage (imageArr, collectionElement) {
  // largeImageURL

const imgHTML = imageArr.map(elem =>
`<div class="photo-card">
<a href="${elem.largeImageURL}">
<img src="${elem.webformatURL}" alt="${elem.tags}" loading="lazy" class="card-img"/>
</a>
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
</div>`    
).join("");

console.log(imgHTML);
collectionElement.innerHTML = imgHTML;

};