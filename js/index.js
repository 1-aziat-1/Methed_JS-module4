"use strict";

const product = prompt("Наименование товара?");
const number = +prompt("Количество товара?");
const category = prompt("Категория товара?");
const price = +prompt("Цена товара?");


console.log(`На складе ${number} единицы товара ${product} на сумму ${number * price} деревянных`);

let num = prompt('Введите число', '0');

if (num >= 0) {
  console.log(typeof num);
  alert("Всё окей!");
} else {
  alert("Вы ввели некорректные данные");
}


