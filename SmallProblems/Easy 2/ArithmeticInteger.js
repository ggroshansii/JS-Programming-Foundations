
let readline = require('readline-sync');

function prompt(str) {
  return console.log(`=> ${str}`);
}

prompt("Enter the first number: ");
let number1 = Number(readline.question());

prompt("Enter the second number: ");
let number2 = Number(readline.question());

console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(number1 % number2);
console.log(number1 ** number2);