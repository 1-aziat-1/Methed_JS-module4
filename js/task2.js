'use strict';
console.log('-------------task2------------');

const funcArr = (arr = []) => {
  const numRandom = Math.round(Math.random() * 10);
  arr.push(numRandom);
  const sumArr = arr.reduce((acc, item) => acc + item, 0);
  if (sumArr <= 50) {
    return funcArr(arr);
  } else {
    console.log(sumArr);
    return arr;
  }
};
console.log(funcArr([]));

