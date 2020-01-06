'use strict';
import { renderListMarkUp, renderSingleMarkUp } from './search-country-render';
import fetchCountries from '../services-js/fetchCountries';
const debounce = require('lodash.debounce');

const refs = {
  input: document.querySelector('#input-user-country'),
  output: document.querySelector('.output-js'),
};

const actions = {
  countriesRequest(value) {
    refs.output.innerHTML = '';
    if (!value) return;
    fetchCountries(value).then(data => {
      if (data.length < 10 && data.length > 2) this.renderinglist(data);
      if (data.length === 1) this.renderingCountry(data);
    });
  },
  renderinglist(data) {
    refs.output.insertAdjacentHTML(
      'beforeend',
      '<ul class="output__country-list">' + renderListMarkUp(data) + '</ul>',
    );
  },
  renderingCountry(data) {
    refs.output.insertAdjacentHTML('beforeend', renderSingleMarkUp(data));
  },
};

refs.input.addEventListener(
  'input',
  debounce(() => actions.countriesRequest(refs.input.value), 500),
);
