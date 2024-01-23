// created a variable to insert user input
let sign = prompt("rock, scissors, or paper?");

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
  // rock and scissors

  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! rock beats scissors!");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose! rock beats scissors!");
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("You both chose rock!");
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log("You both chose scissors!");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose! scissors beats paper!");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! scissors beats paper!");
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("You both chose paper!");
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    console.log("You both chose scissors!");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win! paper beats rock!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose! paper beats rock!");
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("You both chose paper!");
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    console.log("You both chose rock!");
  }
}

// function to play a game best of five that keeps the score and reports the winner and the loser in the end

function game() {
  playRound(sign, getComputerChoice());
  playRound(sign, getComputerChoice());
  playRound(sign, getComputerChoice());
  playRound(sign, getComputerChoice());
  playRound(sign, getComputerChoice());
}

game();
