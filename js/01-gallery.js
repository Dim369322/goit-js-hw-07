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
    const modal = basicLightbox.create(`
    <img src="${event.target.dataset.source}" >`)

    modal.show({onClose: onEscPress(modal)});
});

function createListOfImages (items) {
    return items.map(({preview , original, description}) => `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
  `).join('');
}

function onEscPress(modal){
    window.addEventListener('keydown', function (e) {
        if(e.code === "Escape") modal.close();
    });
}