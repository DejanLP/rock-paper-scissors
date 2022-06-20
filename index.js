/**
 * ============================
 * Part for game logic
 * ============================
 */
//randomly assign computer option
function computerPlay () {
    let random = parseInt(Math.random() * 100);

    if(random < 33) {
        return 'Paper';
    }
    else if (random < 66) {
        return 'Rock';
    }
    else {
        return 'Scissors';
    }
}

//global count
let playerCount = 0;
let computerCount = 0;
let display = document.createElement('div');

//one round of rock paper scissors and return result
function playRPS (playerSelection, computerSelection) {
    const playerSelectionFormatted = playerSelection.toLowerCase();

    if (playerSelectionFormatted == 'rock') {
        if (computerSelection == 'rock') {
            console.log(playerSelection + ' vs. ' + computerSelection);
            console.log(`No winner! Score stays ${playerCount}:${computerCount}!`);
        }
        else if (computerSelection == 'paper') {
            console.log(playerSelection + ' vs. ' + computerSelection);
            computerCount += 1;
            console.log(`Computer wins! New score: ${playerCount}:${computerCount}!`);
        }
        console.log(playerSelection + ' vs. ' + computerSelection);
        playerCount += 1;
        console.log(`You win! New score: ${playerCount}:${computerCount}!`);

    }
    else if (playerSelectionFormatted == 'paper') {
        if (computerSelection == 'rock') {
            console.log(playerSelection + ' vs. ' + computerSelection);
            playerCount += 1;
            console.log(`You win! New score: ${playerCount}:${computerCount}!`);
        }
        else if (computerSelection == 'paper') {
            console.log(playerSelection + ' vs. ' + computerSelection);
            console.log(`No winner! Score stays ${playerCount}:${computerCount}!`);
        }
        console.log(playerSelection + ' vs. ' + computerSelection);
        computerCount += 1;
            console.log(`Computer wins! New score: ${playerCount}:${computerCount}!`);

    }
    else if (playerSelectionFormatted == 'scissors'){
        if (computerSelection == 'rock') {
            console.log(playerSelection + ' vs. ' + computerSelection);
            computerCount += 1;
            console.log(`Computer wins! New score: ${playerCount}:${computerCount}!`);
        }
        else if (computerSelection == 'paper') {
            console.log(playerSelection + ' vs. ' + computerSelection);
            playerCount += 1;
            console.log(`You win! New score: ${playerCount}:${computerCount}!`);
        }
        console.log(playerSelection + ' vs. ' + computerSelection);
        console.log(`No winner! Score stays ${playerCount}:${computerCount}!`);
    }
    else {
        console.log('Please enter one of rock, paper or scissors!');
    }
    if(playerCount == 3 || computerCount == 3) {
        if(playerCount == 3) {
            console.log(`Best of 5 is over! You win with the score ${playerCount}:${computerCount}!`);
        }
        else {
            console.log(`Best of 5 is over! Computer wins with the score ${playerCount}:${computerCount}!`);
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
