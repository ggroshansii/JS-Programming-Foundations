const readline = require("readline-sync");
const json = require("./LoanCalculatorMessages.json");
let monthlyPayment;

function prompt(str) {
  return console.log(`==> ${str}`);
}

function message(message) {
  return json[message];
}

function findMonthlyInterestRate(APR) {
  if (APR.split("").includes("%")) {
    APR = Number(
      APR.split("")
        .splice(0, APR.length - 1)
        .join("")
    );
  }
  return Number(APR) / 100 / 12;
}

function findMonthlyPayment() {
  if (Number(APR) == 0) {
    return loanAmount / loanDuration;
  } else if (Number(APR) > 0) {
    return loanAmount * findMonthlyInterestRate(APR) / (1 - Math.pow(1 + findMonthlyInterestRate(APR), -loanDuration));
  }
}

console.log(message("Welcome"));
prompt(message("loanAmount"));
let loanAmount = Number(readline.question());
prompt(message("APR"));
let APR = readline.question();
prompt(message("loanDuration"));
let loanDuration = Number(readline.question());

console.log(findMonthlyPayment());
