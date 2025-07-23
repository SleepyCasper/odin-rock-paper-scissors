// Script gets human's choice by a prompt.
// Generates a random choice as an answer.
// Tells who won the round
// Keeps track on scores and plays 5 rounds
// After 5 rounds announces who won the game

const rock = 0;
const paper = 1;
const scissors = 2;
const choices = ["Rock", "Paper", "Scissors"];

let humanScore = 0;
let computerScore = 0;

function getHumanChoice () {
    let choice = prompt("Enter your choice").toLowerCase();
    if (choice === "rock") {
        return rock;
    } else if (choice === "paper") {
        return paper;
    } else (choice === "scissors"); {
        return scissors;
    }
}

function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);

    let choiceName = "";
    if (choice === rock) {
      choiceName = "Rock";
    } else if (choice === paper) {
      choiceName = "Paper";
    } else if (choice === scissors) {
      choiceName = "Scissors";
    }
    alert("Computer chose: " + choiceName);
    return choice;
}

function playRound (human, computer) {
    human = getHumanChoice();
    computer = getComputerChoice();

    let humanChoice = choices[human];
    let computerChoice = choices[computer];

    console.log("Human chose:", human);
    console.log("Computer chose:", computer);

    if (
        (computer === rock && human === paper) ||
        (computer === paper && human === scissors) ||
        (computer === scissors && human === rock)
    ) {
        humanScore++
        alert("You won! " + humanChoice + " beats " + computerChoice);
        alert ("Your score: " + humanScore + 
        ". Computer's score: " + computerScore);
        return "win"
    } else if (
        (computer === rock && human === scissors) ||
        (computer === paper && human === rock) ||
        (computer === scissors && human === paper)
    ) {
        computerScore++
        alert("You lost! " + computerChoice + " beats " + humanChoice);
        alert ("Your score: " + humanScore + 
        ". Computer's score: " + computerScore);
        return "lose"
    } else {
        alert("Draw!");
        alert ("Your score: " + humanScore + 
        ". Computer's score: " + computerScore);
        return "draw"
    }
}

function playGame () {
    alert("Round 1!");
    let game1 = playRound();
    alert("Round 2!");
    let game2 = playRound();
    alert("Round 3!");
    let game3 = playRound();
    alert("Round 4!");
    let game4 = playRound();
    alert("Round 5!");
    let game5 = playRound();

    // not needed array, for the final alert used humanScore and computerScore variables:

    // let result = [game1, game2, game3, game4, game5];
    // let wins = result.filter(r => r === "win").length;
    // let loses = result.filter(r => r === "lose").length;
    // let draws = result.filter(r => r === "draw").length;

    if (humanScore > computerScore) {
        alert("You won the game! Your score: " + humanScore + 
        ". Computer's score: " + computerScore + ".");
    } else if (computerScore > humanScore) {
        alert("You lost the game! Your score: " + humanScore + 
        ". Computer's score: " + computerScore + ".");
    } else {
        alert("It's a draw! Your score: " + humanScore + 
        ". Computer's score: " + computerScore + ".");
    }
}

playGame();