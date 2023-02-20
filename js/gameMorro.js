'use strict';

(() => {
  const figure = ['камень', 'ножницы', 'бумага'];
  let person = 'player';

  const getRandomInclusive = (max = 3) =>
    Math.floor(Math.random() * (max));
  const getFigure = (step) => figure.findIndex(item => item.startsWith(step));

  const closeGame = (start) => {
    if (confirm('Вы точно хотите завершить игру?')) {
      return alert(`Досвидание!`);
    }
    return start();
  };

  const game = () => function start() {
    const userInput = prompt('камень, ножницы или бумага?');

    if (userInput === null) {
      return closeGame(start);
    }

    if (userInput === '') {
      alert('Вы ничего не ввели!');
      return start();
    }

    const userStep = getFigure(userInput.toLowerCase());

    if (userStep === -1) {
      alert('Вы ввели не коректные данные!');
      return start();
    }

    const compStep = getRandomInclusive();
    if (userStep === compStep) {
      alert(`Ничья!`);
      return start();
    }
    if ((userStep === 0 && compStep === 1) ||
        (userStep === 2 && compStep === 0) ||
        (userStep === 1 && compStep === 2)) {
      alert('Вы ходите первым!');
      return person = 'player';
    } else {
      alert('Компьютер ходит первым!');
      return person = 'comp';
    }
  };

  window.Morro = game;
})();
