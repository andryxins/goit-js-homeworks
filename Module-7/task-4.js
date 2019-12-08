'use strict';

const counter = document.querySelector('#value');
let counterValue = 0;
counter.textContent = counterValue;
const increment = document.querySelector('button[data-action="increment"]');
const decrement = document.querySelector('button[data-action="decrement"]');

increment.addEventListener('click', handleCounterIncrement);
decrement.addEventListener('click', handleCounterDecrement);

function handleCounterIncrement() {
  counterValue += 1;
  counter.textContent = counterValue;
}

function handleCounterDecrement() {
  counterValue -= 1;
  counter.textContent = counterValue;
}
