const readline = require('readline-sync');
const json = require("./LoanCalculatorMessages.json");

/////////////////////////////////////////////
function prompt(str) {
    return console.log(`==> ${str}`);
}

function message(message) {
    return json[message];
}

function monthlyInterestRate(APR, loanDuration){
    if (APR.split("").includes('%')){
        APR = APR.split("").splice(0, APR.length-1).join("");
    }
    return `${Number(APR) / Number(loanDuration)}`;
}

function monthlyPayment(loanAmount, loanDuration) {
    let monthly = (Number(loanAmount) * monthlyInterestRate(APR, loanDuration)) / (1 - Math.pow(1 + (monthlyInterestRate(APR, loanDuration)), Number((-loanDuration))));
    return monthly;
}

console.log(message("welcome"));

prompt(message("loanAmount"));
let loanAmount = readline.question();

prompt(message("APR"));
let APR = readline.question();

prompt(message("loanDuration"));
let loanDuration = readline.question();

console.log(monthlyInterestRate(APR, loanDuration));
console.log(monthlyPayment(loanAmount, loanDuration));