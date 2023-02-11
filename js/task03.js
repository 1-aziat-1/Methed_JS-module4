console.log('----------------------------------3-----------------------------------');

{
  const generateNumber = (n, min = 0, max = 0, param) => {
    let arr = [];
    let fparam = param === 'even'? 0 : 1;
    for (let i = 0; i<n; i++) {
      bool = true;
      let random = Math.round(Math.random() * (max-min) + min);
      while (bool) {
        if (random % 2 === fparam) {
          bool = false;
          arr.push(random);
        } else {
          random = Math.round(Math.random() * (max-min) + min);
        }
      }
    }
    return arr;
  };

  console.log(generateNumber(5,0,100,'even'));
}