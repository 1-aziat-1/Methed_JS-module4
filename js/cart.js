'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 1,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  set setDiscount(promocode) {
    promocode === 'METHED' ? this.discount = 1.15 : 1;
    promocode === 'NEWYEAR' ? this.discount = 1.21 : 1;
  },

  add(nameItem, priceItem, countItem = 1) {
    const objItem = {
      nameItem,
      priceItem,
      countItem,
    };

    this.items.push(objItem);
    this.increaseCount(countItem);
  },

  increaseCount(num) {
    return this.count += num;
  },

// Почему надо округлять? почему значение не целое?

  calculateItemPrice() {
    return Math.round(this.items.reduce((acc, curent) =>
      acc + (curent.priceItem * curent.countItem),
    0) * this.discount);
  },


  clear() {
    this.items.length = 0;
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    this.items.forEach(item => {
      console.log(`${item.nameItem}: ${JSON.stringify(item)}`);
    });
    console.log(`Всего товаров на сумму: ${this.totalPrice} рублей`);
  },
};
cart.setDiscount = 'NEWYEAR';
cart.add('ps', 90000, 8);


cart.print();


