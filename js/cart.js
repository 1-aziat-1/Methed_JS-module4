const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() { 
    return this.totalPrice;
  },

  add(nameItem, priceItem, countItem = 1) {
    const objItem = {
      nameItem,
      priceItem,
      countItem,
    };

    this.items.push(objItem);
    this.increaseCount(countItem);
    this.calculateItemPrice();
  },

  increaseCount(num) {
    return this.count+=num;
  },

  calculateItemPrice() {
    this.totalPrice = this.items.reduce((acc,curent) => acc + (curent.priceItem*curent.countItem),0);
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
    console.log(`Всего товаров на сумму: ${this.getTotalPrice()} рублей`);
  }, 
};

cart.add ('ps', 90000 , 8);
cart.add ('car', 120000, 1);
cart.add ('picture', 2000, 3);

cart.print();


