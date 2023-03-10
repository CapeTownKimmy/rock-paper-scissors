//Display elements: choices and score.

const playerChoiceDisp = document.getElementById('playerChoice')
const computerChoiceDisp = document.getElementById('computerChoice')
const resultDisp = document.getElementById('winner')
const possibleChoices = document.querySelectorAll('button')
const playerScoreDisp = document.getElementById('playerScore')
const computerScoreDisp = document.getElementById('computerScore')
const gameWinner = document.getElementById('gameWinner')
let playerChoice
let computerSelection
let result
let playerScore = 0
let computerScore = 0

// User Choice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    playerChoice = e.target.id
    playerChoiceDisp.innerHTML = playerChoice
    generateCompChoice()
    getResult()
    gameOver()
}))

function generateCompChoice(){

    computerSelection = Math.floor(Math.random() * 3) + 1;

switch (computerSelection) {
    case 1: 
        computerSelection = 'rock';
        break;
    case 2:
        computerSelection = 'paper';
        break;
    case 3:
        computerSelection = 'scissors';
        break;
}

computerChoiceDisp.innerHTML = computerSelection
}

//Round

function getResult() {

     if (playerChoice === computerSelection) {
        result = 'It\'s a tie!!' 
    } 
    else if (playerChoice === 'rock' && computerSelection === 'paper') {                                 
        result = 'Paper beats Rock! Computer wins!!';
        ++computerScore
    } 
    else if (playerChoice === 'rock' && computerSelection === 'scissors') {
        result = 'Rock beats Scissors! You win!!';                    // ROCK vs SCISSORS
        ++playerScore
    } 
    else if (playerChoice === 'paper' && computerSelection === 'rock') {
        result = 'Paper beats Rock! You win!!';                       // PAPER vs ROCK
        ++playerScore
    } 
    else if (playerChoice === 'paper' && computerSelection === 'scissors') {
        result = 'Scissors beat Paper! Computer wins!!';              // PAPER vs SCISSORS
        ++computerScore
    } 
    else if (playerChoice === 'scissors' && computerSelection === 'rock') {
        result = 'Rock beats Scissors! Computer wins!!';              // SCISSORS vs ROCK
        ++computerScore
    } 
    else if (playerChoice === 'scissors' && computerSelection === 'paper') {
        result = 'Scissors beat Paper! You win!!';                    // SCISSORS vs PAPER
        ++playerScore
    }
    resultDisp.innerHTML = result
    computerScoreDisp.innerHTML = computerScore
    playerScoreDisp.innerHTML = playerScore
}


// Game = best of 5 rounds.

function gameOver() {
    if (playerScore === 5 && computerScore < 5) {
        gameWinner.innerHTML = 'You win!'
        playerScore = 0
        computerScore = 0
    } else if (playerScore < 5 && computerScore === 5) {
        gameWinner.innerHTML = 'Computer wins!' 
        playerScore = 0
        computerScore = 0  
    }
    
}



















// Assign integers to the rock, paper, scissors variables.

// switch (playerSelection) {
//     case 'rock':
//         playerSelection = 1;
//         break;
//     case 'paper':
//         playerSelection = 2;
//         break;
//     case 'scissors':
//         playerSelection = 3;
//         break;
//     default:
//         let error = playerSelection === false;
//         error = 'Sorry, try again!'
//         console.log(error);                             // DEFAULT: No rock,paper, scissors = ERROR message to the console.
// }
// console.log(playerSelection);                                                           //Just checking...



// Game and Score

// function playRound(playerSelection, computerSelection) {

//     if (playerSelection === computerSelection) {
//         return 'It\'s a tie!!'                                      // TIE
//     } else if (playerSelection === 1 && computerSelection === 2) {                                 
//         return 'Paper beats Rock! Computer wins!!';
//     } else if (playerSelection === 1 && computerSelection === 3) {
//         return 'Rock beats Scissors! You win!!';                    // ROCK vs SCISSORS
//     } else if (playerSelection === 2 && computerSelection === 1) {
//         return 'Paper beats Rock! You win!!';                       // PAPER vs ROCK
//     } else if (playerSelection === 2 && computerSelection === 3) {
//         return 'Scissors beat Paper! Computer wins!!';              // PAPER vs SCISSORS
//     } else if (playerSelection === 3 && computerSelection === 1) {
//         return 'Rock beats Scissors! Computer wins!!';              // SCISSORS vs ROCK
//     } else if (playerSelection === 3 && computerSelection === 2) {
//         return 'Scissors beat Paper! You win!!';                    // SCISSORS vs PAPER
//     }
// }



// GAME lasts for 5 ROUNDS.

// function game() {
    
//     for (let i = 1; i < 5; i++) {
//         playRound(5);
//     }
// }

// console.log(game);

// Compare scores and assign a winner.


// RESET to play again.



