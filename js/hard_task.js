console.log('---------------------------hard_task-----------------------------------');

{const allCashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

const getAveragePriceGoods = (allCashbox) => {
  return Math.round(allCashbox.map(item => {
    return Math.round(item[1]/item[0])
  }).reduce((acum, item) => {
    return acum + item;
  })/allCashbox.length);
};

console.log(getAveragePriceGoods(allCashbox));}