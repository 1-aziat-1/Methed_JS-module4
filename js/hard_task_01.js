const nod  = (a,b) => {
  while (a!==0 && b!==0) {
    if (a>b) {
      a = a % b;
    }else {
      b= b % a;
    }
  }
  return a+b;
}


console.log('nod(36,12): ', nod(18,30));
