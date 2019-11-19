'use strict';

let credits = 23580;
const pricePerDroid = 3000;
const userOrder = prompt('How many Drons do you want?');
let message = 'Отменено пользователем!';
let totalPrice;

if (userOrder !== null) {
  totalPrice = Number(userOrder) * pricePerDroid;
  credits -= totalPrice;
  credits < 0
    ? (message = 'Недостаточно средств на счету!')
    : (message = `Вы купили ${userOrder} дроидов, на счету осталось ${credits} кредитов.`);
}
console.log(message);
