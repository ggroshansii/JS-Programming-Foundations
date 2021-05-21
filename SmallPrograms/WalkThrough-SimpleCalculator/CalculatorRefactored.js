const readline = require('readline-sync');
const json = require('./calculator_messages.json');

function prompt(str) {
  console.log(`=> ${str}`);
}

function messages(message, lang) {
  return json[lang][message];
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
console.log("Language: 1) English, 2) Spanish?");
let languageSelection = readline.question();
let lang = (languageSelection === '1') ? 'en' : 'es';

console.log(messages('welcome', lang));

while (true) {

  prompt(messages('number1', lang));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    console.log(messages('invalidNumber', lang));
    number1 = readline.question();
  }

  prompt(messages('number2', lang));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    console.log(messages('invalidNumber', lang));
    number2 = readline.question();
  }

  prompt(json.operation);
  let operation = readline.question();

  while (invalidOperation(operation)) {
    console.log(messages('invalidOperation', lang));
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


  prompt(messages('anotherCalc', lang));
  let anotherCalc = readline.question();

  if (anotherCalc !== "Y" || anotherCalc !== "y") {
    break;
  }
}