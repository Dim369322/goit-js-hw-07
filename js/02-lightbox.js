import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageGallery = {
    images: document.querySelector('.gallery'),
};

imageGallery.images.innerHTML = createListOfImages(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', { });

lightbox.options.captionDelay =  250;
lightbox.options.captionsData = "alt";  

function createListOfImages (items) {
    return items.map(({preview , original, description}) => `
    <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  `)
  .join('');
}