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
    if (userStep === compStep) {
      alert(`Ничья!`);
      return start();
    }
    if ((userStep === 0 && compStep === 1) ||
        (userStep === 2 && compStep === 0) ||
        (userStep === 1 && compStep === 2)) {
      alert('Вы ходите первым!');
      return person = 'playre';
    } else {
      alert('Компьютер ходит первым!');
      return person = 'comp';
    }
  };

  window.Morro = game;
})();
