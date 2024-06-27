/* Computer will randomly return value from 1 to 3 */
const getComputerMathChoice = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/* Conditional statement for choosing rock, paper, scissors */
const computerSelection = () => {
  const computerResponse = getComputerMathChoice(1, 3);
  if (computerResponse === 1) {
    return "rock";
  } else if (computerResponse === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

let humanScore = 0;
let computerScore = 0;

/* One round */
let stat;
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock" && computerSelection === "paper") {
    stat = "Computer wins this round! Paper beats rock";
    computerScore ++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    stat = "You win this round! Paper beats rock";
    humanScore ++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    stat = "You win this round! Scissors beat paper";
    humanScore ++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    stat = "Computer wins this round! Rock beat scissors";
    computerScore ++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    stat = "You win this round! Rock beat scissors";
    humanScore ++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    stat = "Computer wins this round! Scissors beat paper";
    computerScore ++;
  } else if (playerSelection === computerSelection) {
    stat = "Its a tie!";
  }
};

function playGame() {
  for (let i = 0; i <= 4; i++) {
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

    let computerChoice = computerSelection();
    playRound(playerSelection, computerChoice);
    console.log(stat);
    console.log("Score of Computer: ", computerScore);
    console.log("Your Score: ", humanScore);
  }
  if (computerScore < humanScore) {
    console.log("You are a winner!");
  } else {
    console.log("You lost!");
  }
}
playGame();

