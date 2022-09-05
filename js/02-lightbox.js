import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBoxEl = document.querySelector('.gallery');

galleryBoxEl.innerHTML = galleryItems
  .map(el => {
    return `<div class="gallery__item">
  <a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>
</div>`;
  })
  .join('');

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
