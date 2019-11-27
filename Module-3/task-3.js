'use strict';

const findBestEmployee = obj => {
  const keys = Object.keys(obj);
  let bestEmployee;
  let bestResaltOfEmployee = 0;
  for (const key of keys) {
    if (obj[key] > bestResaltOfEmployee) {
      bestResaltOfEmployee = obj[key];
      bestEmployee = key;
    }
  }
  return bestEmployee;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
