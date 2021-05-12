const readline = require('readline-sync');

function prompt(str){
  console.log(`=> ${str}`)
}

console.log('Welcome to Calculator!');

prompt("What's the first number?");
let number1 = readline.question();

prompt("What's the second number?");
let number2 = readline.question();

prompt("Select an operation:\n 1) Add, 2) Subtract, 3) Multiply, 4) Divide");
let operation = readline.question();

let output;
switch(operation) {
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