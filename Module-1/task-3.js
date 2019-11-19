'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message = 'Отменено пользователем';
const userAutorisation = prompt('Введите пароль :');

if (userAutorisation !== null) {
  ADMIN_PASSWORD === userAutorisation
    ? (message = 'Добро пожаловать!')
    : (message = 'Доступ запрещен, неверный пароль!');
}

alert(message);
