'use strict';

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    return { amount, type };
  },

  deposit(amount) {
    this.balance += amount;
    const type = Transaction.DEPOSIT;
    const transaction = this.createTransaction(amount, type);
    transaction.id = '$d' + amount;
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    if (amount > this.balance) return console.log('Недостаточно средств!');
    this.balance -= amount;
    const type = Transaction.WITHDRAW;
    const transaction = this.createTransaction(amount, type);
    transaction.id = '$w' + amount;
    this.transactions.push(transaction);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    for (const item of this.transactions) {
      if (item.id === id) return item;
    }
  },

  getTransactionTotal(type) {
    let resalt = 0;
    for (const item of this.transactions) {
      if (item.type === type) {
        resalt += item.amount;
      }
    }
    return resalt;
  },
};

account.deposit(3960);
account.deposit(5600);
account.withdraw(1500);
account.withdraw(1680);
console.log(account.getBalance());
console.table(account.transactions);
console.table(account.getTransactionDetails('$d5600'));
console.log(account.getTransactionTotal('withdraw'));
