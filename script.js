//Display elements: choices and score.

const possibleChoices = document.querySelectorAll('button')
const playerChoiceDisp = document.getElementsByClassName('playerIcon')
const computerChoiceDisp = document.getElementsByClassName('computerIcon')
const resultDisp = document.getElementById('winner')
const playerScoreDisp = document.getElementsByClassName('playerScoreBox')
const computerScoreDisp = document.getElementsByClassName('computerScoreBox')
const winnerModal = document.getElementById('winnerModal')

let playerChoice
let computerSelection
let playerElement
let compElement
let result
let playerScore = 0
let computerScore = 0

// User Choice Button clicks//

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    playerChoice = e.target.id
    showPlayerIcon()
    generateCompChoice()
    // getResult()
    // gameOver()
}))


//Display choice icons in display box//

function showPlayerIcon() {

    switch (playerChoice) {
        case 'rock':
            playerElement = document.getElementById('playerRockIcon').style.visibility = 'visible';
            break;
        case 'paper':
            playerElement = document.getElementById('playerPaperIcon').style.visibility = 'visible';
            break;
        case 'scissors':
            playerElement = document.getElementById('playerScissorsIcon').style.visibility = 'visible';
            break;
    }
    playerChoiceDisp.innerHTML = playerElement;
    console.log(playerChoice);
}


// Generating random comp selection//

function generateCompChoice(){

    computerSelection = Math.floor(Math.random() * 3) + 1;

        switch (computerSelection) {
            case 1: 
                computerSelection = 'rock';
                compElement = document.getElementById('compRockIcon').style.visibility = 'visible';;
                break;
            case 2:
                computerSelection = 'paper';
                compElement = document.getElementById('compPaperIcon').style.visibility = 'visible';;
                break;
            case 3:
                computerSelection = 'scissors';
                compElement = document.getElementById('compScissorsIcon').style.visibility = 'visible';
                break;
        }

    computerChoiceDisp.innerHTML = compElement
    console.log(computerSelection);
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























