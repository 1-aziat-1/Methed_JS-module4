const isPrime = (a) => {
  for (let i = 2; i<a; i++) {
    if (a%i===0) return `${a} - число непростое`;
  }
  return `${a} - число простое`;
};

console.log(isPrime(13));

console.log('----------------------------------3-----------------------------------');