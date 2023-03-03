// Computer choses random option of rock, paper or scissors.

let computerSelection = Math.floor(Math.random() * 3) + 1;

console.log(computerSelection);                                                         //Just checking...


// Prompt user to select rock, paper or scissors.
// Adjust users Input to LOWER CASE.

let selection = prompt('Choose your weapon, rock, paper or scissors?');

let playerSelection = selection.toLowerCase();


// Assign integers to the rock, paper, scissors variables.

switch (playerSelection) {
    case 'rock':
        playerSelection = 1;
        break;
    case 'paper':
        playerSelection = 2;
        break;
    case 'scissors':
        playerSelection = 3;
        break;
    default:
        let error = playerSelection === false;
        error = 'Sorry, try again!'
        console.log(error);
}
console.log(playerSelection);                                                           //Just checking...


// Game

function playRound(playerSelection, computerSelection) {

    
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!!'                                      // TIE
    } else if (playerSelection === 1 && computerSelection === 2) {
        return 'Paper beats Rock! Computer wins!!';                 // ROCK vs PAPER
    } else if (playerSelection === 1 && computerSelection === 3) {
        return 'Rock beats Scissors! You win!!';                    // ROCK vs SCISSORS
    } else if (playerSelection === 2 && computerSelection === 1) {
        return 'Paper beats Rock! You win!!';                       // PAPER vs ROCK
    } else if (playerSelection === 2 && computerSelection === 3) {
        return 'Scissors beat Paper! Computer wins!!';              // PAPER vs SCISSORS
    } else if (playerSelection === 3 && computerSelection === 1) {
        return 'Rock beats Scissors! Computer wins!!';              // SCISSORS vs ROCK 
    } else if (playerSelection === 3 && computerSelection === 2) {
        return 'Scissors beat Paper! You win!!';                    // SCISSORS vs PAPER
    }
}
console.log(playRound(playerSelection, computerSelection));                             //Just checking...





// DEFAULT: If user inputs doesnt match rock, paper, or scissors then return an ERROR message to the console.


// GAME lasts for 5 ROUNDS.
// Compare scores and assign a winner.


// RESET to play again.



