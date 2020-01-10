'use strict';
import PNotify from '../../node_modules/pnotify/dist/es/PNotify.js';
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
    fetchCountries(value)
      .then(data => {
        if (data.length <= 10 && data.length >= 2)
          return this.renderinglist(data);
        if (data.length === 1) return this.renderingCountry(data);
        return PNotify.error({
          text: 'To many matches found! Please, enter more specific query',
          delay: 3000,
        });
      })
      .catch(() =>
        PNotify.error({
          text:
            'Sory, we could not find anything. Try to enter more specific query.',
          delay: 3000,
        }),
      );
  },
  renderinglist(data) {
    refs.output.insertAdjacentHTML('beforeend', renderListMarkUp(data));
  },
  renderingCountry(data) {
    refs.output.insertAdjacentHTML('beforeend', renderSingleMarkUp(data));
  },
};

refs.input.addEventListener(
  'input',
  debounce(() => actions.countriesRequest(refs.input.value), 500),
);
