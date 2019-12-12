'use strict';
import images from '../gallery-items.js';
const lightBox = document.querySelector('.js-lightbox');
const lightBoxImage = document.querySelector('.lightbox__image');
const lightboxContent = document.querySelector('.lightbox__content');
const closeButton = document.querySelector(
  'button[data-action="close-lightbox"]',
);
const imagesList = document.querySelector('.js-gallery');

const actions = {
  openLightBox(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) return;
    const currentImage = event.target;
    lightBox.classList.add('is-open');
    lightBoxImage.src = currentImage.dataset.source;
    lightBoxImage.alt = currentImage.alt;
  },
  closeLightBox() {
    if (lightBox.classList.contains('is-open')) {
      lightBoxImage.src = '';
      lightBoxImage.alt = '';
      lightBox.classList.remove('is-open');
    }
  },
  swithingImagesByControls(event) {
    if (
      lightBox.classList.contains('is-open') &&
      (event.code === 'ArrowRight' || event.code === 'ArrowLeft')
    ) {
      const currentIdx = images.findIndex(
        item => item.original === lightBoxImage.src,
      );
      let nextImg = 0;
      if (event.code === 'ArrowRight') {
        nextImg += (currentIdx + 1) % images.length;
      }
      if (event.code === 'ArrowLeft') {
        nextImg += currentIdx > 0 ? currentIdx - 1 : Number(images.length - 1);
      }
      lightBoxImage.src = images[nextImg].original;
      lightBoxImage.alt = images[nextImg].description;
    }
  },
  closeLightBoxByOverLay(event) {
    if (event.currentTarget === event.target) this.closeLightBox();
  },
  closeLightBoxByEsc(event) {
    if (event.code === 'Escape') this.closeLightBox();
  },
};

imagesList.addEventListener('click', actions.openLightBox);
closeButton.addEventListener('click', actions.closeLightBox);
document.addEventListener('keyup', actions.closeLightBoxByEsc.bind(actions));
document.addEventListener('keyup', actions.swithingImagesByControls);
lightboxContent.addEventListener(
  'click',
  actions.closeLightBoxByOverLay.bind(actions),
);
