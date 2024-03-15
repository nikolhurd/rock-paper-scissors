/* Computer will randomly return value from 1 to 3 */
const getComputerMathChoice = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
var computerResponse = getComputerMathChoice(1, 3);

/* Conditional statement for choosing rock, paper, scissors */
const computerSelection = () => {
  if (computerResponse === 1) {
    return "rock";
  } else if (computerResponse === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

/* Takes inputs and transforms it into all lower case word*/
let fullUserAnswer = prompt("What do you choose?");
let userAnswer = fullUserAnswer.toLowerCase();

/* Stores answer inside a variable */
let playerSelection;
if (
  userAnswer === "rock" ||
  userAnswer === "paper" ||
  userAnswer === "scissors"
) {
  playerSelection = userAnswer;
} else {
  console.log("Invalid input. Choose rock, paper or scissors");
}

/* One round */
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("Computer wins! Paper beats rock");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win! Paper beats rock");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! Scissors beat paper");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("Computer wins! Rock beat scissors");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! Rock beat scissors");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("Computer wins! Scissors beat paper");
  } else if (playerSelection === computerSelection) {
    console.log("Its a tie!");
  }
};

playRound(playerSelection, computerSelection());
