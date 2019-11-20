'use strict';

const total = 100;
const ordered = 50;
let message;
ordered > total
  ? (message = 'На складе недостаточно твоаров!')
  : (message = 'Заказ оформлен, с вами свяжется менеджер');
console.log(message);
