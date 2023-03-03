// Computer choses random option of rock, paper or scissors.

let getComputerChoice = Math.floor(Math.random() * 3) + 1;

console.log(getComputerChoice); //Just checking...


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
console.log(playerSelection); //Just checking...



// if the users choice and computers choice are EQUAL then return a TIE message to the console.

// function playRound(playerSelection, computerSelection) {

//     if (playerSelection === computerSelection) {
//         return 'It\'s a tie!!' 
//     }
// }
// 

// ROCK: If the user choice is ROCK and computer choice is PAPER then return a COMPUTER WINS message to the console.
// Add 1 to COMPUTERS score.

// ROCK: If the users choice is ROCK and computer choice is SCISSORS then return a USER WINS message to the console.
// Add 1 to the USERS score.



// PAPER: If the user choice is PAPER and computer choice is ROCK then return a USER WINS message to the console.
// Add 1 to USERS score.

// PAPER: If the user choice is PAPER and computer choice is SCISSORS then return a COMPUTER WINS message to the console.
// Add 1 to COMPUTERS score.



// SCISSORS: If the user choice is SCISSORS and computer choice is ROCK then return a COMPUTER WINS message to the console.
// Add 1 to COMPUTER score.

// SCISSORS: If the user choice is SCISSORS and computer choice is PAPER then return a USER WINS message to the console.
// Add 1 to USERS score.


// DEFAULT: If user inputs doesnt match rock, paper, or scissors then return an ERROR message to the console.


// GAME lasts for 5 ROUNDS.
// Compare scores and assign a winner.


// RESET to play again.



