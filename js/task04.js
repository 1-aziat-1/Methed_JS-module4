console.log('----------------------------------4-----------------------------------');
{
  const whatYear = (min,max) => {
    let arr = [];
    let fmin = min>max? max : min;
    let fmax = max<min? min : max;
    let i = fmin<0? 0 : fmin;
    for (; i<=fmax; i++){
      if(((i % 4 == 0) && (i % 100 != 0)) || (i % 400 == 0)){
        arr.push(i);
      }
    }
    return arr;
  };

  console.log(whatYear(2000,1984));
}