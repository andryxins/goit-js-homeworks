'use strict';

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число');
  if (input === null) break;
  isNaN(input)
    ? alert('Было введено не число, попробуйте еще раз')
    : numbers.push(Number(input));
}

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  alert(`Общая сумма чисел равна ${total}`);
}
