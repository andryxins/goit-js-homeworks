'use strict';

const input = document.querySelector('#controls>input');
const submitBtn = document.querySelector('button[data-action="render"]');
const clearBtn = document.querySelector('button[data-action="destroy"]');
const boxes = document.querySelector('#boxes');
submitBtn.addEventListener('click', () => createBoxes(input.value));
clearBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  let numberOfBox = 0;
  let size = 30;
  let resaltBoxes = '';
  while (numberOfBox < Number(amount)) {
    const backgroundColor = `rgb(${Math.floor(
      Math.random() * 255,
    )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255,
    )})`;
    const newBox = `<div style="background-color: ${backgroundColor}; width: ${size}px; height: ${size}px;"></div>`;
    resaltBoxes += newBox;
    size += 10;
    numberOfBox += 1;
  }
  boxes.insertAdjacentHTML('beforeend', resaltBoxes);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}
