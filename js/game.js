'use strict';

(() => {
  const langObj = {
    'RU': {
      value: ['камень', 'ножницы', 'бумага'],
      resTitle: 'Результат',
      compTitle: 'Компьютер',
      playerTitle: 'Вы',
      compWin: 'Компьютер победил',
      playerWin: 'Вы победили',
      drawTitle: 'Ничья',
      closeTitle: 'Вы точно хотите покинуть игру?',
      repeatTitle: 'Вы хотите сыграть еще?',
      helloTitle: 'камень, ножницы или бумага?',
      errorTitle: 'Вы ввели не правильное значение!!!',
    },
    'EN': {
      value: ['rock', 'scissors', 'paper'],
      resTitle: 'Result',
      compTitle: 'Computer',
      playerTitle: 'You',
      compWin: 'Computer win',
      playerWin: 'You win',
      drawTitle: 'Draw',
      closeTitle: 'Are you sure you want to leave the game?',
      repeatTitle: 'Do you want to play more?',
      helloTitle: 'rock, scissors, or paper?',
      errorTitle: 'You entered the wrong value!!!',
    },
  };

  const getRandomIntinclusive = (max = 3) =>
    Math.floor(Math.random() * (max));


  // eslint-disable-next-line max-len
  const getFigure = (lang = langObj['RU'].value, step) => lang.findIndex(item => item.startsWith(step));

  const closeGame = (lang, start, {playre, computer}) => {
    if (confirm(lang.closeTitle)) {
      // eslint-disable-next-line max-len
      return alert(`${lang.resTitle}\n ${lang.compTitle}: ${computer}\n ${lang.playerTitle}: ${playre}`);
    }
    return start();
  };

  const repeatGame = (lang, start, result) => {
    if (confirm(lang.repeatTitle)) {
      return start();
    }
    return closeGame(lang, start, result);
  };

  const game = () => {
    const result = {
      playre: 0,
      computer: 0,
    };

    // eslint-disable-next-line max-len
    const language = confirm('Игра будет на русском языке?\nWill the game be in Russian?');
    // eslint-disable-next-line max-len
    const lang = language === false ? langObj['EN'] : langObj['RU'];

    return function start() {
      const userPrompt = prompt(lang.helloTitle);

      if (userPrompt === null) {
        return closeGame(lang, start, result);
      }

      const userStep = getFigure(lang.value, userPrompt.toLowerCase());

      if (userStep === -1) {
        alert(lang.errorTitle);
        return start();
      }
      const compStep = getRandomIntinclusive();

      if ((userStep === 0 && compStep === 0) ||
          (userStep === 1 && compStep === 1) ||
          (userStep === 2 && compStep === 2)
      ) {
        // eslint-disable-next-line max-len
        alert(`${lang.compTitle}: ${lang.value[compStep]}\n${lang.playerTitle}: ${lang.value[userStep]}\n${lang.drawTitle}`);
        return repeatGame(lang, start, result);
      }
      if (userStep === 0 && compStep === 1) {
        result.playre += 1;
        // eslint-disable-next-line max-len
        alert(`${lang.compTitle}: ${lang.value[compStep]}\n${lang.playerTitle}: ${lang.value[userStep]}\n${lang.playerWin}`);
        return repeatGame(lang, start, result);
      }
      if (userStep === 1 && compStep === 0) {
        result.computer += 1;
        // eslint-disable-next-line max-len
        alert(`${lang.compTitle}: ${lang.value[compStep]}\n${lang.playerTitle}: ${lang.value[userStep]}\n${lang.compWin}`);
        return repeatGame(lang, start, result);
      }
      if (userStep === 2 && compStep === 0) {
        result.playre += 1;
        // eslint-disable-next-line max-len
        alert(`${lang.compTitle}: ${lang.value[compStep]}\n${lang.playerTitle}: ${lang.value[userStep]}\n${lang.playerWin}`);
        return repeatGame(lang, start, result);
      }
      if (userStep === 0 && compStep === 2) {
        result.computer += 1;
        // eslint-disable-next-line max-len
        alert(`${lang.compTitle}: ${lang.value[compStep]}\n${lang.playerTitle}: ${lang.value[userStep]}\n${lang.compWin}`);
        return repeatGame(lang, start, result);
      }
      if (userStep === 1 && compStep === 2) {
        result.playre += 1;
        // eslint-disable-next-line max-len
        alert(`${lang.compTitle}: ${lang.value[compStep]}\n${lang.playerTitle}: ${lang.value[userStep]}\n${lang.playerWin}`);
        return repeatGame(lang, start, result);
      }
      if (userStep === 2 && compStep === 1) {
        result.computer += 1;
        // eslint-disable-next-line max-len
        alert(`${lang.compTitle}: ${lang.value[compStep]}\n${lang.playerTitle}: ${lang.value[userStep]}\n${lang.compWin}`);
        return repeatGame(lang, start, result);
      }
    };
  };

  window.RPS = game;
})();
