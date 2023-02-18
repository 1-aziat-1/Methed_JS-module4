'use strict';

(() => {
  const figure = ['камень', 'ножницы', 'бумага'];
  let person = 'playre';

  const getRandomIntinclusive = (max = 3) =>
    Math.floor(Math.random() * (max));
  // eslint-disable-next-line max-len
  const getFigure = (step) => figure.findIndex(item => item.startsWith(step));

  const closeGame = (start) => {
    if (confirm('Вы точно хотите завершить игру?')) {
      return alert(`Досвидание!`);
    }
    return start();
  };

  const repeatGame = (lang, start, result) => {
    if (confirm(lang.repeatTitle)) {
      return start();
    }
    return closeGame(lang, start, result);
  };

  const game = () => function start() {
    // eslint-disable-next-line max-len
    const userInput = prompt('камень, ножницы или бумага?');

    if (userInput === null) {
      return closeGame(start);
    }

    const userStep = getFigure(userInput.toLowerCase());

    if (userStep === -1) {
      alert('Вы ввели не коректные данные!');
      return start();
    }

    const compStep = getRandomIntinclusive();

    if ((userStep === 0 && compStep === 0) ||
      (userStep === 1 && compStep === 1) ||
      (userStep === 2 && compStep === 2)
    ) {
      alert(`Ничья!`);
      return start();
    }
    if (userStep === 0 && compStep === 1) {
      alert('Вы ходите первым!');
      return person = 'playre';
    }
    if (userStep === 1 && compStep === 0) {
      alert('Компьютер ходит первым!');
      return person = 'comp';
    }
    if (userStep === 2 && compStep === 0) {
      alert('Вы ходите первым!');
      return person = 'playre';
    }
    if (userStep === 0 && compStep === 2) {
      alert('Компьютер ходит первым!');
      return person = 'comp';
    }
    if (userStep === 1 && compStep === 2) {
      alert('Вы ходите первым!');
      return person = 'playre';
    }
    if (userStep === 2 && compStep === 1) {
      alert('Компьютер ходит первым!');
      return person = 'comp';
    }
  };

  window.Morro = game;
})();
