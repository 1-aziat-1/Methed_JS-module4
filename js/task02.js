console.log('----------------------------------2-----------------------------------');
{const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (allCashbox) => {
  const summArr = allCashbox.reduce((acum, item) => {
    return acum + item;
  });

  return Math.floor( summArr / allCashbox.length);
};

console.log('средний чек: ', getAverageValue(allCashbox));
}