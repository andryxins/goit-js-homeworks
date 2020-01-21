'use strict';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    (this.selector = document.querySelector(selector)),
      (this.targetDate = targetDate.getTime()),
      (this.daysLeft = this.selector.querySelector('span[data-value="days"]')),
      (this.hoursLeft = this.selector.querySelector(
        'span[data-value="hours"]',
      )),
      (this.minutesLeft = this.selector.querySelector(
        'span[data-value="mins"]',
      )),
      (this.secondsLeft = this.selector.querySelector(
        'span[data-value="secs"]',
      )),
      (this.timerId = 0);
  }

  formattingDate(item) {
    return String(item).padStart(2, '0');
  }

  updateClockFace() {
    const timeLeft = this.targetDate - Date.now();
    if (timeLeft < 0) return clearInterval(this.timerId);
    this.daysLeft.textContent = this.formattingDate(
      Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
    );
    this.hoursLeft.textContent = this.formattingDate(
      Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    this.minutesLeft.textContent = this.formattingDate(
      Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
    );
    this.secondsLeft.textContent = this.formattingDate(
      Math.floor((timeLeft % (1000 * 60)) / 1000),
    );
  }
  start() {
    this.updateClockFace();
    this.timerId = setInterval(() => {
      this.updateClockFace();
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2020'),
});

timer.start();

const timer2 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('Mar 28, 2020'),
});

timer2.start();
