// rock beats scissors

// paper beats rock

// scissors beats paper

// two people have the same choice, then its a tie

// there will only be two players, the person and the computer\

// create a function called getComputerChoice that will allow the computer to have a random choice of rock, paper or scissors
let choices = ["rock", "paper", "scissors"];
// console.log(choices[0]);

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let randomNumberRounded = Math.floor(randomNumber);
  console.log(choices[randomNumberRounded]);
}

// getComputerChoice();

///

// create an array called choices with three choices, rock paper scissors

let choices1 = ["rock", "paper", "scissors"];

// create a function called getComputerChoice1 to allow the computer to have a random choice

function getComputerChoice1() {
  // generate a random number from 0 to 3
  let randomNumber1 = Math.random() * 3;
  let randomNumberRounded1 = Math.floor(randomNumber1);

  console.log(choices1[randomNumberRounded1]);
}

getComputerChoice1();
