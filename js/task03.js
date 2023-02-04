const calculate = (allCosts, countItem, discount = '') => {
  if (countItem > 10) {
    allCosts =  allCosts * 0.97;
  }
  if (allCosts > 30000) {
    allCosts = allCosts * 0.85;
  }
  if (discount === 'METHED') {
    allCosts = allCosts * 0.9;
  }
  if (discount === 'G3H2Z1' && allCosts > 2000) {
    allCosts -= 500;
  }
  return allCosts;
};

console.log(calculate(31000, 11, 'G3H2Z1'));