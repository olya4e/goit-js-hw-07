import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryBoxEl = document.querySelector('.gallery');

const makeGallery = galleryItems => {
  galleryBoxEl.innerHTML = galleryItems
    .map(el => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`;
    })
    .join('');
};
makeGallery(galleryItems);

const onGalleryItemClick = event => {
  const { target } = event;
  event.preventDefault();
  if (target.nodeName !== 'IMG') {
    return;
  }
  const largeImg = target.dataset.source;

  const onPressEsc = event => {
    if (event.code === 'Escape') {
      modal.close();
    }
  };

  const modal = basicLightbox.create(`<img src="${largeImg}"> width="1280" height="auto"`, {
    onShow: () => {
      window.addEventListener('keydown', onPressEsc);
    },
    onclose: () => {
      window.removeEventListener('keydown', onPressEsc);
    },
  });
  modal.show();
};

galleryBoxEl.addEventListener('click', onGalleryItemClick);
