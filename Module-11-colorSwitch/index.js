'use strict';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  body: document.querySelector('body'),
  controls: document.querySelector('.container'),
};

const actions = {
  isOn: false,
  timerId: 0,
  start() {
    if (!this.isOn) {
      let changeColorInterval = setInterval(this.changeColor, 1000);
      this.isOn = true;
      this.timerId = changeColorInterval;
    }
  },
  stop() {
    if (this.isOn) {
      clearInterval(this.timerId);
      this.isOn = false;
    }
  },
  changeColor() {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(1, colors.length)];
  },
};

refs.controls.addEventListener('click', e => {
  if (e.target.dataset.action) actions[e.target.dataset.action]();
});
