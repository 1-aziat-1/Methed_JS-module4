const gameFunc = () => {
  min = prompt('Введите минимальное число диапозона');
  max = prompt('Введите максимальное число диапозона');
  const arr = [];
  stopCheck = Math.ceil((+max - +min)*0.3);

  const checkArr = (numUser) => {
    console.log(numUser);
    if (arr.includes(+numUser)) {
      alert('Вы вводили это число, попробуйте еще раз');
      return start();
    } 
    arr.push(+numUser);
  };

  const start = () => {
    numUser = prompt('Введите цифру');
    if(numUser === null) {
      return alert('Игра закончена');
    }
    if (isNaN(numUser)) {
        alert('Вы ввели не число, попробуйте еще раз');
        return start();
    }
    if(stopCheck <= arr.length+1) {
      if(confirm(`Лимит попыток привышен, загаданное число ${numRandom}, хотите сыграть еще раз?`)){
        return gameFunc();
      }else {
        return alert('Игра закончена');
      }
    }
    if (+numUser === numRandom) {
      console.log(arr);
        if(confirm('вы угадали, хотите сыграть еще раз?')){
          return gameFunc();
        }
        return alert('Игра закончена');
    }
    if (+numUser > numRandom) {
          checkArr(numUser);
          alert('Веденое число больше');
          return start();
    }
    if (+numUser < numRandom) {
          checkArr(numUser);
          alert('Веденое число меньше');
          return start();
    }
  };

  if (!isNaN(min) && !isNaN(max) && (+max > +min) && (min !== null) && (max !== null)){
    numRandom = Math.round(Math.random() * ((+max) - (+min)) + (+min));
    console.log(numRandom);
    console.log(max + min);
    start();
  } else {
    if(confirm('Введены не коректные данные, попробовать еще раз или закончить игру?')) {
      return gameFunc();
    } else {
      return alert('Игра закончена');
    }
  }
};

gameFunc();