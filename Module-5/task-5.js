'use strict';

class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, isOn: ${car._isOn}, distance: ${car._distance}, price: ${car._price}`,
    );
  }

  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this._speed = speed;
    this._price = price;
    this._maxSpeed = maxSpeed;
    this._isOn = isOn;
    this._distance = distance;
  }

  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  turnOn() {
    if (!this._isOn) this._isOn = true;
  }
  turnOff() {
    if (this._isOn) {
      this._isOn = false;
      this._speed = 0;
    }
  }
  accelerate(value) {
    value + this._speed <= this._maxSpeed
      ? (this._speed += value)
      : (this._speed = this._maxSpeed);
  }
  decelerate(value) {
    if (value <= this._speed) this._speed -= value;
  }
  drive(hours) {
    if (this._isOn) this._distance += hours * this._speed;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
