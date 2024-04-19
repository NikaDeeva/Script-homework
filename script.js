"use strict"

let age = 13;
console.log(age);

const userName = "Nika";
console.log(userName);

const isStudent = true;
console.log(isStudent);

const myString = "Clever frase";
console.log(myString);

const myNumber = 5;
let a = myNumber + 10;
console.log(a);

const myNull = null;
console.log(myNull);

const message = prompt("Write your name");
console.log(message);

const name = prompt(`Введіть своє імʼя`);
alert(`Привіт ${name}!`);

const change = confirm(`Та чи нє?`);
if (change === true) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}

alert("Дія небезпечна!");
const danger = confirm(`Дія небезпечна, ви точно хочете підтвердити?`);

if ( danger === true) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}

