const readline = require('readline-sync');
const json = require("./LoanCalculatorMessages.json");


function prompt(str) {
    return console.log(`==> ${str}`);
}

function message(message) {
    return json[message];
}

function monthlyInterestRate(APR, loanDuration){
    if (APR.split("").includes('%')){
        APR = APR.split("").splice(0, APR.length-1).join("");
        console.log(APR);
    }
    return `Your monlthy interest rate is ${Number(APR) / Number(loanDuration)}%`;
}


console.log(message("welcome"));

prompt(message("loanAmount"));
let loanAmount = readline.question();

prompt(message("APR"));
let APR = readline.question();

prompt(message("loanDuration"));
let loanDuration = readline.question();

console.log(monthlyInterestRate(APR, loanDuration));