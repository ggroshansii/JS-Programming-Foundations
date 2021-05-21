const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const alt_VALID_CHOICES = ['r', 'p', 'sc', 'l', 'sp'];

function prompt(string) {
  return console.log(`===> ${string}`);
}

function randomPick() {
  let randomChoice = Math.floor(Math.random() * VALID_CHOICES.length);
  switch (randomChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    case 3:
      return "lizard";
    case 4:
      return "spock";
  }
}

function findFullNameOfChoice(userChoice) {
    if (userChoice.length <= 2) {
      switch (userChoice) {
        case 'r':
          return 'rock';
        case 'p':
          return 'paper';
        case 'sc':
          return 'scissors';
        case 'l': 
          return "lizard";
        case 'sp':
          return "spock";
      }
    }  else {
      return userChoice;
    }
}

function displayWinner(userChoice, computerChoice) {
  prompt(`You chose ${findFullNameOfChoice(userChoice)}, computer chose ${computerChoice}`);

  if (
    ((userChoice === "rock" || userChoice === 'r') && computerChoice === "scissors") ||
    ((userChoice === "rock" || userChoice === 'r') && computerChoice === "lizard") ||
    ((userChoice === "paper" || userChoice === 'p') && computerChoice === "rock") ||
    ((userChoice === "paper" || userChoice === 'p') && computerChoice === "spock") ||
    ((userChoice === "scissors" || userChoice === 'sc') && computerChoice === "paper") ||
    ((userChoice === "scissors" || userChoice === 'sc')&& computerChoice === "lizard") ||
    ((userChoice === "spock" || userChoice === 'sp') && computerChoice === "scissors") ||
    ((userChoice === "spock" || userChoice === 'sp') && computerChoice === "rock") ||
    ((userChoice === "lizard" || userChoice === 'l') && computerChoice === "paper") ||
    ((userChoice === "lizard" || userChoice === 'l') && computerChoice === "spock")

  ) {
    prompt("You Win this round!")
    userScore++;
  } else if (
    ((userChoice === "rock" || userChoice === 'r') && computerChoice === "paper") ||
    ((userChoice === "rock" || userChoice === 'r') && computerChoice === "spock") ||
    ((userChoice === "paper" || userChoice === 'p') && computerChoice === "scissors") ||
    ((userChoice === "paper" || userChoice === 'p') && computerChoice === "lizard") ||
    ((userChoice === "scissors" || userChoice === 'sc') && computerChoice === "rock") ||
    ((userChoice === "scissors" || userChoice === 'sc') && computerChoice === "spock") ||
    ((userChoice === "spock" || userChoice === 'sp') && computerChoice === "paper") ||
    ((userChoice === "spock" || userChoice === 'sp') && computerChoice === "lizard") ||
    ((userChoice === "lizard" || userChoice === 'l') && computerChoice === "rock") ||
    ((userChoice === "lizard" || userChoice === 'l') && computerChoice === "scissors")
  ) {
    prompt("Computer wins this round!");
    computerScore++;
  } else {
    prompt("This round is a tie");
  }
}

function grandWinner(){
  if (computerScore === 3 ) {
    console.log("\n \n \n")
    return (`The Computer won! Score: Comuter:${computerScore} User:${userScore}`);
  } else if (userScore === 3) {
    console.log("\n \n \n")
    return (`The User won! Score: Comuter:${computerScore} User:${userScore}`);
  }
}

let computerScore = 0;
let userScore = 0;
while (computerScore < 3 && userScore < 3) {

  let computerChoice = randomPick();


  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let userChoice = readline.question();

  while (!VALID_CHOICES.includes(userChoice.toLowerCase()) && !alt_VALID_CHOICES.includes(userChoice.toLowerCase())) {
    prompt("Invalid choice, please try again");
    userChoice = readline.question();
  }

  displayWinner(userChoice, computerChoice);

  grandWinner();

  let playAgain;
  if (grandWinner() === undefined){
    continue;
  } else {
    prompt("Would you like to play again? y/n");
    playAgain = readline.question();
      if (playAgain.toLowerCase() === 'y') {
        computerScore = 0;
        userScore = 0;
        continue;
      } else {
        break;
      }
  }
}
