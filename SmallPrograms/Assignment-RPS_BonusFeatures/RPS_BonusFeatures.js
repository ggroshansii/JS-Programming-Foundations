const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const alt_VALID_CHOICES = ["r", "p", "sc", "l", "sp"];

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
      case "r":
        return "rock";
      case "p":
        return "paper";
      case "sc":
        return "scissors";
      case "l":
        return "lizard";
      case "sp":
        return "spock";
    }
  } else {
    return userChoice;
  }
}

function displayRoundWinner(userChoice, computerChoice) {
  prompt(
    `You chose ${findFullNameOfChoice(
      userChoice
    )}, computer chose ${computerChoice}`
  );

  if (
    ((userChoice === "rock" || userChoice === "r") &&
      computerChoice === "scissors") ||
    ((userChoice === "rock" || userChoice === "r") &&
      computerChoice === "lizard") ||
    ((userChoice === "paper" || userChoice === "p") &&
      computerChoice === "rock") ||
    ((userChoice === "paper" || userChoice === "p") &&
      computerChoice === "spock") ||
    ((userChoice === "scissors" || userChoice === "sc") &&
      computerChoice === "paper") ||
    ((userChoice === "scissors" || userChoice === "sc") &&
      computerChoice === "lizard") ||
    ((userChoice === "spock" || userChoice === "sp") &&
      computerChoice === "scissors") ||
    ((userChoice === "spock" || userChoice === "sp") &&
      computerChoice === "rock") ||
    ((userChoice === "lizard" || userChoice === "l") &&
      computerChoice === "paper") ||
    ((userChoice === "lizard" || userChoice === "l") &&
      computerChoice === "spock")
  ) {
    prompt("You Win this round!");
    userScore++;
  } else if (userChoice === computerChoice) {
    prompt("This round is a tie");
  } else {
    prompt("Computer wins this round!");
    computerScore++;
  }
}

function grandWinner() {
  if (computerScore === 5) {
    return `\n\n\nThe Computer won! Score: Computer:${computerScore} User:${userScore}`;
  } else if (userScore === 5) {
    return `\n\n\nThe User won! Score: Computer:${computerScore} User:${userScore}`;
  }
}

let computerScore = 0;
let userScore = 0;
while (computerScore < 5 && userScore < 5) {
  let computerChoice = randomPick();

  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let userChoice = readline.question();

  while (
    !VALID_CHOICES.includes(userChoice.toLowerCase()) &&
    !alt_VALID_CHOICES.includes(userChoice.toLowerCase())
  ) {
    prompt("Invalid choice, please try again");
    userChoice = readline.question();
  }

  displayRoundWinner(userChoice, computerChoice);

  let playAgain;
  if (grandWinner() === undefined) {
    continue;
  } else {
    console.log(grandWinner());
    prompt("Would you like to play again? y/n");
    playAgain = readline.question();
    if (playAgain.toLowerCase() === "y") {
      computerScore = 0;
      userScore = 0;
      continue;
    } else {
      break;
    }
  }
}
