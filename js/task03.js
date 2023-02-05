console.log('----------------------------------3-----------------------------------');

{const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (prefix,[...names]) => {
  let filterArr = names.map(item => {
    return `${prefix} ${item}`
  });

  return  filterArr;
};

console.log(addPrefix('Mr', names));}