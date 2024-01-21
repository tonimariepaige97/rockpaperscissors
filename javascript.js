// rock beats scissors

// paper beats rock

// scissors beats paper

// two people have the same choice, then its a tie

// there will only be two players, the person and the computer

// put the three choices into an array
let choices = ["rock", "paper", "scissors"];

// create a function called getComputerChoice that will allow the computer to have a random choice of rock, paper or scissors
function getComputerChoice() {
  // create a random number between 0 and 3
  let randomNumber = Math.random() * 3;
  // rounding the random number to a whole number
  let randomNumberRounded = Math.floor(randomNumber);

  return choices[randomNumberRounded];
}

// console.log(getComputerChoice());

// write a function that plays a single round of Rock Paper Scissors.

// playerSelection and computerSelection

// if player selection chooses rock and rock goes against computer selection who chose scissors, goes against scissors, player selection wins

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! rock beats scissors!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! rock beats scissors!";
  }
}

playRound("rock", getComputerChoice());

// function add(num1, num2, num3) {
//   console.log(num2);
// }

// add(8, 9);
