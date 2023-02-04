const a = +prompt('первое число');
const b = +prompt('второе число'); 

const min = (a,b) => {
  return a > b? b : a;
};

console.log(min(a,b));
