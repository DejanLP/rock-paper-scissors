/**
 * ============================
 * Part for game logic
 * ============================
 */
//randomly assign computer option
function computerPlay () {
    let random = parseInt(Math.random() * 100);

    if(random < 33) {
        return 'paper';
    }
    else if (random < 66) {
        return 'rock';
    }
    else {
        return 'scissors';
    }
}

//global count
let playerCount = 0;
let computerCount = 0;

const container = document.querySelector('.container');
const display = document.createElement('div');
let logger = document.createElement('h3');
display.classList.add('display');
display.classList.add('column-center');
display.appendChild(logger);



let reset = true;


//one round of rock paper scissors and return result
function playRPS (playerSelection, computerSelection) {
    if(reset) {
        container.appendChild(display);
        reset = false;
    }
    const playerSelectionFormatted = playerSelection.toLowerCase();

    if (playerSelectionFormatted == 'rock') {
        if (computerSelection == 'rock') {
            logger.textContent = `${playerSelection}  vs. ${computerSelection}:
                                    No winner! Score stays ${playerCount}:${computerCount}!`;
        }
        else if (computerSelection == 'paper') {
            computerCount += 1;
            logger.textContent = `${playerSelection}  vs. ${computerSelection}: 
                                    Computer wins! New score: ${playerCount}:${computerCount}!`;
        }
        else {
            playerCount += 1;
            logger.textContent = `${playerSelection}  vs. ${computerSelection}: 
                                    You win! New score: ${playerCount}:${computerCount}!`;
        }

    }
    else if (playerSelectionFormatted == 'paper') {
        if (computerSelection == 'rock') {
            playerCount += 1;
            logger.textContent = `${playerSelection}  vs. ${computerSelection}:
                                    You win! New score: ${playerCount}:${computerCount}!`;
        }
        else if (computerSelection == 'paper') {
            logger.textContent = `${playerSelection}  vs. ${computerSelection}:
                                    No winner! Score stays ${playerCount}:${computerCount}!`
        }
        else {
            computerCount += 1;
            logger.textContent = `${playerSelection}  vs. ${computerSelection}:
                                    Computer wins! New score: ${playerCount}:${computerCount}!`;
        }

    }
    else if (playerSelectionFormatted == 'scissors'){
        if (computerSelection == 'rock') {
            computerCount += 1;
            logger.textContent = `${playerSelection}  vs. ${computerSelection}:
                                    Computer wins! New score: ${playerCount}:${computerCount}!`; 
        }
        else if (computerSelection == 'paper') {
            playerCount += 1;
            logger.textContent = `${playerSelection}  vs. ${computerSelection}:
                                    You win! New score: ${playerCount}:${computerCount}!`;
        }
        else {
            logger.textContent = `${playerSelection}  vs. ${computerSelection}:
                                No winner! Score stays ${playerCount}:${computerCount}!`;
        }
    }
    else {
        logger.textContent = 'Please enter one of rock, paper or scissors!';
    }
    if(playerCount == 3 || computerCount == 3) {
        if(playerCount == 3) {
            endGame();
            logger.textContent = `Best of 5 is over! You win with the score ${playerCount}:${computerCount}!`;
            addPlayAgain();
        }
        else {
            endGame();
            logger.textContent = `Best of 5 is over! Computer wins with the score ${playerCount}:${computerCount}!`;
            addPlayAgain();
        }
    }
}

/**
 * ====================================
 * Part for the UI logic
 * ====================================
 */

//listen for start button, to start the game
const start = document.querySelector('.start-btn');
start.addEventListener('click', () => {initGame()});

const rock = document.createElement('button');
const scissors = document.createElement('button');
const paper = document.createElement('button');

function addOptions() {
    const buttons = document.querySelector('.buttons');

    rock.classList.add('option');
    rock.classList.add('rock');
    rock.textContent = 'Rock';
   
    paper.classList.add('option');
    paper.classList.add('paper');
    paper.textContent = 'Paper';
   
    scissors.classList.add('option');
    scissors.classList.add('scissors');
    scissors.textContent = 'Scissors';

    buttons.appendChild(rock);
    buttons.appendChild(paper);
    buttons.appendChild(scissors);
}

function initGame() {
    //new title for h1
    const h1 = document.querySelector('h1');
    h1.textContent = 'Rock, paper or scissors?';

    const start_btn = document.querySelector('.start-btn');
    start_btn.remove();

    addOptions();
}

function endGame() {
    rock.remove();
    paper.remove();
    scissors.remove();
}

function addPlayAgain() {
    const playAgain = document.createElement('button');
    playAgain.classList.add('start-btn');
    playAgain.textContent = 'Play again?';
    setTimeout( () => {
        playAgain.classList.add('playAgain');
        container.appendChild(playAgain);
    }, 750);
    playAgain.addEventListener('click', () => {
        reset = true;
        display.remove();
        initGame()
        playerCount = 0;
        computerCount = 0;
    });
}

rock.addEventListener('click', () => {playRPS(rock.innerText, computerPlay())});
paper.addEventListener('click', () => {playRPS(paper.innerText, computerPlay())});
scissors.addEventListener('click', () => {playRPS(scissors.innerText, computerPlay())});
