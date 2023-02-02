"use strict";

// const product = 'banana';
// const number = 20;
// const category = 'fruit';
// const price = 50;


// console.log(product);
// console.log(number * price);

//урок 2!!!!!!!!!!!!!!!!

const product = prompt("Наименование товара?");
const number = +prompt("Количество товара?");
const category = prompt("Категория товара?");
const price = +prompt("Цена товара?");

console.log(typeof product);
console.log(typeof number);
console.log(typeof category);
console.log(typeof price);

console.log(`На складе ${number} единицы товара ${product} на сумму ${number * price} деревянных`);