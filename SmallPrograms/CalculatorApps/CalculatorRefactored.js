const readline = require('readline-sync');
const json = require('./calculator_messages.json');

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

console.log(json['welcome']);

let calculate = true;

while (calculate) {

  prompt(json['number1']);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    console.log(json['invalidNumber']);
    number1 = readline.question();
  }

  prompt(json['number2']);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    console.log(json['invalidNumber']);
    number2 = readline.question();
  }

  prompt(json.operation);
  let operation = readline.question();

  while (invalidOperation(operation)) {
    console.log(json['invalidOperation']);
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


  prompt(json['anotherCalc']);
  let anotherCalc = readline.question();

  if (anotherCalc !== "Y" || anotherCalc !== "y") { break; }
}

