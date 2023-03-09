// Computer choses random option of 1, 2 and 3.

let computerSelection = Math.floor(Math.random() * 3) + 1;

console.log(computerSelection);                                                         //Just checking...

// Assign rock, paper and scissors to the integers.

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
console.log(computerSelection);



// userSelection from html buttons.



















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



