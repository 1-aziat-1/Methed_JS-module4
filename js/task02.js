console.log('----------------------------------2-----------------------------------');
{
  const generateNumber = (n,min = 0,max = 0) => {
    let arr = [];
  
    for (let i = 0; i<n; i++) {
      arr.push( Math.round(Math.random() * (max-min) + min));
    }
    return arr;
  };

  console.log(generateNumber(5,30,32));
}