//Display elements: choices and score.

const playerChoiceDisp = document.getElementById('playerChoice')
const computerChoiceDisp = document.getElementById('computerChoice')
const resultDisp = document.getElementById('winner')
const possibleChoices = document.querySelectorAll('button')
let playerChoice
let computerSelection
let result

// User Choice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    playerChoice = e.target.id
    playerChoiceDisp.innerHTML = playerChoice
    generateCompChoice()
    getResult()
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

function getResult() {

     if (playerChoice === computerSelection) {
        result = 'It\'s a tie!!' 
    } 
    else if (playerChoice === 'rock' && computerSelection === 'paper') {                                 
        result = 'Paper beats Rock! Computer wins!!';
    } 
    else if (playerChoice === 'rock' && computerSelection === 'scissors') {
        result = 'Rock beats Scissors! You win!!';                    // ROCK vs SCISSORS
    } 
    else if (playerChoice === 'paper' && computerSelection === 'rock') {
        result = 'Paper beats Rock! You win!!';                       // PAPER vs ROCK
    } 
    else if (playerChoice === 'paper' && computerSelection === 'scissors') {
        result = 'Scissors beat Paper! Computer wins!!';              // PAPER vs SCISSORS
    } 
    else if (playerChoice === 'scissors' && computerSelection === 'rock') {
        result = 'Rock beats Scissors! Computer wins!!';              // SCISSORS vs ROCK
    } 
    else if (playerChoice === 'scissors' && computerSelection === 'paper') {
        result = 'Scissors beat Paper! You win!!';                    // SCISSORS vs PAPER
    }
    resultDisp.innerHTML = result
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



