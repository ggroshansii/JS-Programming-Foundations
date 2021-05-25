let readline = require('readline-sync');

function prompt(str) {
  return console.log(`==> ${str}`);
}

prompt("Please enter bill amount: ");
let billAmount = readline.question();

prompt("Please enter tip rate: ");
let tipRate = readline.question();

let tip = Number(billAmount) * (Number(tipRate) / 100);
let totalAmount = Number(tip) + Number(billAmount);

console.log(`The tip is: $${tip}`);
console.log(`The total amount of the bill is: $${totalAmount}`);