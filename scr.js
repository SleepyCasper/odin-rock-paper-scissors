// Script gets human's choice by a prompt.
// Generates a random choice as an answer.
// Tells who won the round
// Keeps track on scores and plays rounds until player or computer has 5 scores
// Announces who won the game and offers to play again

const scoreboardPlayer = document.querySelector('.scoreboard-player');
const scoreboardComp = document.querySelector('.scoreboard-comp');
const resultBoard = document.querySelector('.result-board');
const containerResult = document.querySelector('.container-result');

const buttons = document.querySelectorAll('button');

let playerChoice = 0;
let playerChoiceNum = 0;

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;

        console.log(playerChoice);
        playRound();
        finalResult();
    })
})

function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
      return "rock";
    } else if (choice === 1) {
      return "paper";
    } else return "scissors";
}

function playRound (player, computer) {
    computer = getComputerChoice();
    player = playerChoice;
    
  if (
        (computer === "rock" && player === "paper") ||
        (computer === "paper" && player === "scissors") ||
        (computer === "scissors" && player === "rock")
      ) {
          playerScore++;
          resultBoard.innerHTML = `You won!<br>Player choice: ${player}<br>Computer choice: ${computer}`;
          scoreboardPlayer.textContent = playerScore;
        } else if (
            (computer === "rock" && player === "scissors") ||
            (computer === "paper" && player === "rock") ||
            (computer === "scissors" && player === "paper")
          ) {
              computerScore++;
              resultBoard.innerHTML = `You lost!<br>Player choice: ${player}<br>Computer choice: ${computer}`;
              scoreboardComp.textContent = computerScore;
            } else {
              resultBoard.innerHTML = `It's a draw!<br>Player choice: ${player}<br>Computer choice: ${computer}`;
              }
}

function disableButtons (state) {
  buttons.forEach(button => {
    button.disabled = state;
  })
}

function finalResult () {
  
  if (playerScore === 5) {
    resultBoard.textContent = "You won the game!";
    disableButtons(true);
    reset();
  } else if (computerScore === 5) {
    resultBoard.textContent = "You lost the game!";
    disableButtons(true);
    reset();
  }
  
}

function reset () {
  const resetBtn = document.createElement("button");
  resetBtn.classList.add("button-reset");
  resetBtn.textContent = "Play again";
  resultBoard.appendChild(resetBtn);

  resetBtn.addEventListener ('click', () => {
    playerScore = 0;
    computerScore = 0;
    resultBoard.textContent = "";
    scoreboardComp.textContent = "";
    scoreboardPlayer.textContent = "";
    disableButtons(false);
    resetBtn.remove();
  })
}




