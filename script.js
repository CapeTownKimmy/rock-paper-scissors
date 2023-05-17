//Display elements: choices and score.

const possibleChoices = document.querySelectorAll('button');             //All buttons//

const playerChoiceDisp = document.getElementById('playerIcon');         //Player Icons//
const computerChoiceDisp = document.getElementById('computerIcon');     //Comp Icons//

const winnerBorderPlayer = document.getElementById('playerChoice')      //Winner border Element//
const winnerBorderComp = document.getElementById('computerChoice')      //Winner border Element//

const playerScoreDisp = document.getElementById('playerScoreDisp');     //Player Score display//
const computerScoreDisp = document.getElementById('computerScoreDisp'); //Comp Score display//


let playerChoice;               //The button clicked by player//
let computerSelection;          //The random number assigned to rps//
let playerElement;              //Players icon displys linked to button//
let compElement;                //Computer icon displys linked to button//
let playerScore = 0;            //Player score//
let computerScore = 0;          //Computer score//


// User Choice Button clicks//

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id;
    showPlayerIcon();
    generateCompChoice();
    getResult();
    gameOver();
}))


//Display choice icons in display box//

function showPlayerIcon() {

    if(playerElement !== undefined) {
        playerChoiceDisp.removeChild(playerElement);
    }
    if (winnerBorderPlayer.classList.contains('playerWinnerBorder')) {
        winnerBorderPlayer. classList.remove('playerWinnerBorder');
    }
  
    switch (playerChoice) {
        case 'rock':
            playerElement = document.createElement('img');
            playerElement.setAttribute('src', './images/rock.png');
            resizeIcons()
            break;
        case 'paper':
            playerElement = document.createElement('img');
            playerElement.setAttribute('src', './images/paper.png');
            resizeIcons()
            break;
        case 'scissors':
            playerElement = document.createElement('img');
            playerElement.setAttribute('src', './images/scissors.png');
            resizeIcons()
            break;
    }
    
    playerChoiceDisp.appendChild(playerElement);
    console.log(playerChoice);
}




// Generating random comp selection//

function generateCompChoice(){

    if(compElement !== undefined) {
        computerChoiceDisp.removeChild(compElement);
    }
    if (winnerBorderComp.classList.contains('compWinnerBorder')) {
        winnerBorderComp.classList.remove('compWinnerBorder');
    }

    computerSelection = Math.floor(Math.random() * 3) + 1;

        switch (computerSelection) {
            case 1: 
                computerSelection = 'rock';
                compElement = document.createElement('img');
                compElement.setAttribute('src', './images/rock.png');
                resizeIconsComp()
                break;
            case 2:
                computerSelection = 'paper';
                compElement = document.createElement('img');
                compElement.setAttribute('src', './images/paper.png');
                resizeIconsComp()
                break;
            case 3:
                computerSelection = 'scissors';
                compElement = document.createElement('img');
                compElement.setAttribute('src', './images/scissors.png');
                resizeIconsComp()
                break;
        }

    computerChoiceDisp.appendChild(compElement);
    console.log(computerSelection);
}

//Round

function getResult() {

     if (playerChoice === computerSelection) {
       winnerPlayer();
       winnerComp();
       playerScoreDisp.innerHTML = playerScore +=1;
       computerScoreDisp.innerHTML = computerScore +=1;
    } 
    else if (
        (playerChoice === 'scissors' && computerSelection === 'paper')
        ||
        (playerChoice === 'paper' && computerSelection === 'rock')
        ||
        (playerChoice === 'rock' && computerSelection === 'scissors')
        ) {
            winnerPlayer();
            return playerScoreDisp.innerHTML = playerScore +=1;
    } 
    else if (
        (playerChoice === 'rock' && computerSelection === 'paper')
        ||
        (playerChoice === 'paper' && computerSelection === 'scissors')
        ||
        (playerChoice === 'scissors' && computerSelection === 'rock')
        ) {
            winnerComp();
            return computerScoreDisp.innerHTML = computerScore +=1;
        }
    
}

//functions to display winner border//
function winnerPlayer() {
    winnerBorderPlayer.classList.add('playerWinnerBorder');
}
function winnerComp() {
    winnerBorderComp.classList.add('compWinnerBorder');
}



// Game = best of 5 rounds.

function gameOver() {
    if (playerScore === 5 && computerScore < 5) {
        playerScore = 0
        computerScore = 0
    } else if (playerScore < 5 && computerScore === 5) { 
        playerScore = 0
        computerScore = 0  
    } else {
    }
    
}


//Resize created icons//
function resizeIcons() {
    playerElement.style.width = '150px';
    playerElement.style.margin = '15px 30px';
}
function resizeIconsComp() {
    compElement.style.width = '150px';
    compElement.style.margin = '15px 30px';
}







































