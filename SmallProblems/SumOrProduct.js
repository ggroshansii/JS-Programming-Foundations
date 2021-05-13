
let readline = require('readline-sync');

let number = parseInt(readline.question('Enter an integer greater than 0: '), 10);
let sumOrProduct = readline.question("Enter 's' to compute the sum, or 'p' to compute the product: ");

let product = 1;
let sum = 0;

if (sumOrProduct === "s") {
  for (let index = 1; index <= number; index++) {
    sum += index;
  }
  console.log(`The sum of the integers between 1 and ${number} is ${sum}`);
} else if (sumOrProduct === "p") {
  for (let index = 1; index <= number; index++) {
    product *= index;
  }
  console.log(`The product of the integers between 1 and ${number} is ${product}`);
}