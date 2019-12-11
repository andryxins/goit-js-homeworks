'use strict';
const lightBox = document.querySelector('.js-lightbox');
const lightBoxImage = document.querySelector('.lightbox__image');
const closeButton = document.querySelector(
  'button[data-action="close-lightbox"]',
);
closeButton.addEventListener('click', closeLightBox);

function closeLightBox() {
  lightBoxImage.src = '';
  lightBoxImage.alt = '';
  lightBox.classList.remove('is-open');
}
