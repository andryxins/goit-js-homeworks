'use strict';
import images from '../gallery-items.js';

const galleryList = document.querySelector('.js-gallery');
const markUp = images.map(image => renderGalleryItems(image)).join('');
galleryList.insertAdjacentHTML('beforeend', markUp);
const options = {
  threshold: 0.01,
  rootMargin: '70px',
};
const observer = new IntersectionObserver(onEntry, options);
const galleryItems = document.querySelectorAll('.gallery__item');
galleryItems.forEach(item => observer.observe(item));

function renderGalleryItems({ preview, original, description }) {
  return `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="" data-preview="${preview}" data-source="${original}" alt="${description}"/></a></li>`;
}
function onEntry(entries, self) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const lazyImg = entry.target.querySelector('.gallery__image');
      lazyImg.src = lazyImg.dataset.preview;
      self.unobserve(entry.target);
    }
  });
}
