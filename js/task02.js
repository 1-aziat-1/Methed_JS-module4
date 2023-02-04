const modStr = (str) => {
  arr = str.split(' ');
  return arr[0][0].toUpperCase() + arr[0].slice(1) + ' ' + arr[1].toLowerCase();
};

console.log(modStr("привет Мир"));