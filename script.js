/* Computer will randomly return value from 1 to 3 */
const getComputerMathChoice = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
var computerResponse = getComputerMathChoice(1, 3);

/* Conditional statement for choosing rock, paper, scissors */
const computerSelection = (choice) => {
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
let uRock, uPaper, uScissors;

if (userAnswer === "rock") {
  uRock = userAnswer;
} else if (userAnswer === "paper") {
  uPaper = userAnswer;
} else if (userAnswer === "scissors") {
  uScissors = userAnswer;
}

const playRound = (playerSelection, computerSelection) => {
  if (uRock && paper)
    if (playerSelection === computerSelection) {
      console.log("Its a tie!");
    }
};
