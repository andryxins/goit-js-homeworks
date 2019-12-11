'use strict';

const lightBox = document.querySelector('.js-lightbox');
const lightBoxImage = lightBox.querySelector('.lightbox__image');

const imagesList = document.querySelector('.js-gallery');
imagesList.addEventListener('click', openLightBox);

function openLightBox(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) return;
  const currentImage = event.target;
  lightBox.classList.add('is-open');
  lightBoxImage.src = currentImage.dataset.source;
  lightBoxImage.alt = currentImage.alt;
}
