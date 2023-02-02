{
  const total = +prompt('Ваш доход:');

  if (total <= 15000) {
    console.log(Math.round(total * 0.13));
  }else if (total > 15000 && total <= 50000) {
    console.log(Math.round(total * 0.2));
  } else if (total > 50000) {
    console.log(Math.round(total * 0.3));
  }
}