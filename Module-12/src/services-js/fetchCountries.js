'use strict';

export default function(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url)
    .then(responce => (responce.ok ? responce.json() : Promise.reject()))
    .then(data => data);
}
