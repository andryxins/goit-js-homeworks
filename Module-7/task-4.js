'use strict';

// const counter = document.querySelector('#value');
// let counterValue = 0;
// counter.textContent = counterValue;
// const increment = document.querySelector('button[data-action="increment"]');
// const decrement = document.querySelector('button[data-action="decrement"]');

// increment.addEventListener('click', handleCounterIncrement);
// decrement.addEventListener('click', handleCounterDecrement);

// function handleCounterIncrement() {
//   counterValue += 1;
//   counter.textContent = counterValue;
// }

// function handleCounterDecrement() {
//   counterValue -= 1;
//   counter.textContent = counterValue;
// }

const refs = {
  value: document.querySelector('#value'),
  counter: document.querySelector('#counter'),
};

const actions = {
  state: {
    value: 0,
  },
  decrement() {
    this.state.value -= 1;
  },
  increment() {
    this.state.value += 1;
  },
};

const changeValue = ({ target }) => {
  actions[target.dataset.action]();
  refs.value.textContent = actions.state.value;
};

refs.counter.addEventListener('click', changeValue);
