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
let display = document.createElement('div');
display.classList.add('display');
container.appendChild(display);


//one round of rock paper scissors and return result
function playRPS (playerSelection, computerSelection) {
    const playerSelectionFormatted = playerSelection.toLowerCase();

    if (playerSelectionFormatted == 'rock') {
        if (computerSelection == 'rock') {
            display.textContent = `${playerSelection}  vs. ${computerSelection} \n 
                                    No winner! Score stays ${playerCount}:${computerCount}!`;
        }
        else if (computerSelection == 'paper') {
            computerCount += 1;
            display.textContent = `${playerSelection}  vs. ${computerSelection} \n 
                                    Computer wins! New score: ${playerCount}:${computerCount}!`;
        }
        playerCount += 1;
        display.textContent = `${playerSelection}  vs. ${computerSelection} \n 
                                You win! New score: ${playerCount}:${computerCount}!`;

    }
    else if (playerSelectionFormatted == 'paper') {
        if (computerSelection == 'rock') {
            playerCount += 1;
            display.textContent = `${playerSelection}  vs. ${computerSelection} \n 
                                    You win! New score: ${playerCount}:${computerCount}!`;
        }
        else if (computerSelection == 'paper') {
            display.textContent = `${playerSelection}  vs. ${computerSelection} \n 
                                    No winner! Score stays ${playerCount}:${computerCount}!`
        }
        computerCount += 1;
        display.textContent = `${playerSelection}  vs. ${computerSelection} \n 
                                Computer wins! New score: ${playerCount}:${computerCount}!`;

    }
    else if (playerSelectionFormatted == 'scissors'){
        if (computerSelection == 'rock') {
            computerCount += 1;
            display.textContent = `${playerSelection}  vs. ${computerSelection} \n
                                    Computer wins! New score: ${playerCount}:${computerCount}!`; 
        }
        else if (computerSelection == 'paper') {
            playerCount += 1;
            display.textContent = `${playerSelection}  vs. ${computerSelection} \n
                                    You win! New score: ${playerCount}:${computerCount}!`;
        }
        display.textContent = `${playerSelection}  vs. ${computerSelection} \n
                                No winner! Score stays ${playerCount}:${computerCount}!`;
    }
    else {
        display.textContent = 'Please enter one of rock, paper or scissors!';
    }
    if(playerCount == 3 || computerCount == 3) {
        if(playerCount == 3) {
            display.textContent = `Best of 5 is over! You win with the score ${playerCount}:${computerCount}!`;
        }
        else {
            display.textContent = `Best of 5 is over! Computer wins with the score ${playerCount}:${computerCount}!`;
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
start.addEventListener('click', initGame);

/**
 * 
 */
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

rock.addEventListener('click', () => {playRPS(rock.innerText, computerPlay())});
paper.addEventListener('click', () => {playRPS(paper.innerText, computerPlay())});
scissors.addEventListener('click', () => {playRPS(scissors.innerText, computerPlay())});
