'use strict';

(() => {
  const getRandomEvenOdd = (max = 2) =>
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
    result.player -= Num;
    result.computer += Num;
    if (result.player <= 0) {
      alert(`Вы проиграли, с позором`);
      if (confirm(`Хотите поиграть еще?`)) {
        return window.Marble()();
      }
      return alert('Досвидание');
    }
    alert(`Вы не угадали!\nУ вас шарик(а/ов): ${result.player}\nУ компьютера шарик(а/ов): ${result.computer}`);
    return result;
  };

  const winGame = (result, Num) => {
    console.log(result);
    result.player += Num;
    result.computer -= Num;
    if (result.computer <= 0) {
      alert(`Вы выиграли, красавчик`);
      if (confirm(`Хотите поиграть еще?`)) {
        return window.Marble()();
      }
      return alert('Досвидание');
    }
    alert(`Вы угадали!\nУ вас шарик(а/ов): ${result.player}\nУ компьютера шарик(а/ов): ${result.computer}`);
    return result;
  };


  const game = (person = 'comp') => {
    const personOne = window.Morro()();
    if (personOne === undefined) {
      return;
    }
    person = personOne;
    const result = {
      player: 5,
      computer: 5,
    };

    alert(`Игра начинается!\nУ вас ${result.player}\nУ компьютера ${result.computer}`);
    return function start() {
      if (person === 'player') {
        const enterPlayer = prompt(`Загадайте число от 1 до ${result.player}`);
        const playerNum = Number(enterPlayer);

        if (enterPlayer === null) {
          return closeGame(start);
        }

        if (Number.isNaN(parseFloat(playerNum)) || (playerNum > result.player) || (playerNum < 1)) {
          alert(`Вы ввели не число или не попали в диапазон от 1 до ${result.player}`);
          return start();
        }

        const compNum = getRandomEvenOdd();

        if (playerNum % 2 === compNum) {
          person = 'comp';
          if (loseGame(result, playerNum) === undefined) return;
          return start();
        } else {
          person = 'comp';
          if (winGame(result, playerNum) === undefined) return;
          return start();
        }
      }

      if (person === 'comp') {
        const compInt = getRandomIntInclusive(1, result.computer);
        const playerOddEven = confirm('Компьютер загадал четное число?') ? 0 : 1;

        if (compInt % 2 === playerOddEven) {
          person = 'player';
          if (winGame(result, compInt) === undefined) return;
          return start();
        } else {
          person = 'player';
          if (loseGame(result, compInt) === undefined) return;
          return start();
        }
      }
    };
  };

  window.Marble = game;
})();
