const readline = require('readline-sync');

function prompt(str) {
  console.log(`=> ${str}`);
}

function invalidNumber(num) {
  return Number.isNaN(Number(num)) || num.trim() === "";
}

function invalidOperation(input) {
  switch (input) {
    case "1":
      return false;
    case "2":
      return false;
    case "3":
      return false;
    case "4":
      return false;
    default:
      return true;
  }
}

console.log('Welcome to Calculator!');

let calculate = true;

while(calculate) {


prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  console.log("You have entered an invalid number, please try again");
  number1 = readline.question();
}

prompt("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  console.log("You have entered an invalid number, please try again");
  number2 = readline.question();
}

prompt("Select an operation:\n 1) Add, 2) Subtract, 3) Multiply, 4) Divide");
let operation = readline.question();

while (invalidOperation(operation)) {
  console.log("You have entered an invalid operation, please try again");
  operation = readline.question();
}

let output;
switch (operation) {
  case "1":
    output = Number(number1) + Number(number2);
    break;
  case "2":
    output = Number(number1) - Number(number2);
    break;
  case "3":
    output = Number(number1) * Number(number2);
    break;
  case "4":
    output = Number(number1) / Number(number2);
    break;
}

prompt(`The output is ${output}`);


prompt('Another calculation? Type "Y" or "N"');
let anotherCalc = readline.question();

if (anotherCalc === "Y") {
  continue;
} else {
  calculate = false;
}


}
