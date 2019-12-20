'use strict';
import menuItems from '../menu-data/menu-items';
import menuItemTemplate from '../templates/menu-item-tamplate.hbs';

const refs = {
  menuList: document.querySelector('.js-menu'),
};

const createMarkUp = (tamplate, arrOfItems, parent) => {
  const markUp = arrOfItems.map(item => tamplate(item)).join('');
  parent.insertAdjacentHTML('beforeend', markUp);
};

createMarkUp(menuItemTemplate, menuItems, refs.menuList);
