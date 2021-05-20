const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];

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
  }
}

let computerChoice = randomPick();

// let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
// let computerChoice = VALID_CHOICES[randomIndex];

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let userChoice = readline.question();

  while (!VALID_CHOICES.includes(userChoice.toLowerCase())) {
    prompt("Invalid choice, please try again");
    userChoice = readline.question();
  }

  prompt(`You chose ${userChoice}, computer chose ${computerChoice}`);

  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    prompt("You win!");
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    prompt("Computer wins!");
  } else {
    prompt("It's a tie");
  }

  let playAgain;
  do {
    prompt("Would you like to play again? Y/N");
    playAgain = readline.question();
  } while ((playAgain.toLowerCase() !== "n") && (playAgain.toLowerCase() !== "y"));

  if (playAgain.toLowerCase() === "n") {
    break;
  } else if (playAgain.toLowerCase() === "y") {
    continue;
  }
}
