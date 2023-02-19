'use strict';

(() => {
  const getRandomIvenOdd = (max = 2) =>
    Math.floor(Math.random() * max);

  const getRandomIntInclusive = (min = 1, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const closeGame = (start) => {
    if (confirm(`Вы точно хотите покинуть игру, не доиграв её?`)) {
      return alert(`Досвидание`);
    }
    return start();
  };

  const loseGame = (result, Num) => {
    console.log(result);
    result.playre -= Num;
    result.computer += Num;
    if (result.playre <= 0) {
      alert(`Вы проиграли, с позором`);
      if (confirm(`Хотите поиграть еще?`)) {
        return window.Marble()();
      }
      return alert('Досвидание');
    }
    // eslint-disable-next-line max-len
    alert(`Вы не угадали!\nУ вас шарик(а/ов): ${result.playre}\nУ компьютера шарик(а/ов): ${result.computer}`);
    return result;
  };

  const winGame = (result, Num) => {
    console.log(result);
    result.playre += Num;
    result.computer -= Num;
    if (result.computer <= 0) {
      alert(`Вы выиграли, красавчик`);
      if (confirm(`Хотите поиграть еще?`)) {
        return window.Marble()();
      }
      return alert('Досвидание');
    }
    // eslint-disable-next-line max-len
    alert(`Вы угадали!\nУ вас шарик(а/ов): ${result.playre}\nУ компьютера шарик(а/ов): ${result.computer}`);
    return result;
  };


  const game = (person = 'comp') => {
    const persoOne = window.Morro()();
    if (persoOne === undefined) {
      return;
    }
    person = persoOne;
    const result = {
      playre: 5,
      computer: 5,
    };

    // eslint-disable-next-line max-len
    alert(`Игра начинается!\nУ вас ${result.playre}\nУ компьютера ${result.computer}`);
    return function start() {
      if (person === 'playre') {
        const enterPlayre = prompt(`Загадайте число от 1 до ${result.playre}`);
        const playreNum = Number(enterPlayre);

        if (enterPlayre === null) {
          return closeGame(start);
        }

        // eslint-disable-next-line max-len
        if (Number.isNaN(parseFloat(playreNum)) || (playreNum > result.playre) || (playreNum < 1)) {
          // eslint-disable-next-line max-len
          alert(`Вы ввели не число или не попали в диапазон от 1 до ${result.playre}`);
          return start();
        }

        const compNum = getRandomIvenOdd();

        if (playreNum % 2 === compNum) {
          person = 'comp';
          if (loseGame(result, playreNum) === undefined) return;
          return start();
        } else {
          person = 'comp';
          if (winGame(result, playreNum) === undefined) return;
          return start();
        }
      }

      if (person === 'comp') {
        const compInt = getRandomIntInclusive(1, result.computer);
        // eslint-disable-next-line max-len
        const playreOddIven = confirm('Компьютер загадал четное число?') ? 0 : 1;

        if (compInt % 2 === playreOddIven) {
          person = 'playre';
          if (winGame(result, compInt) === undefined) return;
          return start();
        } else {
          person = 'playre';
          if (loseGame(result, compInt) === undefined) return;
          return start();
        }
      }
    };
  };

  window.Marble = game;
})();
