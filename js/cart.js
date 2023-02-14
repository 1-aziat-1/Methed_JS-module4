const cart = {
  items: [],
  count: 0,

  get totalPrice() {
    return this.calculateItemPrice();
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
    return this.count+=num;
  },

  calculateItemPrice() {
    return this.items.reduce((acc,curent) => acc + (curent.priceItem*curent.countItem),0);
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

cart.add ('ps', 90000 , 8);
cart.add ('book', 100 , 2);

cart.print();




