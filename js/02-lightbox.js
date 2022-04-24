import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageGallery = {
    images: document.querySelector('.gallery'),
};

imageGallery.images.innerHTML = createListOfImages(galleryItems);

imageGallery.images.addEventListener('click', (event) => {
    event.preventDefault();
    if(event.target.nodeName !== "IMG"){
        return;
    }
    const lightbox = new SimpleLightbox('.gallery a', { });
    
    lightbox.options.captionDelay =  250;
    lightbox.options.captionsData = "alt";  
    console.log(lightbox.options.captionDelay);
} );

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