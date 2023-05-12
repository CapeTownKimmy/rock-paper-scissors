//Display elements: choices and score.

const possibleChoices = document.querySelectorAll('button');                    //All buttons//

const playerChoiceDisp = document.getElementsByClassName('playerIcon');         //Player Icons//
const computerChoiceDisp = document.getElementsByClassName('computerIcon');     //Comp Icons//

const playerScoreDisp = document.getElementById('playerScoreDisp');             //Player Score display//
const computerScoreDisp = document.getElementById('computerScoreDisp');         //Comp Score display//

const winnerModal = document.getElementById('winnerModal');                     //Game winner pop-up//


let playerChoice            //The button clicked by player//
let computerSelection       //The random number assigned to rps//
let playerElement           //Players icon displys linked to button//
let compElement             //Computer icon displys linked to button//
let playerScore = 0;        //Player score//
let computerScore = 0;      //Computer score//

// User Choice Button clicks//

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    playerChoice = e.target.id
    showPlayerIcon()
    generateCompChoice()
    getResult()
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
       
    } 
    else if (
        (playerChoice === 'scissors' && computerSelection === 'paper')
        ||
        (playerChoice === 'paper' && computerSelection === 'rock')
        ||
        (playerChoice === 'rock' && computerSelection === 'scissors')
        ) {
            console.log('Player Wins');
            winnerPlayer();
            return playerScoreDisp.innerHTML = playerScore +1;
    } 
    else if (
        (playerChoice === 'rock' && computerSelection === 'paper')
        ||
        (playerChoice === 'paper' && computerSelection === 'scissors')
        ||
        (playerChoice === 'scissors' && computerSelection === 'rock')
        ) {
            console.log('Comp Wins');
            winnerComp();
            return computerScoreDisp.innerHTML = computerScore +1;
        }
   
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

//functions to display winner border//
function winnerPlayer() {
    const winnerBorderPlayer = document.getElementById('playerChoice').classList;
    winnerBorderPlayer.add('playerWinnerBorder');
}
function winnerComp() {
    const winnerBorderComp = document.getElementById('computerChoice').classList;
    winnerBorderComp.add('compWinnerBorder');
}


//player wins//
// (playerChoice === 'scissors' && computerSelection === 'paper')
// (playerChoice === 'paper' && computerSelection === 'rock')
// (playerChoice === 'rock' && computerSelection === 'scissors')

//comp wins
// (playerChoice === 'rock' && computerSelection === 'paper')
// (playerChoice === 'paper' && computerSelection === 'scissors')
// (playerChoice === 'scissors' && computerSelection === 'rock')


















