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

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const result = document.querySelector("#result");
const sta = document.querySelector("#stat");
const winner = document.querySelector("#winner");

/* One round */
let stat;
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === "rock" && computerSelection === "paper") {
    stat = "Computer wins this round! Paper beats rock";
    computerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    stat = "You win this round! Paper beats rock";
    humanScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    stat = "You win this round! Scissors beat paper";
    humanScore++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    stat = "Computer wins this round! Rock beat scissors";
    computerScore++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    stat = "You win this round! Rock beat scissors";
    humanScore++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    stat = "Computer wins this round! Scissors beat paper";
    computerScore++;
  } else if (playerSelection === computerSelection) {
    stat = "Its a tie!";
  }
};

playGame = () => {
  if (computerScore === 5) {
    winner.textContent =
      "Computer won, you lost. Reload the page for another game.";
  } else if (humanScore === 5) {
    winner.textContent = "You won! Congrats! Reload the page for another game.";
  }
};

rockBtn.addEventListener("click", () => {
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection());
  playGame();
  if (computerScore === 5 || humanScore === 5) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
  result.textContent = `Score is: Computer: ${computerScore} You: ${humanScore}`;
  sta.textContent = `${stat}`;
});

paperBtn.addEventListener("click", () => {
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection());
  playGame();
  if (computerScore === 5 || humanScore === 5) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
  result.textContent = `Score is: Computer: ${computerScore} You: ${humanScore}`;
  sta.textContent = `${stat}`;
});

scissorsBtn.addEventListener("click", () => {
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection());
  playGame();
  if (computerScore === 5 || humanScore === 5) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
  result.textContent = `Score is: Computer: ${computerScore} You: ${humanScore}`;
  sta.textContent = `${stat}`;
});
