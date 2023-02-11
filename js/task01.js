console.log('----------------------------------1-----------------------------------');
{
  const generateNumber = (n) => {
    let arr = [];
    for (let i = 0; i<n; i++) {
      arr.push( Math.round(Math.random() * 100));
    }
    return arr;
  };

  console.log(generateNumber(5));
}