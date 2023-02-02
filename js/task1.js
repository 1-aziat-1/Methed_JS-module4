// const myWeight = 70;
// const speedLight = 3e8;
// const e = myWeight * speedLight**2;
// console.log(`моя энергия - ` +  e);

// урок 3 задание 1

{
  const rain = Math.round(Math.random());

if (rain === 1) {
console.log('Пошёл дождь. Возьмите зонт!');
} else {
console.log('Дождя нет!');
}
}


//урок 3 задание 2 

{
const math = + prompt('Введите колличество баллов по математике');
const russ = + prompt('Введите колличество баллов по русскому языку');
const inf = + prompt('Введите колличество баллов по информатике');
const total = 265;

if (math + russ + inf === total) {
    alert('Поздравляю, вы поступили на бюджет!');
  } else {
  alert('Вы не поступили');
}
}

//урок 3 задание 3

{
const many = +prompt('Владимир сколько денег вы хотите снять?');

const minMoney = 100;

if (many % minMoney === 0) {
  alert('Успешно');
} else {
  alert('Ошибка');
}
}