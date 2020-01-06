import listCountryTamplate from './../tamplates/list-country-tamplate.hbs';
import countryTemplate from './../tamplates/country-template.hbs';

function renderListMarkUp(arr, template = listCountryTamplate) {
  return arr.map(item => template(item)).join('');
}

function renderSingleMarkUp(arr, template = countryTemplate) {
  return template(arr[0]);
}

export { renderListMarkUp, renderSingleMarkUp };
