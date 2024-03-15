/* Computer will randomly return value from 1 to 3 */
const getComputerChoice = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
var computerResponse = getComputerChoice(1, 3);

/* Conditional statement for choosing rock, paper, scissors */
if (computerResponse === 1) {
  console.log("Rock");
} else if (computerResponse === 2) {
  console.log("Paper");
} else {
  console.log("Scissors");
}
